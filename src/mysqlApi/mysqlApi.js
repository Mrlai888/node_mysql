let mysql = require('mysql');
const config = require('../config.js')

let connection = mysql.createConnection(config.sqlConfig)

connection.connect((err)=>{
    if(err){throw err}
    console.log('连接成功')
    return
})
// 封装操作mysql的函数

function mysqlAction(sql) {
    // promise 处理请求异步问题
   return  new Promise((resolve, reject) => {
       
        connection.query(sql, (err, result) => {
            if (err) {
                reject(err.message)
            }
            resolve(result)
        })
     
    })
}

// connection.end((err)=>{
//     if(err){throw err}
//     console.log('关闭失败');
// })
module.exports = mysqlAction
