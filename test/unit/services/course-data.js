/*global beforeEach, describe, expect, inject, it */

describe('Service: courseData', function () {
    // Dummy data
    var data = {
        title: 'CSKLS 371 GENERAL ARITHMETIC',
        children: [
            {
                title: '1 Whole Numbers',
                path: 'whole-numbers',
                children: [
                    {
                        title: '1.1 Place Value Number System of Whole Numbers',
                        path: '1.1-place-value-number-system-of-whole-numbers',
                        children: [
                            {
                                title: 'Whole Number Place Value',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{44816}{3}}}',
                                        answer: '\\select{Thousands}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
                                        controls: {
                                            "checkAnswer": true,
                                            "help": '\\rowgrp{\\row{\\showplace{"Thousands"}{44816}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  Thousands}}{label_like margin-left-small}}}}'
                                        }
                                    }]
                                }]
                            }
                        ]
                    }, {
                        title: '1.2 Standard Notation of Whole Numbers',
                        path: '1.2-standard-notation-of-whole-numbers',
                        children: [
                            {
                                title: 'Words to Number',
                                children: [{
                                    title: 'Main Answer',
                                    children: [{
                                        problem: '\\str{Write eighty in number notation}',
                                        answer: '\\input{80}',
                                        controls: {
                                            checkAnswer: true,
                                            help: true
                                        }
                                    }]
                                }]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    beforeEach(module('mathSkills'));

    beforeEach(inject(function (courseData) {
        courseData.setCourseData(data);
    }));

    describe('getCourseData', function () {
        it('should return a copy of the course data', inject(function (courseData) {
            expect(courseData.getCourseData()).toEqual(data);
            expect(courseData.getCourseData()).not.toBe(data);
        }));
    });

    describe('getNumberOfProblems', function () {
        it('should return the number of problems for a set that exists', inject(function (courseData) {
            expect(courseData.getNumberOfProblems('whole-numbers', '1.2-standard-notation-of-whole-numbers')).toBe(1);
        }));

        it('should throw an error if you try to access a set that does not exist', inject(function (courseData) {
            expect(function () {
                courseData.getNumberOfProblems('bad-path', 'bad-path');
            }).toThrow();
        }));
    });

    describe('getProblemData', function () {
        it('should return the data for a problem that exists', inject(function (courseData) {
            expect(courseData.getProblemData('whole-numbers', '1.2-standard-notation-of-whole-numbers', 1)).toEqual({
                title: 'Words to Number',
                children: [{
                    title: 'Main Answer',
                    children: [{
                        problem: '\\str{Write eighty in number notation}',
                        answer: '\\input{80}',
                        controls: {
                            checkAnswer: true,
                            help: true
                        }
                    }]
                }]
            });
        }));

        it('should throw an error if you ask for a problem that does not exist', inject(function (courseData) {
            expect(function () {
                courseData.getProblemData('bad-path', 'bad-path', 25);
            }).toThrow();
        }));
    });

    describe('getProblemSetData', function () {
        it('should return the data for a problem set that exists', inject(function (courseData) {
            expect(courseData.getProblemSetData('whole-numbers', '1.2-standard-notation-of-whole-numbers')).toEqual({
                title: '1.2 Standard Notation of Whole Numbers',
                path: '1.2-standard-notation-of-whole-numbers',
                children: [
                    {
                        title: 'Words to Number',
                        children: [{
                            title: 'Main Answer',
                            children: [{
                                problem: '\\str{Write eighty in number notation}',
                                answer: '\\input{80}',
                                controls: {
                                    checkAnswer: true,
                                    help: true
                                }
                            }]
                        }]
                    }
                ]
            });
        }));

        it('should throw an error if you ask for a problem set that does not exist', inject(function (courseData) {
            expect(function () {
                courseData.getProblemSetData('bad-path', 'bad-path');
            }).toThrow();
        }));
    });

    describe('getUnitData', function () {
        it('should return the data for a unit that exists', inject(function (courseData) {
            expect(courseData.getUnitData('whole-numbers')).toEqual(data.children[0]);
        }));

        it('should return undefined if you ask for a unit that does not exist', inject(function (courseData) {
            expect(courseData.getUnitData('bad-unit')).toBeUndefined();
        }));
    });
});
