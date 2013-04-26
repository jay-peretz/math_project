/*global describe, it */

describe('<ms-panel>', function () {
    describe('when dealing with answer events', function () {
        it('should add a problem property to the data object');
        it('should $emit panelDone if the answer is correct');
        it('should $broadcast checkFocus on the answer area if the answer is incorrect');
    });

    describe('when dealing with triggerCheckAnswer events', function() {
        it('should $broadcast checkAnswer on the answer area');
    });

    describe('when dealing with triggerCheckHelp events', function() {
        it('should $broadcast checkHelp to its children');
    });

    describe('when dealing with triggerCheckFocus events', function() {
        it('should $broadcast checkFocus on the answer area');
    });

    describe('when dealing with checkFocus events', function () {
        it('should ignore already cancelled events.');
        it('should cancel the event.');
        it('should refire the event on the answer area.');
    });

    describe('when it first loads', function () {
        it('should fire checkFocus on the answer area.');
    });

    describe('when dealing with showHelpPanel events', function () {
        it('should stop the event.');
        it('should display the help panel with two added classes');
        it('should display the data.expression property in an <ms-expression> in the help panel');
        it('should change data.result of answer events to helped');
    });
});
