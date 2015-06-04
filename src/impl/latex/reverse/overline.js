/*!
 * 逆解析处理函数: overline
 */

define( function () {

    return function ( operands ) {

        operands = operands[0];

        if ( operands[0] === '{' ) {
            return '\\overline' + operands;
        }

        return '\\overline{' + operands + '}';

    };

} );
