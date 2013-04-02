/*global beforeEach, describe, expect, inject, it, spyOn */

describe('parser service', function () {
    beforeEach(module('mathSkills.services'));
    beforeEach(module('mathSkills'));

    describe('decorateScope', function () {
        it('should add the right properties to the scope', inject(function (parser) {
            var scope = {},
                parsedTag = {
                    tag: 'frac',
                    args: [
                        '\\input{1}',
                        '\\str{2}'
                    ]
                };

            parser.decorateScope(parsedTag, scope);

            // The first arg should be scope.numerator.
            expect(scope.numerator).toBe('\\input{1}');
            // The second arg should be scope.denominator.
            expect(scope.denominator).toBe('\\str{2}');
        }));
    });

    describe('extractTag', function () {
        it('should properly parse a tag string', inject(function (parser) {
            // Simple tag.
            expect(parser.extractTag('\\str{1}')).toEqual({
                tag: 'str',
                args: [
                    '1'
                ]
            });

            // Nested tags.
            expect(parser.extractTag('\\frac{\\input{1}}{\\input{2}}')).toEqual({
                tag: 'frac',
                args: [
                    '\\input{1}',
                    '\\input{2}'
                ]
            });

            // Doubly nested tags.
            expect(parser.extractTag('\\mixed{\\input{1}}{\\frac{\\input{2}}{\\input{3}}}')).toEqual({
                tag: 'mixed',
                args: [
                    '\\input{1}',
                    '\\frac{\\input{2}}{\\input{3}}'
                ]
            });

            // Variable argument tags.
            expect(parser.extractTag('\\row{\\input{1}}{\\frac{\\input{2}}{\\input{3}}}{\\str{This is a string}}')).toEqual({
                tag: 'row',
                args: [
                    '\\input{1}',
                    '\\frac{\\input{2}}{\\input{3}}',
                    '\\str{This is a string}'
                ]
            });
        }));
    });

    describe('generateTemplate', function () {
        it('should return the directive template when appropriate', inject(function (parser) {
            expect(
                parser.generateTemplate({ tag: 'frac' }, { directiveTemplate: true })
            ).toBe('<ms-fraction expected={{expected}} label={{label}}></ms-fraction>');
        }));

        it('should return the arg templates when appropriate', inject(function (parser) {
            expect(
                parser.generateTemplate({ tag: 'frac', args: ['', ''] }, {})
            ).toBe(
                '<ms-event-label expected={{numerator}} label=numerator></ms-event-label>' + 
                '<ms-event-label expected={{denominator}} label=denominator></ms-event-label>'
            );
        }));
    });

    describe('parse', function () {
        it('should call parser.extractTag and parser.generateTemplate with the right arguments', inject(function (parser) {
            // Setup our method spies.
            spyOn(parser, 'extractTag').andCallThrough();
            spyOn(parser, 'generateTemplate');

            // Call the service.
            parser.parse('\\frac{\\input{1}}{\\input{2}}', {});

            // Make sure our spies were called with the right args.
            expect(parser.extractTag).toHaveBeenCalledWith('\\frac{\\input{1}}{\\input{2}}');
            expect(parser.generateTemplate).toHaveBeenCalledWith({
                tag: 'frac',
                args: [
                    '\\input{1}',
                    '\\input{2}'
                ]
            }, {});
        }));

        it('should sometimes call parser.decorateScope', inject(function (parser) {
            var dummyScope = { a: 'b' };
            spyOn(parser, 'decorateScope');

            // Call without options.scope.
            parser.parse('\\frac{\\input{1}}{\\input{2}}', {});
            expect(parser.decorateScope).not.toHaveBeenCalled();

            // Call with options.scope
            parser.parse('\\frac{\\input{1}}{\\input{2}}', { scope: dummyScope });
            expect(parser.decorateScope).toHaveBeenCalledWith({
                tag: 'frac',
                args: [
                    '\\input{1}',
                    '\\input{2}'
                ]
            }, dummyScope);
        }));
    });
});
