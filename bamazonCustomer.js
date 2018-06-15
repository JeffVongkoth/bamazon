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
        if (err) throw err;
        console.log("\n-----------------------------------");
        for (let i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + '$', res[i].price + " | ");
        }
        console.log("\n-----------------------------------");
        showQuestions();
    })
    // showQuestions();
}

function checkProduct(selection) {
    connection.query(sqlCommand, function (err, res) {
        if (err) throw err;
        console.log(selection);
        let chosenProduct = selection.product;
        console.log(chosenProduct);
        let chosenQuantity = selection.quantity;
        console.log(chosenQuantity);
        
        for (let i = 0; i < res.length; i++) {
            // console.log(res);
            let stock = res[i].stock_quantity;
            console.log(stock);

            // // chosenQuanitity, 
            // if (selection <= stock_quantity) {
            //     console.log('Your transaction has been completed');
            // }
            // else if (stock <= 0) {
            //     console.log("-----------------------------------");
            //     console.log('Sorry not enough shit for you order');
            // }
        }

    })
}

function showQuestions() {
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
        
            checkProduct(inquirerResponse);
        })
}



connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryProducts();
    afterConnection();
});

function afterConnection() {
    connection.query(sqlCommand, function (err, res) {
        if (err) throw err;
        // connection.end();
    });
}
