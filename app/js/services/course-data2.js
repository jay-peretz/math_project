'use strict';
/*global angular */

angular.module('mathSkills.services')
    .service('courseData', [
        'data_a_1', 'data_b_1','data_c_1','data_c_2','data_d_1',
		'data_j_1', 'data_o_1_1', 'data_s_1', 'data_w_1',
        function (
            data_a_1, data_b_1, data_c_1, data_c_2, data_d_1,
			data_j_1, data_o_1_1, data_s_1, data_w_1
        ) {
            var course = {
                title: 'PRE ALGEBRA',
                children: [{
                    title: '1 Review of Arithmetic',
                    path: 'review-arithmetic',
                    children: [
                        data_a_1,  data_b_1, data_c_1, data_c_2, data_d_1, 
                    ]
                }, {
                    title: '2 Signed Numbers',
                    path: 'signed-numbers',
                    children: [
                        data_j_1
                    ]
                }, {
                    title: '3 Exponents',
                    path: 'exponents',
                    children: [
                        data_o_1_1
                    ]
                }, {
                    title: '4 Geometric Shapes',
                    path: 'geometric-shapes',
                    children: [
                        data_s_1
                    ]
                }, {
                    title: '5 Algebraic Expressions & Equations',
                    path: 'algebraic-expressions',
                    children: [
                        data_w_1
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
