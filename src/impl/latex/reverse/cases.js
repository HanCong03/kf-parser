/*!
 * 逆解析处理函数: cases
 */

define( function () {

    /**
     * operands
     */
    return function ( operands ) {

        var ops = [];

        for ( var i = 0, len = operands.length; i < len; i++ ) {
            if ( operands[ i ] === "\uf155" ) {
                ops[ ops.length - 1 ] += operands[ i ];
            } else {
                ops.push( operands[i] );
            }
        }

        return [
            "\\begin{cases}",
            ops.join( " \\\\ " ),
            "\\end{cases}"
        ].join( " " );

    };

} );