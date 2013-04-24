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

    describe('find', function () {
        it('should find a single tag', inject(function (parser) {
            expect(parser.find('\\input{1}', 'input')).toEqual([{
                tag: 'input',
                args: [
                    '1'
                ]
            }]);
        }));

        it('should find nested tags', inject(function (parser) {
            expect(parser.find('\\row{\\input{1}}', 'input')).toEqual([{
                tag: 'input',
                args: [
                    '1'
                ]
            }]);
        }));

        it('should find multiple nested tags', inject(function (parser) {
            expect(parser.find('\\row{\\input{1}}{\\input{2}}', 'input')).toEqual([{
                tag: 'input',
                args: [
                    '1'
                ]
            }, {
                tag: 'input',
                args: [
                    '2'
                ]
            }]);
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
                '<table class=fraction><tr><td><ms-event-label expected={{numerator}} label=numerator></ms-event-label></td></tr><tr><td><hr></td></tr>' + 
                '<tr><td><ms-event-label expected={{denominator}} label=denominator></td></tr></table></ms-event-label>'
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

    describe('replace', function () {
        it('should replace a single tag', inject(function (parser) {
            expect(parser.replace('\\input{1}', 'input', 'str')).toBe('\\str{1}');
            expect(parser.replace('\\select{answer}{answer,false}', 'select', 'str')).toBe('\\str{answer}');
            expect(parser.replace('\\but{yes}{T}', 'but', 'str')).toBe('\\str{yes}');
            expect(parser.replace('\\chk{yes}{T}', 'chk', 'str')).toBe('\\str{yes}');
        }));

        it('should replace nested tags', inject(function (parser) {
            expect(parser.replace('\\row{\\input{1}}', 'input', 'str')).toBe('\\row{\\str{1}}');
            expect(parser.replace('\\row{\\select{answer}{answer,false}}', 'select', 'str')).toBe('\\row{\\str{answer}}');
            expect(parser.replace('\\row{\\but{yes}{T}}', 'but', 'str')).toBe('\\row{\\str{yes}}');
            expect(parser.replace('\\row{\\chk{yes}{T}}', 'chk', 'str')).toBe('\\row{\\str{yes}}');
        }));

        it('should replace multiple nested tags', inject(function (parser) {
            expect(parser.replace('\\row{\\frac{\\input{1}}{\\input{2}}}{\\input{3}}', 'input', 'str')).toBe('\\row{\\frac{\\str{1}}{\\str{2}}}{\\str{3}}');
            expect(parser.replace('\\row{\\select{answer}{answer,false}}{\\select{another}{another,false}}', 'select', 'str')).toBe('\\row{\\str{answer}}{\\str{another}}');
            expect(parser.replace('\\row{\\but{yes}{T}}{\\but{no}{F}}', 'but', 'str')).toBe('\\row{\\str{yes}}{\\str{no}}');
            expect(parser.replace('\\row{\\chk{yes}{T}}{\\chk{no}{F}}', 'chk', 'str')).toBe('\\row{\\str{yes}}{\\str{no}}');
        }));
    });
});
