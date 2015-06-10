/*!
 * 逆解析对照表
 */

define(function (require) {

    return {

        'combination': require("impl/latex/reverse/combination"),
        'fraction': require("impl/latex/reverse/fraction"),
        'dfraction': require("impl/latex/reverse/fraction"),
        'function': require("impl/latex/reverse/func"),
        'integration': require("impl/latex/reverse/integration"),
        'subscript': require("impl/latex/reverse/subscript"),
        'superscript': require("impl/latex/reverse/superscript"),
        'script': require("impl/latex/reverse/script"),
        'radical': require("impl/latex/reverse/sqrt"),
        'summation': require("impl/latex/reverse/summation"),
        'product': require("impl/latex/reverse/product"),
        'brackets': require("impl/latex/reverse/brackets"),
        'mathcal': require("impl/latex/reverse/mathcal"),
        'mathfrak': require("impl/latex/reverse/mathfrak"),
        'mathbb': require("impl/latex/reverse/mathbb"),
        'mathrm': require("impl/latex/reverse/mathrm"),
        'mathbf': require("impl/latex/reverse/mathbf"),
        'cases': require("impl/latex/reverse/cases"),
        'split': require("impl/latex/reverse/split"),
        'textcircled': require("impl/latex/reverse/textcircled"),
        'hat': require("impl/latex/reverse/hat"),
        'pmod': require("impl/latex/reverse/pmod"),
        'overline': require("impl/latex/reverse/overline"),
        'underbrace': require("impl/latex/reverse/underbrace"),
        'overparen': require("impl/latex/reverse/overparen"),
        'matrix': require("impl/latex/reverse/matrix"),
        'array': require("impl/latex/reverse/array")

    };

});