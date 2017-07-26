import { MockEngine } from 'modelproxy-engine-mockjs';
import { ReactFetchEngine } from './modelproxy-engine-fetch';
import { IProxyCtx } from 'modelproxy';

let mockjsEngine;

// if (__DEV__) {
const reactMockEngine = new ReactFetchEngine();

/**
 * 添加mockjs的engine，这个engine来请求mock数据
 * 处理回来的字符串数据
 * 转换成json
 */
reactMockEngine.use(async (ctx, next) => {
    ctx.result = await ctx.result.text();
    if (typeof ctx.result === "string") {
        ctx.result = JSON.parse(ctx.result.replace("module.exports =", "").replace(/;$/g, ""), function (k, v) {
            if (v && v.indexOf && v.indexOf('function') > -1) {
                return eval("(function(){return " + v + " })()");
            }
            return v;
        });
    }

    await next();
});

/**
 * 请求真正的数据接口
 * 判断http的状态码，如果不是200，直接抛出错误
 * 判断数据的code字段，如果不是200，抛出错误
 * 返回数据
 */
reactMockEngine.use(async (ctx, next) => {
    setTimeout(async () => {
        await next();
    }, 1000);
});

mockjsEngine = new MockEngine(reactMockEngine);

mockjsEngine.use(async (ctx: IProxyCtx, next) => {
    let Mock = require("mockjs");

    ctx.result = Mock.mock(ctx.result);

    if (ctx.result.code !== 200) {
        let err = new Error(ctx.result.message);

        err["code"] = ctx.result.code;

        throw err;
    }
    await next();
});

mockjsEngine.use(async (ctx: IProxyCtx, next) => {

    // 秦文的插件

    await next();
});
// }

export default {
    "mockjs": mockjsEngine
};
