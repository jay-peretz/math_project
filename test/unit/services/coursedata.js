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
});
