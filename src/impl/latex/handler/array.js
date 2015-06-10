/*!
 * array处理器
 */

define( function ( require ) {

    return function ( info, processedStack, unprocessedStack ) {

        var colCount = info.colCount,
            rowCount = info.rowCount;

        info.operand = [];

        for ( var i = 0, len = info.colCount * info.rowCount; i < len; i++ ) {
            info.operand[ i ] = unprocessedStack.shift();
        }

        info.callFn = {
            setColCount: [ info.colCount ],
            setAlign: [info.align.join('')]
        };

        delete info.handler;
        delete info.colCount;
        delete info.rowCount;
        delete info.align;

        return info;
    };

} );
