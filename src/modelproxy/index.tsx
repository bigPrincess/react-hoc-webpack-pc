import { modelProxy } from 'modelproxy'; //引入modelProxy

import mockjsEngine from './engines/mockjs';
import reactEngineObj, { reactEngine } from './engines/react';

const api1 = require('./configs/api1');
const proxy = new modelProxy.Proxy();

const proxyDefault = { engine: "react", mockDir: "/mock", state: __DEV__ ? "dev" : "prod" };
// 载入配置
proxy.loadConfig(api1, proxyDefault);

// 添加engines
if (__DEV__) {
    proxy.addEngines(mockjsEngine);
}
proxy.addEngines(reactEngineObj);

export {
    proxy,
    reactEngine,
    mockjsEngine
};