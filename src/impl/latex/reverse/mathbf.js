/*!
 * 逆解析处理函数: mathfrak
 */

define( function () {

    return function ( operands ) {

        return "\\mathbf{" + operands[0] +"}";

    };

} );