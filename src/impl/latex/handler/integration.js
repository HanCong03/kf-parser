/*!
 * 积分函数处理器
 */

define( function ( require ) {

    var ScriptExtractor = require( "impl/latex/handler/lib/script-extractor" ),
        FN_TYPE = require( "impl/latex/define/type" ).FN;

    return function ( info, processedStack, unprocessedStack ) {

        var count = unprocessedStack.shift(),
            params = ScriptExtractor.exec( unprocessedStack );

        if ( params.expr && params.expr.type === FN_TYPE && params.expr.handler && params.expr.name === "integration" ) {
            params.expr = params.expr.handler( params.expr, processedStack, [ unprocessedStack.shift() ] );
        }

        info.operand = [ params.expr, params.superscript, params.subscript ];
        // 参数配置调用
        info.callFn = {
            setType: [ count | 0 ]
        };

        delete info.handler;

        return info;

    };

} );