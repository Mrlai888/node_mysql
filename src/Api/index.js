// 请求后台数据
const sqlAction = require('../mysqlApi')
const sqlStr = require('../mysqlApi/sqls')

const {userlist} = sqlStr
const {mysqlApi} = sqlAction

async function addData() {
    return await mysqlApi(userlist.add)
}

async function searchData() {
    const res =  await mysqlApi(userlist.search)
    console.log(res,'resres')
    return res
}

async function updateData() {
    return await mysqlApi(userlist.update)
}

async function deleteData() {
    return await mysqlApi(userlist.deletes)
}

module.exports = {
    addData,
    searchData,
    updateData,
    deleteData,
}