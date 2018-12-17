// 使用sequelize 操作mysql数据库
//1. 导入模块 
var Sequelize = require('sequelize')

//第一个参数：要操作的数据库名称
//第二个参数：登录数据库的用户名
//第三个参数：登录数据库的密码
//最后一个参数：配置对象 host【数据库的IP地址】 dialect【操作数据的类型】
var connection =  new Sequelize('my123','root','123456',{
  host:'localhost',
  dialect: 'mysql', //指定要操作的数据库的类型   
})


module.exports = connection;