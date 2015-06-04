/*!
 * 分数函数处理器
 */

define( function () {

    // 处理函数接口
    return function ( info, processedStack, unprocessedStack ) {

        var expr = unprocessedStack.shift(),
            type = info.name;

        info.name = 'hat';
        info.operand = [ expr ];
        info.callFn = {
            setType: [ type ]
        };

        delete info.handler;

        return info;

    };

} );