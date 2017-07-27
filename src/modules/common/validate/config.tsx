export const config = {
    email: {
        rules: [{
            type: 'email', message: '邮箱格式不正确!',
        }, {
            required: true, message: '邮箱格式不正确!',
        }],
    },
     phone: {
        rules: [{
            pattern: /(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/, message: '手机号码格式不正确!',
        },
        {
            len:11,message: '手机号码格式不正确!',
        },
        {
            required: true, message: '邮箱格式不正确!',
        }],
    }
}