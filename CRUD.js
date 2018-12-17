// 导入定义好的 数据库 ORM 对象
var BooksModel = require('./BooksModel.js');

// 注意：今后在使用ORM操作 任何表的时候，最好，先 sync 一下
// Model.sync({force:true})  force表示 不管有没有这张表，必须重新创建新表
// BooksModel.sync({}) //使用sync（） 保证数据库表已经被创建了
//   .then(() => {
//     return BooksModel.findAll(); // 使用findAll 查找所有的数据，并返回一个 Promise 对象
//   })
//   .then((results) => {  //使用第二个.then 处理第一个 then 中返回的数据
//     console.log(results[1]) 
//   })

// 查询数据
// BooksModel.sync()
//   .then(()=>{
//     return BooksModel.findAll();
//   })
//   .then((results)=>{
//     console.log(results)
//   })

// 根据ID查询
// BooksModel.sync()
//   .then(()=>{
//     return BooksModel.findById(1);
//   })
//   .then((results)=>{
//     console.log(results)
//   })


// 根据主键查询
// BooksModel.sync()
//   .then(()=>{
//     return BooksModel.findByPrimary(2);
//   })
//   .then((results)=>{
//     console.log(results)
//   })

// 自定义查询参数
// BooksModel.sync()
//   .then(()=>{
//     return BooksModel.findAll({
//       where:{
//         name:'李四'
//       }
//     });
//   })
//   .then((results)=>{
//     console.log(results)
//   })
// findOne 查找第一个满足条件的数据
// BooksModel.sync()
//   .then(()=>{
//     return BooksModel.findOne({
//       where:{
//         name:'李四'
//       }
//     });
//   })
//   .then((results)=>{
//     console.log(results)
//   })


// 添加数据
// var newBooks = {
//   name: '赵四',
//   isdel: false
// }

// BooksModel.sync()
//   .then(() => {
//     // 对 Model 的操作，一般都返回 Promise 对象
//     return BooksModel.create(newBooks); // 通过Model.create(要插入的数据对象) 来向表中写入数据
//   })
//   .then(result => {
//     // create 的结果，得到的是刚才新写入到数据库中的数据，是一个完成的数据
//     console.log(result)
//   })

// 更新数据
// var book = {
//   id: 1,
//   name: '尼古拉斯',
//   isdel: false
// }

// BooksModel.sync()
//   .then(()=>{
//     return BooksModel.update(book,{
//       where:{
//         id:book.id
//       }
//     })
//   })
//   .then((results => {
//     console.log(results)
//   }))

// 删除
// BooksModel.sync()
//   .then(()=>{
//     return BooksModel.destroy({ // 调用Model.destroy() 删除数据
//       where:{
//         id:2
//       }
//     });
//   })
//   .then((results) =>{
//     console.log(results)
//   })


