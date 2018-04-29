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

function createItem() {
    console.log("Add new item...\n");
    var query = connection.query(
      "INSERT INTO greatbay_db.auctions SET ?",
      {
        item_name: "Rocky Road",
        category: "Ice Cream"
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        // updateProduct();
      }
    )
};

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
        createItem();
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
