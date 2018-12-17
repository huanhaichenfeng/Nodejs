// 先导入 Sequelize 模块，里面存放了字段的数据类型
var Sequelize = require('sequelize');
// 在导入 baseDb 模块，这是数据库连接对象
var Db = require('./baseDb.js');

// 通过 define() 来定义一个数据库的表对象
// 第一个参数：是表的名称，将来会按照这个名称去数据库中查找对应的表
// 第二个参数：配置对象，配置了数据库表的 各个字段 、以及字段的类型、是否主键、是否自增、是否允许为空等.
var Books = Db.define('books', {
  id: { // id  【不能为空 allowNull、主键 primayKey、自增 autoIncrement、类型int  type、唯一 unique】
    allowNull: false, // 【不能为空
    primaryKey: true, // 是主键
    autoIncrement: true, // 是自动增长
    type: Sequelize.INTEGER,// 整数类型  int  -> integer
    unique: true // 当前字段的值是唯一的，不能出现重复的字段值
  },
  name: { // 【不能为空、类型 string type】
    allowNull: false,
    type: Sequelize.STRING
  },
  isdel: { // 【不能为空、类型 bool   type     、默认值  defaultValue】
    allowNull: false,
    type: Sequelize.BOOLEAN,
    defaultValue: 0 // 默认值
  }
});

module.exports = Books;



