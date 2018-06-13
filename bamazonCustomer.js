var mysql = require('mysql');
var inquirer = require('inquirer');
nodemon()


var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'jeff13579',
  database: 'bamazon'
}); //info to connect to database

var myCallback = function(err, response) {
  // handle the err and response
  if (err) throw (err);
}

var sqlCommand = 'SELECT * FROM products'; //accessing the table 'products'

// connection.connect(function(err) {
//     if (err) {console.log('connection.js ', err);}
//     console.log('connected! ', connection.threadId);

//     connection.query(sqlCommand, function (err,res){
//     if (err) {console.log('connection.js ', err);}
//     // console.log('response ', response);
//     });
// })

function showProduct() {
  connection.query(sqlCommand, myCallback);
  console.log(myCallback);
}
showProduct()


// inquirer
//   .prompt([
// {
//   type: "list",
//   message: "Which product would you like?",
//   choices: ['stroller', 'sword', 'car wash soap', 'toilet paper', 'AA battery', 'white t-shirt',
//   'pencils', 'tooth brush', 'RC car', 'Tablet'],
//   name: "product"
// },
// {
// type:'input',
// message:'How much of this product would you like?',
// name:'quantity'
// }
//   ])
// .then(function(product) {
  
// })

