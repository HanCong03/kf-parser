/*!
 * 逆解析处理函数: fraction
 */

define( function () {

    return function ( operands ) {

        if ( this.callFn ) {
            return "\\dfrac " + operands[0] + " " + operands[ 1 ];
        } else {
            return "\\frac " + operands[0] + " " + operands[ 1 ];
        }

    };

} );