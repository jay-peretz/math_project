'use strict';
/*global angular */

angular.module('mathSkills.services')
    .provider('parser', function () {
        // Private data.
        var registeredTags = {};

        // parserProvider API.
        var parserProvider = {};

        /**
         * Registers a tag with the parser.  This method is available on the
         * parserProvider service which can only be injected into .config() blocks.
         *
         * @param {String} name The name of the tag (e.g. 'frac').
         * @param {Object} templates An object describing the tag's templates.
         * @param {Array} templates.argTemplates An array of objects containing
         *   name and template properties for each argument to the tag.  These
         *   tell the parser how to expand out the arguments to a tag (e.g. the
         *   numerator and denominator of a fraction).
         * @param {String} templates.directiveTemplate A template string for the
         *   overall tag.  This tells the parser how to expand out the tag being
         *   registered (e.g. the fraction itself and not its arguments.)
         *
         * @returns undefined
         */
        parserProvider.register = function (name, templates) {
            registeredTags[name] = {};
            registeredTags[name].argTemplates = templates.argTemplates;
            registeredTags[name].directiveTemplate = templates.directiveTemplate;
        };

        parserProvider.$get = [
            function () {

                // parser API.
                var parser = {
                    /**
                     * Places parsed tagString argument values on the passed in
                     * scope in the property names corresponding to the argument
                     * names set for the tag by parserProvider.register.
                     *
                     * Because the 'frac' tag is registered with two arguments,
                     * the first named 'numerator' and the second named 'denominator',
                     * this method would place the first argument value found in
                     * the parsedTag parameter in scope.numerator and the second
                     * argument value in scope.denominator.
                     *
                     * @param {Object} parsedTag A parsed tag object produced by
                     *   parser.extractTag.
                     * @param {angular.$scope} scope An angular scope object to
                     *   place the values on.
                     *
                     * @return undefined.
                     */
                    decorateScope: function (parsedTag, scope) {
                        // Get the templates registered for this tag.
                        var templates = registeredTags[parsedTag.tag].argTemplates;

                        // Add each argTemplate to the scope.
                        parsedTag.args.forEach(function (arg, ii) {
                            scope[templates[ii].name] = arg;
                        });
                    },
                    /**
                     * Extracts the tag name and argument values from a tag string
                     * and returns these in the form on a parsedTag object.
                     *
                     * @param {String} string The tag string to parse.
                     *
                     * @return {Object} A parsedTag object with the following form:
                     *   {
                     *     tag: {String} The tag name (e.g. 'frac')
                     *     args: {Array} An array of argument values.
                     *   }
                     */
                    extractTag: function (string) {
                        var split = string.split(''),
                            openArgs = 0,
                            args = [''],
                            currentArg = 0,
                            tag = '';

                        // Parse the template string into a tag and an args array.
                        split.forEach(function (char, ii) {
                            if (char === '\\' && openArgs === 0) {
                                // Throw away the tag control character
                                return;
                            } else if (char === '{') {
                                // Increment the openArgs counter.
                                openArgs += 1;

                                if (openArgs !== 1) {
                                    args[currentArg] += char;
                                }
                            } else if (char === '}')  {
                                // Decrement the openArgs counter.
                                openArgs -= 1;

                                if (openArgs !== 0) {
                                    args[currentArg] += char;
                                }

                                // See if we've closed one argument and need to open another.
                                // This will only be true if we've closed all our open args and
                                // we have not reached the end of the string.
                                if (openArgs === 0 && split.length !== ii + 1) {
                                    // Increment the currentArg pointer.
                                    currentArg += 1;

                                    // Initialize the new argument to an empty string.
                                    args[currentArg] = '';
                                }
                            } else if (openArgs === 0) {
                                tag += char;
                            } else {
                                args[currentArg] += char;
                            }
                        });

                        // Return a parsedTag object.
                        return {
                            tag: tag,
                            args: args
                        };
                    },
                    find: function (tagString, findTag) {
                        if (!parser.isTag(tagString)) {
                            return [];
                        }

                        var parsedTag = parser.extractTag(tagString),
                            ret = [];

                        if (parsedTag.tag === findTag) {
                            ret.push(parsedTag);
                        }

                        parsedTag.args.forEach(function (arg) {
                            ret = ret.concat(parser.find(arg, findTag));
                        });

                        return ret;
                    },
                    /**
                     * Returns an HTML template string for a registered tag.
                     *
                     * @param {Object} parsedTag A parsedTag object produced by
                     *   parser.extractTag().
                     * @param {Object} options An options object.  Currently the
                     *   only supported property is 'directiveTemplate', which,
                     *   if set to true, will make this function return the template
                     *   string for the tag itself and not its arguments.
                     *
                     * @return {String} An HTML template string.
                     */
                    generateTemplate: function (parsedTag, options) {
                        var tagTemplate = '';

                        // If the options say to use the directiveTemplate, do so.
                        if (options.directiveTemplate === true) {
                            tagTemplate += registeredTags[parsedTag.tag].directiveTemplate;
                        // Otherwise, use the argument templates.
                        } else {
                            // Get the templates registered for this tag.
                            var templates = registeredTags[parsedTag.tag].argTemplates;

                            // Build up the templates for each tag argument.
                            parsedTag.args.forEach(function (arg, ii) {
                                tagTemplate += templates[ii].template;
                            });
                        }

                        return tagTemplate;
                    },
                    isTag: function (tagString) {
                        return tagString.toString()[0] === '\\';
                    },
                    /**
                     * A convienence method to parse a tag string, generate and
                     * return the template string, and optionally decorate the
                     * scope with tag argument values.
                     *
                     * @param {String} tagString A string containing a registered
                     *   tag.
                     * @param {Object} options An options object.  It supports
                     *   the following properties:
                     *     - options.scope An angular scope to decorate.  If this
                     *         is present, the scope will be decorated.
                     *     - options.directiveTemplate A boolean flag.  If set to
                     *         true, the returned HTML template string will be for
                     *         the tag itself and not its arguments.
                     *
                     * @return {String} An HTML template string.
                     */
                    parse: function (tagString, options) {
                        // Parse the tag string.
                        var parsedTag = parser.extractTag(tagString);

                        // Decorate scope if necessary
                        if (options.scope) {
                            parser.decorateScope(parsedTag, options.scope);
                        }

                        // Return the generated template
                        return parser.generateTemplate(parsedTag, options);
                    },
                    replace: function (tagString, findTag, replaceTag) {
                        if (!parser.isTag(tagString)) {
                            return tagString;
                        }

                        var parsedTag = parser.extractTag(tagString),
                            ret = '';

                        if (parsedTag.tag === findTag) {
                            ret = '\\' + replaceTag + '{' + parser.replace(parsedTag.args[0], findTag, replaceTag) + '}';
                        } else {
                            ret = '\\' + parsedTag.tag;
                            parsedTag.args.forEach(function (arg) {
                                ret += '{' + parser.replace(arg, findTag, replaceTag) + '}';
                            });
                        }

                        return ret;
                    }
                };

                return parser;
            }
        ];

        return parserProvider;
    });
