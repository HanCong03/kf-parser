/*!
 * 逆解析处理函数: split
 */

define( function () {

    /**
     * operands
     */
    return function ( operands ) {

        var head = operands[ 0 ],
            ops = [];

        for ( var i = 1; i < operands.length; i++ ) {
            ops.push( "&" + operands[ i ] );
        }

        return [
            "\\begin{split}",
            head,
            ops.join( " \\\\ " ),
            "\\end{split}"
        ].join( " " );

    };

} );