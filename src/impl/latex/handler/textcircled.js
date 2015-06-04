/*!
 * 带圈的数字
 */

define( function () {

    return function ( info, processedStack, unprocessedStack ) {

        var char = unprocessedStack.shift();

        if ( typeof char === "object" && char.name === "combination" ) {
            char = char.operand.join( "" );
        }

        info.operand = [ char ];

        delete info.handler;

        return info;

    };

} );
