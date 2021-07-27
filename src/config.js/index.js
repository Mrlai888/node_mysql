const sqlConfig = {
    host: "127.0.0.1",

    user: "root",

    password: "F1334003lxy",

    database: "users",

    port: '3306',

    connectTimeout: 5000, // 设置超时时间

    multipleStatements: false // 是否允许一条sql包含多条sql
}

const baseUrl = 'http://127.0.0.1:3000'

module.exports = {
    sqlConfig,
    baseUrl
}