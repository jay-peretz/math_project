'use strict';
/*global angular */

angular.module('mathSkills.services')
    .provider('parser', function () {
        var registeredTags = {};

        this.register = function (name, templates) {
            registeredTags[name] = {};
            registeredTags[name].argTemplates = templates.argTemplates;
            registeredTags[name].directiveTemplate = templates.directiveTemplate;
        };

        this.$get = [
            function () {

                var parser = {
                    parse: function (string, options) {
                        var split = string.split(''),
                            openArgs = 0,
                            args = [''],
                            currentArg = 0,
                            tag = '',
                            templates,
                            parsed = '';

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

                        if (options && options.directiveTemplate === true) {
                            parsed += registeredTags[tag].directiveTemplate;
                        } else {
                            // Get the templates registered for this tag.
                            templates = registeredTags[tag].argTemplates;

                            // Build up the templates and scope values for each tag argument.
                            args.forEach(function (arg, ii) {
                                // Retrieve the right template for this argument.
                                parsed += templates[ii][parser.type(arg)];

                                // Set scope properties if we have a scope argument.
                                if (options && options.scope !== undefined) {
                                    options.scope[templates[ii].name] = arg;
                                }
                            });
                        }

                        return parsed;
                    },
                    type: function (string) {
                        if (string[0] === '\\') {
                            return 'directive';
                        } else {
                            return 'value';
                        }
                    }
                };

                return parser;
            }
        ];
    });
