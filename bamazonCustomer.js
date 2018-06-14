const mysql = require('mysql');
const inquirer = require('inquirer');


const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'jeff13579',
    database: 'bamazon'
}); //info to connect to database

let sqlCommand = 'SELECT * FROM products'; //accessing the table 'products'


function queryProducts() {
    connection.query(sqlCommand, function (err, res) {
        console.log("\n-----------------------------------");
        for (let i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price + " | ");
        }
        console.log("/n-----------------------------------");
    });
}

function checkProduct() {
    connection.query(sqlCommand, function (err, res) {
        for (let i = 0; i < res.length; i++) {
            
            let stock = res[i].stock_quantity;
            console.log(chosenQuanitity,stock);
if (chosenQuanitity <= stock_quantity) {

}
else if (stock <= 0 ) {
    console.log("-----------------------------------");
    console.log('Sorry not enough shit for you order');
}
        }

    })
}
// checkProduct();
function productPrompt() {
    queryProducts();
    inquirer
        .prompt([
            {
                type: "list",
                message: "Which product would you like?",
                choices: ['stroller', 'sword', 'car wash soap', 'toilet paper', 'AA battery', 'white t-shirt',
                    'pencils', 'tooth brush', 'RC car', 'Tablet'],
                name: "product"
            },
            {
                type: 'input',
                message: 'How much of this product would you like?',
                name: 'quantity'
            }
        ])
        .then(function (inquirerResponse) {
checkProduct();
        })
}



connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query(sqlCommand, function (err, res) {
        if (err) throw err;
        // checkProduct();

        //   console.log(res);
        productPrompt();
        connection.end();
    });
}



