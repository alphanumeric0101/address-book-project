var inquirer = require("inquirer");
var Table = require('cli-table');

var mainMenu = [{
    type: "list",
    name: "main",
    message: "What can I do for you?",
    choices: [{
        name: "Create an entry"
    }, {
        name: "Search existing entries"
    }, {
        name: "Exit program"
    }]
}];

inquirer.prompt(mainMenu, function(answers) {
    if (answers.main === "Create an entry"){
    createEntry();
    }
    else if (answers.main === "Search existing entries") {
        searchEntries();
    }
    else {
        term();
    }
    // Use user feedback for... whatever!!
});