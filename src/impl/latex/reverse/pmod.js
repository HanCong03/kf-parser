/*!
 * 逆解析处理函数: pmod
 */

define( function () {

    return function ( operands ) {

        operands = operands[0];

        if ( operands[0] === '{' ) {
            return '\\pmod' + operands;
        }

        return '\\pmod{' + operands + '}';

    };

} );
