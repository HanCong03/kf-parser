/*!
 * overline 上划线
 */

define( function () {

    return function ( info, processedStack, unprocessedStack ) {

        var expr = unprocessedStack.shift();

        info.operand = [ expr ];

        delete info.handler;

        return info;

    };

} );
