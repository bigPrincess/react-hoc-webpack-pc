## 使用说明:
npm run start: 运行本地开发环境

npm run dev: 开发环境编译

npm run uat: 测试环境编译

npm run stg: 预上线环境编译

npm run prd: 生产环境编译

npm run eslint: 校验代码质量

###目录说明
api nodejs服务器, mock数据用
src 源代码
test 测试代码

### npm源设置
npm set registry http://npm.corp.rs.com:4873/

### 启动api服务器
npm run api

### 其他说明

### change list

##### 1.0.1
更新rstool-build至0.1.32
修正一些bug

##### 1.0.2
增加eslint功能

##### 1.0.3
更新rstool-build至0.1.41

##### 1.0.4
更新rstool-build至1.0.3

## 参考资料
1、 `webpack devserver ` : https://doc.webpack-china.org/configuration/dev-server/
2、 `koa中间件机制详解`: https://segmentfault.com/a/1190000009158828 
3、`url-search-params` ：定义了很多个用来处理 URL 参数串的方法。 https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams
4、 `modelproxy`：轻量级的接口配置建模框架  https://github.com/sosout/modelproxy
5、 `isomorphic-fetch`：fetch请求 https://www.npmjs.com/package/isomorphic-fetch-http
6、 `FormData`: api   https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/FormData