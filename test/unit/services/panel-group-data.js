/*global describe, expect, it */

describe('panelGroupData', function () {
    describe('.index', function () {
        it('should return true if it does not already have an index.');
        it('should return true if passed the already saved index.');
        it('should return false if passed a different index.');
    });

    describe('.resetIndex', function () {
        it('should reset the data used by panelGroupData.index');
        it('should return true');
    });
});
