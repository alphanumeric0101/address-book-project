var inquirer = require("inquirer");

var addressBook = {entries: []};

var questions = [];
var firstName = {
    type: "string",
    name: "firstName",
    message: "First name?"
}
var lastName = {
    type: "string",
    name: "lastName",
    message: "Last name?"
}
var birthDay = {
    type: "string",
    name: "birthDay",
    message: "Birth Day?"
}
var addressLine1 = {
    type: "string",
    name: "addressLine",
    message: "Address Line?"
}
var city = {
    type: "string",
    name: "city",
    message: "City?"
}
var province = {
    type: "string",
    name: "province",
    message: "Province?"
}
var postalCode = {
    type: "string",
    name: "postalCode",
    message: "Postal Code?"
}
var country = {
    type: "string",
    name: "country",
    message: "Country?"
}
var phoneNumber = {
    type: "string",
    name: "phoneNumber",
    message: "Phone Number?"
}
var phoneType = {
    type: "string",
    name: "phoneType",
    message: "Phone Type?"
}
var emailAddress = {
    type: "string",
    name: "emailAddress",
    message: "Email Address?"
}

questions.push(firstName);
questions.push(lastName);
questions.push(birthDay);
questions.push(addressLine1);
questions.push(city);
questions.push(province);
questions.push(postalCode);
questions.push(country);
questions.push(phoneNumber);
questions.push(phoneType);
questions.push(emailAddress);


function createNewEntry(questions){
  
  inquirer.prompt( questions, function( answers ) {
    
    var addressBookLength = addressBook.entries.length;
    addressBook.entries[addressBookLength] = answers;
    console.log(answers);
  //  showTable(addressBookLength);
  });
    
}

createNewEntry(questions);
//console.log(addressBook);