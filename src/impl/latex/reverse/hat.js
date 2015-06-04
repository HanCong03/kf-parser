/*!
 * 逆解析处理函数: textcircled
 */

define( function () {

    return function ( operands ) {

        var name = this.callFn.setType[0];

        return '\\'+ name + operands[ 0 ];

    };

} );
