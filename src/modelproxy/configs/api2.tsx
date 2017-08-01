var host = "https://randomuser.me";

module.exports = {
    "key": "api2",
    "title": "测试接口数据",
    "state": "dev",
    "engine": "default",
    "mockDir": "./mocks/",
    "states": {
        "prod": "/api/fc-c",
        "dev": host
    },
    "interfaces": [{
        "path": "/api",
        "method": "get",
        "key": "fenye",
        "title": "分页查询"
        
    },
]
}

