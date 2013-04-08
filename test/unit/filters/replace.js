/*global beforeEach, describe, expect, inject, it, spyOn */

describe('replace', function () {
    beforeEach(module('mathSkills'));

    it('should call parser.replace with the proper arguments', inject(function (parser, $filter) {
        var parserReplace = spyOn(parser, 'replace');
        $filter('replace')('\\input{1}', 'input', 'str');
        expect(parserReplace).toHaveBeenCalledWith('\\input{1}', 'input', 'str');
    }));
});
