'use strict';
/*global angular */

angular.module('mathSkills.services')
    .service('courseData', [
        'data1_1', 'data1_2', 'data1_3', 'data1_4', 'data1_5',
        'data2_1', 'data2A_1', 'data2A_2',
        'data3_1', 'data3_2',
        'data4_1', 'data4_2',
        'data5_1', 'data5_2', 'data5_3', 'data5_4',
        'data6_1', 'data6_2', 'data6_3', 'data6_4',
        'data7_1', 'data7_2', 'data7_3', 'data7_4',
        'data8_1', 'data8_2', 'data8_3', 'data8_4', 'data8_5',
        'data9_1', 'data9_2', 'data9_3',
        'data10_1', 'data10_2', 'data10_3', 'data10_4', 'data10_5',
        'data11_1',
        'data12_1', 'data12_2', 'data12_3',
        'data13_1', 'data13_2',
        'data14_1', 'data14_2',
        'data15_1', 'data15_2', 'data15_3',
        'data16_1', 'data16_2', 'data16_3', 'data16_4',
        'data17_1', 'data17_2',
        'data18_1', 'data18_2', 'data18_3',
        'data19_1', 'data19_2', 'data19_3', 'data19_4',
        'data20_1', 'data20_2', 'data20_3',
        'data21_1', 'data21_2', 'data21_3', 'data21_4',
        'data22_1', 'data22_2', 'data22_3', 'data22_4',
		'data23_1', 'data23_2',
		'data24_1', 'data24_2',
		'data25_1', 'data25_2',
		'data26_1', 'data26_2',
        function (
            data1_1, data1_2, data1_3, data1_4, data1_5,
            data2_1, data2A_1, data2A_2,
            data3_1, data3_2,
            data4_1, data4_2,
            data5_1, data5_2, data5_3, data5_4,
            data6_1, data6_2, data6_3, data6_4,
            data7_1, data7_2, data7_3, data7_4,
            data8_1, data8_2, data8_3, data8_4, data8_5,
            data9_1, data9_2, data9_3,
            data10_1, data10_2, data10_3, data10_4, data10_5,
            data11_1,
            data12_1, data12_2, data12_3,
            data13_1, data13_2,
            data14_1, data14_2,
            data15_1, data15_2, data15_3,
            data16_1, data16_2, data16_3, data16_4,
            data17_1, data17_2,
            data18_1, data18_2, data18_3,
            data19_1, data19_2, data19_3, data19_4,
            data20_1, data20_2, data20_3,
            data21_1, data21_2, data21_3, data21_4,
            data22_1, data22_2, data22_3, data22_4,
			data23_1, data23_2,
			data24_1, data24_2,
			data25_1, data25_2,
			data26_1, data26_2
        ) {
            var course = {
                title: 'GENERAL ARITHMETIC',
                children: [{
                    title: '1 Whole Numbers',
                    path: 'whole-numbers',
                    children: [
                        data1_1, data1_2, data1_3, data1_4, data1_5,
                        data2_1, data2A_1, data2A_2,
                        data3_1, data3_2,
                        data4_1, data4_2,
                        data5_1, data5_2, data5_3, data5_4
                    ]
                }, {
                    title: '2 Fractions',
                    path: 'fractions',
                    children: [
                        data6_1, data6_2, data6_3, data6_4,
                        data7_1, data7_2, data7_3, data7_4,
                        data8_1, data8_2, data8_3, data8_4, data8_5,
                        data9_1, data9_2, data9_3,
                        data10_1, data10_2, data10_3, data10_4, data10_5,
                        data11_1
                    ]
                }, {
                    title: '3 Decimals',
                    path: 'decimals',
                    children: [
                        data12_1, data12_2, data12_3,
                        data13_1, data13_2,
                        data14_1, data14_2,
                        data15_1, data15_2, data15_3
                    ]
                }, {
                    title: '4 Ratios & Proportions',
                    path: 'ratios-proportions',
                    children: [
                        data16_1, data16_2, data16_3, data16_4,
                        data17_1, data17_2
                    ]
                }, {
                    title: '5 Percents',
                    path: 'percents',
                    children: [
                        data18_1, data18_2, data18_3,
                        data19_1, data19_2, data19_3, data19_4,
                        data20_1, data20_2, data20_3,
                        data21_1, data21_2, data21_3, data21_4,
                        data22_1, data22_2, data22_3, data22_4
                    ]
                }, , {
                    title: '6 Measurements',
                    path: 'measurements',
                    children: [
                        data23_1, data23_2,
						data24_1, data24_2,
						data25_1, data25_2,
						data26_1, data26_2,
                    ]
                }]
            };

            var courseData = {
                getCourseData: function () {
                    return angular.copy(course);
                },
                getNumberOfProblems: function (unitPath, problemSetPath) {
                    return courseData.getProblemSetData(unitPath, problemSetPath).children.length;
                },
                getProblemData: function (unitPath, problemSetPath, problemNumber) {
                    var problemSet = courseData.getProblemSetData(unitPath, problemSetPath),
                        ret;

                    problemSet.children.forEach(function (problem, ii) {
                        if (ii + 1 === +problemNumber) {
                            ret = problem;
                        }
                    });

                    return ret;
                },
                getProblemSetData: function (unitPath, problemSetPath) {
                    var unit = courseData.getUnitData(unitPath),
                        ret;

                    unit.children.forEach(function (problemSet) {
                        if (problemSet.path === problemSetPath) {
                            ret = problemSet;
                        }
                    });

                    return ret;
                },
                getUnitData: function (unitPath) {
                    var ret;

                    course.children.forEach(function (unit) {
                        if (unit.path === unitPath) {
                            ret = unit;
                        }
                    });

                    return ret;
                },
                setCourseData: function (data) {
                    course = data;
                }
            };

            return courseData;
        }
    ]);
