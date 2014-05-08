/*!
 * 函数表达式处理器
 */

define( function ( require, exports, module ) {

    var ScriptExtractor = require( "impl/latex/handler/lib/script-extractor" );

    // 处理函数接口
    return function ( info, processedStack, unprocessedStack ) {

        var params = ScriptExtractor.exec( unprocessedStack );

        info.operand = [ info.params, params.superscript, params.subscript ];
        delete info.params;
        delete info.handler;

        return info;

    };

} );