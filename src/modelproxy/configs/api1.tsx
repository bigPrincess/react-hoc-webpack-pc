var host = "http://fc-c.dev.rs.com";

module.exports = {
    "key": "api1",
    "title": "测试接口数据",
    "state": "dev",
    "engine": "default",
    "mockDir": "./mocks/",
    "states": {
        "prod": "/api/fc-c",
        "dev": host
    },
    "interfaces": [{
        "path": "/parameter/loupan",
        "method": "get",
        "key": "get-noheader-noparam",
        "title": "获取新房筛选条件"
        
    },{
        "path": "/house/houseDetail/{/params}",
        "method": "get",
        "key": "get_noheader_param",
        "title": "获取房源详情"
    },{
         "path": "/loupan/detail",
        "method": "get",
        "key": "get_noheader_params",
        "title": "获取新房详情"   
    },{
        "path": "/wx/config",
        "method": "post",
        "key": "post_noheader_params",
        "title": "获取微信config" 
    },,{
        "path":"/order/order",
        "method": "POST",
        "key": "post_header_params",
        "title": "用户下单 " 
    }]
}

