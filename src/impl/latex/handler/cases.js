/*!
 * cases处理器
 */

define( function ( require ) {

    return function ( info, processedStack, unprocessedStack ) {

        var len = info.params;

        info.operand = [];

        for ( var i = 0; i < len; i++ ) {
            info.operand.push( unprocessedStack.shift() );
        }

        delete info.handler;
        delete info.params;

        return info;

    };

} );
