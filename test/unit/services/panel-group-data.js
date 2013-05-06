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
        it('should return the passed index if it does not have a saved value.', function () {
            expect(panelGroupData.index(1)).toBe(1);
        });

        it('should return the saved index if it has one.', function () {
            expect(panelGroupData.index(2)).toBe(2);
            expect(panelGroupData.index(1)).toBe(2);
        });
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
        it('should reset the data used by panelGroupData.index', function () {
            // Save an index.
            panelGroupData.index(2);
            // Verify .index is returning the saved index.
            expect(panelGroupData.index(1)).toBe(2);
            // Reset the index.
            panelGroupData.resetIndex();
            // Set a new index and verify it is returned.
            expect(panelGroupData.index(1)).toBe(1);
        });

        it('should return true', function () {
            expect(panelGroupData.resetIndex()).toBe(true);
        });
    });
});
