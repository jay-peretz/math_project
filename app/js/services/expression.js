'use strict';
/*global angular */
// factory expression.js is only used by ms-order-operations.js
// ms-order-operations is not in use in the project as of August 2014
angular.module('mathSkills.services')
    .factory('Expression', [function () {
        var valueId = 1,
            hasMoreRecent = function (array, id, start, end) {
                var ii = start;
                while (ii <= end) {
                    if (array[ii].op1.id === id || array[ii].op2.id === id) {
                        return true;
                    }
                    ii += 1;
                }
                return false;
            },
            mostRecentOperation = function mostRecentOperation(array, id, end) {
                var ii = end;
                while (ii !== -1) {
                    if (array[ii].op1.id === id) {
                        if (!(hasMoreRecent(array, array[ii].op2.id, ii + 1, end))) {
                            return ii;
                        } else {
                            return mostRecentOperation(array, array[ii].op2.id, end);
                        }
                    } else if (array[ii].op2.id === id) {
                        if (!(hasMoreRecent(array, array[ii].op1.id, ii + 1, end))) {
                            return ii;
                        } else {
                            return mostRecentOperation(array, array[ii].op1.id, end);
                        }
                    }
                    ii -= 1;
                }
                return false;
            },
            valueFromEvalQueue = function (exp) {
                var val;

                switch (exp.operator.value) {
                    case '+':
                        val = exp.op1.value + exp.op2.value;
                        break;
                    case '-':
                        val = exp.op1.value - exp.op2.value;
                        break;
                    case '*':
                        val = exp.op1.value * exp.op2.value;
                        break;
                    case '/':
                        val = exp.op1.value / exp.op2.value;
                        break;
                    case '^':
                        val = Math.pow(exp.op1.value, exp.op2.value);
                        break;
                }

                return val;
            };

        var Expression = function Expression(expString) {
            var queue = [],
                evaluationQueue = [];

            this.getExpString = function () {
                return expString;
            };

            this.getQueue = function () {
                return queue;
            };

            this.getEvaluationQueue = function () {
                return evaluationQueue;
            };

            this.parse();
            evaluationQueue = this.getOperations();
        };

        Expression.prototype.parse = function () {
            var expression = this.getExpString(),
                queue = this.getQueue(),
                subExpressionEnd = function (expression, start) {
                    var ii = start,
                        len = expression.length,
                        openParens = 0;

                    for (; ii < len; ii += 1) {
                        if (expression.charAt(ii) === '(') {
                            openParens += 1;
                        }

                        if (expression.charAt(ii) === ')') {
                            if (openParens > 0) {
                                openParens -= 1;
                            } else {
                                return ii;
                            }
                        }
                    }

                    throw {
                        name: 'ExpressionSyntaxError',
                        message: 'Could not find a closing parens for the parens opened at character ' + (start + 1)
                    };
                },
                explode = function (expression) {
                    var ii = 0,
                        len = expression.length,
                        expressionEnd,
                        literal = '',
                        character = '';

                    for (; ii < len; ii += 1) {
                        character = expression.charAt(ii);

                        if (character === '(') {
                            if (literal !== '') {
                                queue.push(literal);
                                literal = '';
                            }

                            expressionEnd = subExpressionEnd(expression, ii + 1);
                            queue.push(new Expression(expression.substr(ii + 1, expressionEnd - ii - 1)));
                            ii = expressionEnd + 1;
                        } else {
                            literal += character;
                        }
                    }

                    if (literal !== '') {
                        queue.push(literal);
                    }
                },
                parseLiterals = function () {
                    var ii = 0,
                        len = queue.length,
                        tempQueue = [],
                        operators = {
                            '+': null,
                            '-': null,
                            '*': null,
                            '/': null,
                            '^': null
                        },
                        jj,
                        jLen,
                        curString,
                        curChar,
                        value = '';

                    for (; ii < len; ii += 1) {
                        if (typeof queue[ii] === 'string') {
                            curString = queue[ii];

                            for (jj = 0, jLen = curString.length; jj < jLen; jj += 1) {
                                curChar = curString.charAt(jj);
                                if (curChar in operators) {
                                    if (value !== '') {
                                        tempQueue.push({
                                            type: 'value',
                                            value: parseInt(value, 10),
                                            id: valueId++
                                        });

                                        value = '';
                                    }

                                    tempQueue.push({
                                        type: 'operator',
                                        value: curChar
                                    });
                                }
                                else if (!/\s/.test(curChar)) {
                                    value += curChar;
                                }
                            }

                            if (value !== '') {
                                tempQueue.push({
                                    type: 'value',
                                    value: parseInt(value, 10),
                                    id: valueId++
                                });
                            }

                            // Splice tempQueue into queue in the place of the
                            // current string.
                            Array.prototype.splice.apply(queue, [ii, 1].concat(tempQueue));

                            tempQueue = [];
                            value = '';
                        }
                    }
                },
                addOperationsToOperatorNodes = function () {
                    var ii, len = queue.length,
                        operation = '';

                    for (ii = 0; ii < len; ii += 1) {
                        if (queue[ii].type && queue[ii].type === 'operator') {
                            operation += typeof queue[ii - 1].value === 'function' ? queue[ii - 1].value() : queue[ii - 1].value;
                            operation += ' ' + queue[ii].value + ' ';
                            operation += typeof queue[ii + 1].value === 'function' ? queue[ii + 1].value() : queue[ii + 1].value;
                            queue[ii].operation = operation;
                            operation = '';
                        }
                    }
                };

            explode(expression);
            parseLiterals();
            addOperationsToOperatorNodes();
        };

        Expression.prototype.getOperations = function () {
            var queue = this.getQueue(),
                temp = [],
                ii = 0,
                len = queue.length,
                op1,
                op2,
                subExpressions = [],
                ret = [];

            for (; ii < len; ii += 1) {
                if (queue[ii].type && queue[ii].type === 'operator') {
                    if (queue[ii - 1] instanceof Expression) {
                        op1 = {
                            value: queue[ii - 1].value(),
                            raw: queue[ii - 1].toString()
                        };
                    } else {
                        op1 = {
                            value: queue[ii - 1].value,
                            raw: null,
                            id: queue[ii - 1].id
                        };
                    }

                    if (queue[ii + 1] instanceof Expression) {
                        op2 = {
                            value: queue[ii + 1].value(),
                            raw: queue[ii + 1].toString()
                        };
                    } else {
                        op2 = {
                            value: queue[ii + 1].value,
                            raw: null,
                            id: queue[ii + 1].id
                        };
                    }

                    temp.push({
                        op1: op1,
                        operator: queue[ii],
                        op2: op2
                    });
                }
            }

            temp.sort(function (a, b) {
                var lesserOperators = {
                    '+': null,
                    '-': null
                };

                if ((a.operator.value in lesserOperators && !(b.operator.value in lesserOperators)) ||
                    (b.operator.value === '^' && a.operator.value !== '^')) {
                    return 1;
                } else if ((!(a.operator.value in lesserOperators) && b.operator.value in lesserOperators) ||
                    (b.operator.value !== '^' && a.operator.value === '^')) {
                    return -1;
                } else {
                    return 0;
                }
            });

            // Add operations for the subexpressions.
            for (ii = 0, len = queue.length; ii < len; ii += 1) {
                if (queue[ii] instanceof Expression) {
                    subExpressions = subExpressions.concat(queue[ii].getOperations());
                }
            }

            ret = subExpressions.concat(temp);

            // Update operands with previous operations.
            for (ii = 0, len = ret.length; ii < len; ii += 1) {
                var index;

                if (ret[ii].op1.raw === null) {
                    index = mostRecentOperation(ret, ret[ii].op1.id, ii - 1);
                    if (index !== false) {
                        ret[ii].op1.raw = ret[ii].op1.value;
                        ret[ii].op1.value = valueFromEvalQueue(ret[index]);
                    }
                }

                if (ret[ii].op2.raw === null) {
                    index = mostRecentOperation(ret, ret[ii].op2.id, ii - 1);
                    if (index !== false) {
                        ret[ii].op2.raw = ret[ii].op2.value;
                        ret[ii].op2.value = valueFromEvalQueue(ret[index]);
                    }
                }
            }

            return ret;
        };

        Expression.prototype.toString = function () {
            return this.getExpString();
        };

        Expression.prototype.value = function () {
            var operations = this.getOperations();

            return valueFromEvalQueue(operations.pop());
        };

        return {
            create: function (expString) {
                return new Expression(expString);
            },
            parse: function (expString) {
                return new Expression(expString).value();
            },
            evalQueueValue: function (exp) {
                return valueFromEvalQueue(exp);
            }
        };
    }]);
