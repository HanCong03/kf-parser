/**
 * 操作符列表
 */

define( function ( require ) {

    var scriptHandler = require( "impl/latex/handler/script" ),
        TYPE = require( "impl/latex/define/type" );

    return {

        "^": {
            name: "superscript",
            type: TYPE.OP,
            handler: scriptHandler
        },
        "_": {
            name: "subscript",
            type: TYPE.OP,
            handler: scriptHandler
        },
        "frac": {
            name: "fraction",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/fraction" )
        },
        "dfrac": {
            name: "fraction",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/dfrac" )
        },
        "sqrt": {
            name: "radical",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/sqrt" )
        },
        "sum": {
            name: "summation",
            type: TYPE.FN,
            traversal: "rtl",
            handler: require( "impl/latex/handler/summation" )
        },
        "int": {
            name: "integration",
            type: TYPE.FN,
            traversal: "rtl",
            handler: require( "impl/latex/handler/integration" )
        },

        "brackets": {
            name: "brackets",
            type: TYPE.FN,
            handler: require( "impl/latex/handler/brackets" )
        },

        "cases": {
            name: "cases",
            type: TYPE.FN,
            handler: require( "impl/latex/handler/cases" )
        },

        "split": {
            name: "split",
            type: TYPE.FN,
            handler: require( "impl/latex/handler/split" )
        },

        "mathcal": {
            name: "mathcal",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/mathcal" )
        },

        "overparen": {
            name: "overparen",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/overparen" )
        },

        "underbrace": {
            name: "underbrace",
            type: TYPE.FN,
            handler: require( "impl/latex/handler/underbrace" )
        },

        "mathfrak": {
            name: "mathfrak",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/mathfrak" )
        },

        "mathbf": {
            name: "mathbf",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/mathbf" )
        },

        "mathbb": {
            name: "mathbb",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/mathbb" )
        },

        "mathrm": {
            name: "mathrm",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/mathrm" )
        },

        "hat": {
            name: "hat",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/hat" )
        },

        "vec": {
            name: "vec",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/hat" )
        },

        "overrightarrow": {
            name: "overrightarrow",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/hat" )
        },

        "widehat": {
            name: "widehat",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/hat" )
        },

        "vmatrix": {
            name: "vmatrix",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/matrix" )
        },

        "pmatrix": {
            name: "pmatrix",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/matrix" )
        },

        "array": {
            name: "array",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/array" )
        },

        "textcircled": {
            name: "textcircled",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/textcircled" )
        },

        "prod": {
            name: "product",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/product" )
        },

        "pmod": {
            name: "pmod",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/pmod" )
        },

        "overline": {
            name: "overline",
            type: TYPE.FN,
            sign: false,
            handler: require( "impl/latex/handler/overline" )
        }

    };

} );