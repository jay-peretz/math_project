/*global describe, it */

describe('<ms-panel-group>', function () {
    describe('when responding to panelDone events', function () {
        it('should display and focus on the next panel if it has one.');
        it('should $emit panelGroupDone with the proper data if it does not have another panel to show.');
    });

    describe('when responding to checkFocus events', function() {
        it('should do nothing if the event has already been cancelled');
        it('should cancel the event.');
        it('should $broadcast checkFocus on the current panel.');
    });
});
