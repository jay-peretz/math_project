'use strict';
/*global angular */

angular.module('mathSkills.services')
    .service('courseData', [
		'diagnostic',
        'data_a_1', 'data_b_1','data_c_1','data_c_2','data_d_1','data_e_1','data_e_2','data_e_3','data_e_4',
		'data_f_1', 'data_g_1','data_g_2','data_g_3','data_h_1','data_h_2','data_i_1','data_i_2','data_i_3','data_i_4',
		'data_k_1', 'data_k_2','data_k_3','data_l_1','data_l_2','data_m_1','data_m_2','data_m_3','data_n_1',
		'data_j_1', 'data_o_1_1', 'data_o_2_1', 'data_o_2_2', 'data_p_1', 'data_q_1','data_r_1',
		'data_s_1', 'data_s_2', 'data_s_3', 'data_s_4',
		'data_t_1', 'data_t_2', 'data_u_1','data_v_1',
		'data_w_1', 'data_w_2', 'data_x_1', 'data_y_1', 'data_y_2', 'data_z_1', 'data_aa_1',  
		'data_aa_2',  'data_bb_1',  'data_cc_1',  'data_dd_1',  'data_dd_2',   'data_ee_1',
        function (
			diagnostic,
            data_a_1, data_b_1, data_c_1, data_c_2, data_d_1, data_e_1, data_e_2, data_e_3, data_e_4,
			data_f_1, data_g_1, data_g_2, data_g_3, data_h_1, data_h_2, data_i_1, data_i_2,data_i_3,data_i_4,
			data_k_1, data_k_2, data_k_3, data_l_1, data_l_2, data_m_1, data_m_2, data_m_3, data_n_1,
			data_j_1, data_o_1_1,data_o_2_1,data_o_2_2, data_p_1,data_q_1,data_r_1,
			data_s_1,data_s_2,data_s_3,data_s_4,
			data_t_1,data_t_2,data_u_1,data_v_1,
		    data_w_1, data_w_2, data_x_1, data_y_1, data_y_2, data_z_1, data_aa_1,  data_aa_2,  data_bb_1,  data_cc_1,  data_dd_1,  data_dd_2,   data_ee_1
        ) {
            var course = {
                title: 'PRE ALGEBRA',
                 children: [{
                    title: 'Diagnostic',
                    path: 'diagnostic',
                    children: [
                        diagnostic
                    ]
                }, {
                    title: '1 Review of Arithmetic',
                    path: 'review-arithmetic',
                    children: [
                        data_a_1,  data_b_1, data_c_1, data_c_2, data_d_1, data_e_1, data_e_2, data_e_3, data_e_4,
						data_f_1, data_g_1, data_g_2, data_g_3, data_h_1, data_h_2, data_i_1, data_i_2,data_i_3,data_i_4
                    ]
                }, {
                    title: '2 Signed Numbers',
                    path: 'signed-numbers',
                    children: [
                        data_j_1, data_k_1, data_k_2, data_k_3, data_l_1, data_l_2, data_m_1, data_m_2, data_m_3, data_n_1
                    ]
                }, {
                    title: '3 Exponents',
                    path: 'exponents',
                    children: [
                        data_o_1_1,data_o_2_1,data_o_2_2, data_p_1,data_q_1,data_r_1
                    ]
                }, {
                    title: '4 Geometric Shapes',
                    path: 'geometric-shapes',
                    children: [
                        data_s_1,data_s_2,data_s_3,data_s_4,data_t_1,data_t_2,data_u_1,data_v_1
                    ]
                }, {
                    title: '5 Algebraic Expressions & Equations',
                    path: 'algebraic-expressions',
                    children: [
                        data_w_1, data_w_2, data_x_1, data_y_1, data_y_2, data_z_1, data_aa_1,  data_aa_2,  data_bb_1,  data_cc_1,  data_dd_1,  data_dd_2,   data_ee_1
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
