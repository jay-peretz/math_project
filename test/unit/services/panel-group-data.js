/*global beforeEach, describe, expect, inject, it */

describe('panelGroupData', function () {
    var panelGroupData,
        $timeout;

beforeEach(module('mathSkills'));

    beforeEach(inject(function (_panelGroupData_, _$timeout_) {
        panelGroupData = _panelGroupData_;
        $timeout = _$timeout_;
    }));

    describe('.index', function () {
        it('should return true if it does not already have an index.');
        it('should return true if passed the already saved index.');
        it('should return false if passed a different index.');
    });

    describe('.getIndex', function () {
        it('should resolve to 0 if no index is set', function () {
            panelGroupData.getIndex().then(function (index) {
                expect(index).toBe(0);
            });
            $timeout.flush();
        });

        it('should resolve to the set index if it exists', function () {
            panelGroupData.getIndex().then(function (index) {
                expect(index).toBe(1);
            });
            panelGroupData.index(1);
            $timeout.flush();
        });
    });

    describe('.resetIndex', function () {
        it('should reset the data used by panelGroupData.index');
        it('should return true');
    });
});
