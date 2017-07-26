import { ReactFetchEngine } from './modelproxy-engine-fetch';

export const reactEngine = new ReactFetchEngine();

/**
 * 请求真正的数据接口
 * 判断http的状态码，如果不是200，直接抛出错误
 * 判断数据的code字段，如果不是200，抛出错误
 * 返回数据
 */
reactEngine.use(async (ctx, next) => {
    if (ctx.result.status !== 200) {
        throw new Error(ctx.result.statusText);
    }
    ctx.result = await ctx.result.json();

    console.log(ctx.result.message);
    // if (ctx.result.code !== 200) {
    //     throw new Error(ctx.result.message);
    // }
    await next();
});

export default {
    "react": reactEngine
};