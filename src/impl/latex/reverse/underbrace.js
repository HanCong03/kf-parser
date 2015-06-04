/*!
 * 逆解析处理函数: underbrace
 */

define( function () {

    /**
     * operands
     */
    return function ( operands ) {

        return [
            "\\underbrace",
            operands[ 0 ] + "_" + operands[ 1 ]
        ].join( " " );

    };

} );