// DATABASE CONNECTION INFO
// GLOBAL VARIABLES
// ====================

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "greatbay_db"
});




// FUNCTIONS
// ====================

// function createItem() {
//     console.log("Add new item...\n");

//     inquirer.prompt({
//       type: 'input',
//       name: 'first_name',
//       message: "What's your first name"
//     });

//     var query = connection.query(
//       "INSERT INTO greatbay_db.auctions SET ?",
//       {
//         item_name: "Rocky Road",
//         category: "Ice Cream"
//       },
//       function(err, res) {
//         console.log(res.affectedRows + " product inserted!\n");
//         // Call updateProduct AFTER the INSERT completes
//         // updateProduct();
//       }
//     )
// };

function addItemInfo() {
var itemQuestions = inquirer.prompt([
    {
      type: 'input',
      name: 'item_name',
      message: 'What are you selling?',
    },
    {
      type: 'input',
      name: 'category',
      message: 'What is the category of the item?',
    },
]).then(function(createItem) {
  var query = connection.query(
    "INSERT INTO greatbay_db.auctions SET ?",
    {
      item_name: createItem.item_name,
      category: createItem.category
    },
    function(err, res) {
      // console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      // updateProduct();
    });
});
};


// QUESTIONS
// What is the affectedRows







inquirer.prompt([
    {
      type: "list",
      name: "userPrompt",
      message: "What would you like to do?",
      choices: ["POST AN ITEM", "BID ON AN ITEM"]
    },   
]).then(function(user) {
    // If the user guesses the password...
    if (user.userPrompt === "POST AN ITEM") {
        addItemInfo();
    } else if (user.userPrompt === "BID ON AN ITEM") {
        bidOnItem();
    }
    // logs the actual query being run
    // console.log(query.sql);
});




// function bidOnItem() {
//     console.log("Add new item...\n");
//     var query = connection.query(
//       "INSERT INTO greatbay_db.auctions SET ?",
//       {
//         item_name: "Rocky Road",
//         price: 3.0,
//         quantity: 50
//       },
//       function(err, res) {
//         console.log(res.affectedRows + " product inserted!\n");
//         // Call updateProduct AFTER the INSERT completes
//         updateProduct();
//       }
//     )
// };
