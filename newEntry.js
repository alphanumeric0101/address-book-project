var inquirer = require("inquirer");
var Table = require('cli-table');
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
var addressType = {
    type: "list",
    name: "addressType",
    message: "Home or Work Address?",
    choices: ["home","work"]
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
var phoneType = {
    type: "list",
    name: "phoneType",
    message: "Phone Type?",
    choices: ["cell","home","fax", "other"]
}
var phoneNumber = {
    type: "string",
    name: "phoneNumber",
    message: "Phone Number?"
}
var emailType = {
    type: "list",
    name: "emailType",
    message: "Home or Work email Address?",
    choices: ["home","work"]
}
var emailAddress = {
    type: "string",
    name: "emailAddress",
    message: "Email Address?"
}

questions.push(firstName);
questions.push(lastName);
questions.push(birthDay);
questions.push(addressType);
questions.push(addressLine1);
questions.push(city);
questions.push(province);
questions.push(postalCode);
questions.push(country);
questions.push(phoneType);
questions.push(phoneNumber);
questions.push(emailType);
questions.push(emailAddress);


function createNewEntry(questions){
  
  inquirer.prompt( questions, function( answers ) {
    
    var addressBookLength = addressBook.entries.length;
    addressBook.entries[addressBookLength] = answers;
 //   console.log(addressBook);
  showTable(addressBookLength);
   console.log("Lets just Update that!");
    editQuestions(0);
  });
   
}

createNewEntry(questions);

function showTable(entityIndex){
    
    var table = new Table({
                        
                    chars: {'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗', 'bottom': '═' ,
                            'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝', 'right': '║' ,
                            'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼',
                            'right-mid': '╢' , 'middle': '│' }
    });
    
                       
    table.push( 
        ["First Name", addressBook.entries[entityIndex].firstName],
        ["Last Name", addressBook.entries[entityIndex].lastName],
        ["Birthday", addressBook.entries[entityIndex].birthDay],
        ["Addresses", addressBook.entries[entityIndex].addressLine +"\n"+addressBook.entries[entityIndex].city+", "+addressBook.entries[entityIndex].province+" "+addressBook.entries[entityIndex].postalCode+"\n"+addressBook.entries[entityIndex].country],
       ["Phones", addressBook.entries[entityIndex].phoneType+": "+addressBook.entries[entityIndex].phoneNumber],
        ["Emails", addressBook.entries[entityIndex].emailType+": "+addressBook.entries[entityIndex].emailAddress]
    );
    console.log(table.toString());
   
}


function showEditTable(entityIndex){
    
    var table = new Table({
                        
                    chars: {'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗', 'bottom': '═' ,
                            'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝', 'right': '║' ,
                            'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼',
                            'right-mid': '╢' , 'middle': '│' }
    });
    
                       
    table.push( 
        ["First Name", addressBook.entries[entityIndex].editFirstName],
        ["Last Name", addressBook.entries[entityIndex].editLastName],
        ["Birthday", addressBook.entries[entityIndex].editBirthday],
        ["Addresses", addressBook.entries[entityIndex].editHomeAddress +"\n"+addressBook.entries[entityIndex].editCity+", "+addressBook.entries[entityIndex].editProvince+" "+addressBook.entries[entityIndex].editPostalCode+"\n"+addressBook.entries[entityIndex].editCountry],
        ["Phones", addressBook.entries[entityIndex].editPhoneNumber],
        ["Emails", addressBook.entries[entityIndex].editEmail]
    );
    console.log(table.toString());
   
}



function editQuestions(editIndex){
  
var questions = [
  {
    type: "input",
    name: "editFirstName",
    message: "First name:"
  },
  {
    type: "input",
    name: "editLastName",
    message: "Last name:"
  },
  {
    type: "input",
    name: "editBirthday",
    message: "Birthday:"
  },
  {
    type: "input",
    name: "editHomeAddress",
    message: "Home address:"
  },
  {
    type: "input",
    name: "editCity",
    message: "City:"
  },
{
    type: "input",
    name: "editProvince",
    message: "Province:"
  },
{
    type: "input",
    name: "editPostalCode",
    message: "Postal Code:"
  },
{
    type: "input",
    name: "editCountry",
    message: "Country:"
  },
{
    type: "input",
    name: "editPhoneNumber",
    message: "Phone Number:"
  },
{
    type: "input",
    name: "editEmail",
    message: "Email:"
  }
];


  editEntry(questions,editIndex);
}


function editEntry(questions,editIndex){
  
  inquirer.prompt( questions, function( answers ) {
    
   
    var addressBookLength = addressBook.entries.length;
    addressBook.entries[addressBookLength] = answers;
    
 //   console.log(addressBookLength);
 //   console.log(addressBook.entries[addressBookLength]);
    showEditTable(addressBookLength);
    if(editIndex !== undefined){

      addressBook.entries.splice(editIndex,1);
   //   console.log(addressBook.entries[editIndex]);
    }
  });
    
}


