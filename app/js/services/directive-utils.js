'use strict';
/*global angular */


angular.module('mathSkills.services')
    .service('directiveUtils', [
        'parser',
        '$compile',
        '$timeout',
        function (parser, $compile, $timeout) {
            return {
                /**
                 * Places the appropriate properties and listeners on a scope
                 * to aggregate the answers from child scopes into a single answer.
                 *
                 * For instance, a <ms-fraction> controller would call this function
                 * to aggregate its numerator (\input{1}) and denominator (\input{2})
                 * answers into a single \frac{\input{1}}{\input{2}} answer.
                 *
                 * @param {angular.$scope} $scope The directive's scope.  It is required
                 *   to have the two following properties:
                 *     $scope.tag {String} The tag name registered with the parser.
                 *     $scope.children {String[]} An array of child scope's labels.
                 *
                 * @return undefined.
                 */
                aggregateChildAnswers: function ($scope) {
                    var notUndefined = function (val) {
                        return val !== undefined;
                    };

                    $scope.answer = [];
                    $scope.result = 'correct';
                    $scope.controllerId = Math.random().toString();

                    $scope.$on('checkAnswer', function (e) {
                        $scope.answer = [];
                        $scope.result = 'correct';
                    });

                    $scope.$on('answer', function (e, data) {
                        // If this event was not fired by us.
                        if (data.controllerId !== $scope.controllerId) {
                            // Stop this event from going up the scope chain.
                            e.stopPropagation();

                            // Set the incorrect flag if appropriate.
                            if (data.result === 'incorrect') {
                                $scope.result = 'incorrect';
                            }

                            // Save the answer
                            $scope.answer[$scope.children.indexOf(data.label)] = data.answer;

                            // See if we have all our children's answer events.
                            if ($scope.answer.length === $scope.children.length && $scope.answer.every(notUndefined)) {
                                // If we do, fire our own answer event.
                                $scope.$emit('answer', {
                                    controllerId: $scope.controllerId,
                                    answer: '\\' + $scope.tag + '{' + $scope.answer.join('}{') + '}',
                                    result: $scope.result,
                                    expected: $scope.expected,
                                    label: $scope.label
                                });
                            }
                        }
                    });
                },
                compileExpected: function (scope, element, directiveTemplate) {
                    // Initialize empty scope properties for each of the directive's children.
                    // These will model the child's expected value, and are set by the call
                    // to parser.parse() inside the watch.
                    scope.$watch('children', function () {
                        if (scope.children && scope.children.length > 0) {
                            scope.children.forEach(function (child) {
                                scope[child] = '';
                            });
                        }
                    });

                    scope.$watch('expected', function () {
                        // Don't do anything is scope.expected is undefined, null or an empty string.
                        if (scope.expected) {
                            var template,
                                compiled,
                                options = directiveTemplate === true ? { directiveTemplate: true } : { scope: scope };

                            template = parser.parse(scope.expected, options);
                            compiled = $compile(template)(scope);
                            element.html(compiled);
                        }
                    });
                },
                /**
                 * Invalidates checkFocus events passing down the scope chain.
                 * After invalidating the event from above, it re-$broadcasts the
                 * event to the first child scope.  If it receives a notFocused
                 * event in response, it stops notFocused and $broadcasts checkFocus
                 * to the next child scope.  It continues until it receives
                 * notFocused from all its children and then $emits a notFocused
                 * event itself.
                 *
                 * If any of its children $emit a focused event, the focused event
                 * is allowed to pass through and checkFocus is not re-$broadcast.
                 *
                 * @param {angular.$scope} The scope to route checkFocus events
                 *   from.  It is required to have .children property, which should
                 *   be an array of its child scopes' labels.  The length of this
                 *   array tells routeFocus how many children to listen for.
                 */
                routeFocus: function ($scope) {
                    $scope.notFocused = 0;

                    $scope.$on('checkFocus', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            e.preventDefault();
                            $scope.notFocused = 0;

                            if ($scope.$$childHead) {
                                $scope.$$childHead.$broadcast('checkFocus');
                            }
                        }
                    });

                    $scope.$on('notFocused', function (e, data) {
                        // If we did not fire this event.
                        if (data.controllerId !== $scope.controllerId) {
                            // Stop the event from going up the scope chain.
                            e.stopPropagation();

                            // Increment the counter for responses from our scope children by 1.
                            $scope.notFocused += 1;

                            // If we have received two notFocused responses from our children
                            // $emit our own notFocused event since we cannot receive focus.
                            if ($scope.notFocused === $scope.children.length) {
                                $scope.$emit('notFocused', {
                                    controllerId: $scope.controllerId
                                });
                            // Otherwise $broadcast a live checkFocus event to our next child.
                            } else {
                                // To figure out the next child we:
                                //   - Start at the first child ($$childHead).
                                //   - Follow the $$nextSibling pointer as many times as we have
                                //       received notFocused responses from our children.
                                var targetScope = $scope.$$childHead,
                                    targetChild = 0;

                                while (targetChild !== $scope.notFocused) {
                                    targetScope = targetScope.$$nextSibling;
                                    targetChild += 1;
                                }

                                // By this point targetScope points at the next child to $broadcast
                                // a checkFocus to.
                                targetScope.$broadcast('checkFocus');
                            }
                        }
                    });
                },
                /**
                 * Invalidates checkHelp events passing down the scope chain.
                 * After invalidating the event from above, it re-$broadcasts the
                 * event to the first child scope.  If it receives a notHelped
                 * event in response, it stops notHelped and $broadcasts checkHelp
                 * to the next child scope.  It continues until it receives
                 * notHelped from all its children and then $emits a notHelped
                 * event itself.
                 *
                 * If any of its children $emit a helped event, the helped event
                 * is allowed to pass through and checkHelp is not re-$broadcast.
                 *
                 * @param {angular.$scope} The scope to route checkHelp events
                 *   from.  It is required to have .children property, which should
                 *   be an array of its child scopes' labels.  The length of this
                 *   array tells routeHelp how many children to listen for.
                 */
                routeHelp: function ($scope) {
                    $scope.notHelped = 0;

                    $scope.$on('checkHelp', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // Mark it as ignored.
                            e.preventDefault();

                            // Reset our child response counter.
                            $scope.notHelped = 0;

                            // Send the event to our first child.
                            if ($scope.$$childHead) {
                                $scope.$$childHead.$broadcast('checkHelp');
                            }
                        }
                    });

                    $scope.$on('notHelped', function (e, data) {
                        // If we did not fire this event.
                        if (data.controllerId !== $scope.controllerId) {
                            // Stop the event from going up the scope chain.
                            e.stopPropagation();

                            // Increment the counter for responses from our scope children by 1.
                            $scope.notHelped += 1;

                            // If we have received notHelped responses from all our children
                            // $emit our own notHelped event since we have all of our answers.
                            if ($scope.notHelped === $scope.children.length) {
                                $scope.$emit('notHelped', {
                                    controllerId: $scope.controllerId
                                });
                            // Otherwise $broadcast a live checkHelp event to our next child.
                            } else {
                                // To figure out the next child we:
                                //   - Start at the first child ($$childHead).
                                //   - Follow the $$nextSibling pointer as many times as we have
                                //       received notHelped responses from our children.
                                var targetScope = $scope.$$childHead,
                                    targetChild = 0;

                                while (targetChild !== $scope.notHelped) {
                                    targetScope = targetScope.$$nextSibling;
                                    targetChild += 1;
                                }

                                // By this point targetScope points at the next child to $broadcast
                                // a checkHelp event to.
                                targetScope.$broadcast('checkHelp');
                            }
                        }
                    });
                },

                size: function ($scope) {
                    $scope.$on('size', function(e, data, id, type) {

                        var endnode = data.label === 'numerator' || data.label  === 'denominator' ? 'fraction' + type : data.label + type;
                        $scope[endnode] = $scope[endnode] !== undefined ? Math.max(data.size, $scope[endnode]) : data.size;

                        $timeout(function () {
                            $scope.$broadcast('resize', {size: $scope[endnode], label: endnode}, id);
                        }, 0);
                    });
                },

                resize: function ($scope, arr, type, pix, pad) {
                    $scope.$on('resize', function(e, data, id) {
                        if ($scope.controllerId ===  id){
                            $scope.width = data.size + 'px';
                        }
                    });

                    $scope.$watch('expected', function () {
                        if($scope.expected) {
                            $scope.$emit('size', {size: getSize(arr, pix, pad)}, $scope.controllerId, type);
                        }
                    });

                    function getSize(arr, pix, pad) {
                        var size= arr.reduce(function (a, b) {
                            return a.length > b.length ? a.length : b.length; 
                        }, "");
                        return (+size * pix) + pad;
                    }
                }
            };
        }
    ]);
