/*!
 * 逆解析处理函数: matrix
 */

define( function () {

    /**
     * operands
     */
    return function ( operands ) {

        var colCount = this.callFn.setColCount[ 0 ],
            rowCount = operands.length / colCount,
            ops = [];

        var align = this.callFn.setAlign[0];

        for ( var i = 0; i < rowCount; i++ ) {
            ops[ i ] = operands.slice( i * colCount, ( i+ 1 ) * colCount ).join( "&" );
        }

        return [
            "\\begin{array}{" + align + "}",
            ops.join( " \\\\ " ),
            "\\end{array}"
        ].join( " " );

    };

} );