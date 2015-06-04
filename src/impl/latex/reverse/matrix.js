/*!
 * 逆解析处理函数: matrix
 */

define( function () {

    /**
     * operands
     */
    return function ( operands ) {

        var colCount = this.callFn.setColNum[ 0 ],
            rowCount = operands.length / colCount,
            command = this.callFn.setType[ 0 ],
            ops = [];

        for ( var i = 0; i < rowCount; i++ ) {
            ops[ i ] = operands.slice( i * colCount, ( i+ 1 ) * colCount ).join( "&" );
        }

        return [
            "\\begin{" + command + "matrix}",
            ops.join( " \\\\ " ),
            "\\end{" + command + "matrix}"
        ].join( " " );

    };

} );