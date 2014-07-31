/*!
 * 分数函数处理器
 */

define( function () {

    // 处理函数接口
    return function ( info, processedStack, unprocessedStack ) {

        var numerator = unprocessedStack.shift(),   // 分子
            denominator = unprocessedStack.shift(); // 分母

        if ( numerator === undefined || denominator === undefined ) {
            throw new Error( "Frac: Syntax Error" );
        }

        if ( numerator.handler && numerator.name === "integration" ) {
            numerator = numerator.handler( numerator, processedStack, [ denominator ] );
            denominator = unprocessedStack.shift();
        } else if ( denominator.handler && denominator.name === "integration" ) {
            denominator = denominator.handler( denominator, processedStack, [ unprocessedStack.shift() ] );
        }

        info.operand = [ numerator, denominator ];

        delete info.handler;

        return info;

    };

} );