define( function () {

    // 处理函数接口
    return function ( info, processedStack, unprocessedStack ) {

        var colCount = info.colCount,
            rowCount = info.rowCount,
            type = info.name.charAt( 0 );

        info.operand = [];

        for ( var i = 0, len = info.colCount * info.rowCount; i < len; i++ ) {
            info.operand[ i ] = unprocessedStack.shift();
        }

        info.callFn = {
            setColNum: [ info.colCount ],
            setType: [ type ]
        };

        info.name = 'matrix';

        delete info.handler;
        delete info.colCount;
        delete info.rowCount;

        return info;

    };

} );