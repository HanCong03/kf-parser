/*!
 * 下支撑结构处理器
 */

define( function ( require ) {

    return function ( info, processedStack, unprocessedStack ) {

        info.operand = [
            unprocessedStack.shift(),
            unprocessedStack.shift()
        ];

        delete info.handler;

        return info;

    };

} );
