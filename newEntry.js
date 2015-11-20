var inquirer = require("inquirer");
var Table = require('cli-table');
var addressBook = {entries: []};

  
var questions = [
    {
    type: "string",
    name: "firstName",
    message: "First name?"
},
    {
    type: "string",
    name: "lastName",
    message: "Last name?"
},
    {
    type: "string",
    name: "birthDay",
    message: "Birth Day?"
},
    {
    type: "checkbox",
    name: "addressType",
    message: "Home, Work, or other Address?",
    choices: ["home","work", "other"]
},
    {
    type: "string",
    name: "homeAddressLine1",
    message: "Address Line (home)?",
    when: function (answers){
     //   console.log(answers.addressType);
        for (var i in answers.addressType){
            if(answers.addressType[i]==="home") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "homeAddressLine2",
    message: "Address Line 2 (optional)?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="home") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "homeCity",
    message: "City?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="home") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "homeProvince",
    message: "Province?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="home") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "homePostalCode",
    message: "Postal Code?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="home") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "homeCountry",
    message: "Country?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="home") return true;
        }
        return false;
    }
},

    {
    type: "string",
    name: "workAddressLine1",
    message: "Address Line (work)?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="work") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "workAddressLine2",
    message: "Address Line (optional)?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="work") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "workCity",
    message: "City?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="work") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "workProvince",
    message: "Province?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="work") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "workPostalCode",
    message: "Postal Code?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="work") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "workCountry",
    message: "Country?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="work") return true;
        }
        return false;
    }
},

    {
    type: "string",
    name: "otherAddressLine1",
    message: "Address Line (other)?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="other") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "otherAddressLine2",
    message: "Address Line (optional)?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="other") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "otherCity",
    message: "City?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="other") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "otherProvince",
    message: "Province?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="other") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "otherPostalCode",
    message: "Postal Code?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="other") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "otherCountry",
    message: "Country?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="other") return true;
        }
        return false;
    }
},

    {
    type: "checkbox",
    name: "phoneType",
    message: "Cell, Home, Fax, or other phone numbers?",
    choices: ["cell", "home","fax", "other"]
},




    {
    type: "string",
    name: "cellPhone",
    message: "Phone Number (cell)?",
    when: function (answers){
     //   console.log(answers.phoneType);
        for (var i in answers.phoneType){
            if(answers.phoneType[i]==="cell") return true;
        }
        return false;
    }
},


    {
    type: "string",
    name: "homePhone",
    message: "Phone Number (home)?",
        when: function (answers){
        for (var i in answers.phoneType){
            if(answers.phoneType[i]==="home") return true;
        }
        return false;
    }
},


    {
    type: "string",
    name: "faxPhone",
    message: "Phone Number (fax)?",
        when: function (answers){
        for (var i in answers.phoneType){
            if(answers.phoneType[i]==="fax") return true;
        }
        return false;
    }
},


    {
    type: "string",
    name: "otherPhone",
    message: "Phone Number (other)?",
        when: function (answers){
        for (var i in answers.phoneType){
            if(answers.phoneType[i]==="other") return true;
        }
        return false;
    }
},


    {
    type: "checkbox",
    name: "emailType",
    message: "Home or Work email Address?",
    choices: ["home","work","other"]
},
    {
    type: "string",
    name: "homeEmail",
    message: "Email Address (home)?",
        when: function (answers){
    //        console.log(answers.emailType);
        for (var i in answers.emailType){
            if(answers.emailType[i]==="home") return true;
        }
        return false;
    }
},


    {
    type: "string",
    name: "workEmail",
    message: "Email Address (work)?",
            when: function (answers){
        for (var i in answers.emailType){
            if(answers.emailType[i]==="work") return true;
        }
        return false;
    }
},


    {
    type: "string",
    name: "otherEmail",
    message: "Email Address (other)?",
            when: function (answers){
        for (var i in answers.emailType){
            if(answers.emailType[i]==="other") return true;
        }
        return false;
    }
}
];



function createNewEntry(questions){
  
  inquirer.prompt( questions, function( answers ) {
    
    var addressBookLength = addressBook.entries.length;
    addressBook.entries[addressBookLength] = answers;
  //  console.log(addressBook);
  showTable(addressBookLength);
   console.log("Lets just Update that!");
    editQuestions(0);
  });
   
}

createNewEntry(questions);

function showTable(entityIndex){
    
    var table = new Table({
                        head: ['Entry Attribute', 'Entry Value'],
                        colWidths: [25, 60],
                        chars: {'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗', 'bottom': '═' ,
                            'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝', 'right': '║' ,
                            'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼',
                            'right-mid': '╢' , 'middle': '│' },
                        //colAligns = [null, null, null, 'right'],
                        style: { 'padding-left': 1, 'padding-right': 1 }
    });
    
var entryName = [];
entryName[0] = "First name";
entryName[1] = addressBook.entries[entityIndex].firstName;

var entryLastName = [];
entryLastName[0] = "Last name";
entryLastName[1] = addressBook.entries[entityIndex].lastName;

var entryBirthday = [];
entryBirthday[0] = "Birthday";
entryBirthday[1] = addressBook.entries[entityIndex].birthDay;

    
    
var entryAddress =  [];
entryAddress[0] = "Addresses"
if(addressBook.entries[entityIndex].homeAddressLine1 !== undefined){
    entryAddress[1]= "home:\n"+addressBook.entries[entityIndex].homeAddressLine1+" "+addressBook.entries[entityIndex].homeAddressLine2+"\n"+addressBook.entries[entityIndex].homeCity+", "+addressBook.entries[entityIndex].homeProvince+" "+addressBook.entries[entityIndex].homePostalCode+"\n"+addressBook.entries[entityIndex].homeCountry;
}
if(addressBook.entries[entityIndex].workAddressLine1 !== undefined){
    entryAddress[1]+= "\n\nwork:\n"+addressBook.entries[entityIndex].workAddressLine1+addressBook.entries[entityIndex].workAddressLine2+"\n"+addressBook.entries[entityIndex].workCity+", "+addressBook.entries[entityIndex].workProvince+" "+addressBook.entries[entityIndex].workPostalCode+"\n"+addressBook.entries[entityIndex].workCountry;
}
if(addressBook.entries[entityIndex].otherAddressLine1 !== undefined){
    entryAddress[1]+= "\n\nother:\n"+addressBook.entries[entityIndex].otherAddressLine1+addressBook.entries[entityIndex].otherAddressLine2+"\n"+addressBook.entries[entityIndex].otherCity+", "+addressBook.entries[entityIndex].otherProvince+" "+addressBook.entries[entityIndex].otherPostalCode+"\n"+addressBook.entries[entityIndex].otherCountry;
}

var entryPhone = [];
entryPhone[0] = "Phones";
if(addressBook.entries[entityIndex].cellPhone !== undefined){
    entryPhone[1]= "cell: "+addressBook.entries[entityIndex].cellPhone;
}
if(addressBook.entries[entityIndex].homePhone !== undefined){
    entryPhone[1]+= "\nhome: "+addressBook.entries[entityIndex].homePhone;
}
if(addressBook.entries[entityIndex].faxPhone !== undefined){
    entryPhone[1]+= "\nfax: "+addressBook.entries[entityIndex].faxPhone;
}
if(addressBook.entries[entityIndex].otherPhone !== undefined){
    entryPhone[1]+= "\nother: "+addressBook.entries[entityIndex].otherPhone;
}    

var entryEmail = [];
entryEmail[0] = "Emails";
if(addressBook.entries[entityIndex].homeEmail !== undefined){
    entryEmail[1]= "home: "+addressBook.entries[entityIndex].homeEmail;
}
if(addressBook.entries[entityIndex].workEmail !== undefined){
    entryEmail[1]+= "\nwork: "+addressBook.entries[entityIndex].workEmail;
}
if(addressBook.entries[entityIndex].otherEmail !== undefined){
    entryEmail[1]+= "\nother: "+addressBook.entries[entityIndex].otherEmail;
}
                       
    table.push( 
        entryName,
        entryLastName,
        entryBirthday,
        entryAddress,
        entryPhone,
        entryEmail
    );
    console.log(table.toString());
   
}


// function showEditTable(entityIndex){
    
//     var table = new Table({
                        
//                     chars: {'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗', 'bottom': '═' ,
//                             'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝', 'right': '║' ,
//                             'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼',
//                             'right-mid': '╢' , 'middle': '│' }
//     });
    
                       
//     table.push( 
//         ["First Name", addressBook.entries[entityIndex].editFirstName],
//         ["Last Name", addressBook.entries[entityIndex].editLastName],
//         ["Birthday", addressBook.entries[entityIndex].editBirthday],
//         ["Addresses", addressBook.entries[entityIndex].editHomeAddress +"\n"+addressBook.entries[entityIndex].editCity+", "+addressBook.entries[entityIndex].editProvince+" "+addressBook.entries[entityIndex].editPostalCode+"\n"+addressBook.entries[entityIndex].editCountry],
//         ["Phones", addressBook.entries[entityIndex].editPhoneNumber],
//         ["Emails", addressBook.entries[entityIndex].editEmail]
//     );
//     console.log(table.toString());
   
// }



function editQuestions(editIndex){
  
var questions = [
    {
    type: "string",
    name: "firstName",
    message: "First name?"
},
    {
    type: "string",
    name: "lastName",
    message: "Last name?"
},
    {
    type: "string",
    name: "birthDay",
    message: "Birth Day?"
},
    {
    type: "checkbox",
    name: "addressType",
    message: "Home, Work, or other Address?",
    choices: ["home","work", "other"]
},
    {
    type: "string",
    name: "homeAddressLine1",
    message: "Address Line (home)?",
    when: function (answers){
    //    console.log(answers.addressType);
        for (var i in answers.addressType){
            if(answers.addressType[i]==="home") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "homeAddressLine2",
    message: "Address Line 2 (optional)?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="home") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "homeCity",
    message: "City?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="home") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "homeProvince",
    message: "Province?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="home") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "homePostalCode",
    message: "Postal Code?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="home") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "homeCountry",
    message: "Country?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="home") return true;
        }
        return false;
    }
},

    {
    type: "string",
    name: "workAddressLine1",
    message: "Address Line (work)?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="work") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "workAddressLine2",
    message: "Address Line (optional)?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="work") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "workCity",
    message: "City?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="work") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "workProvince",
    message: "Province?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="work") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "workPostalCode",
    message: "Postal Code?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="work") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "workCountry",
    message: "Country?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="work") return true;
        }
        return false;
    }
},

    {
    type: "string",
    name: "otherAddressLine1",
    message: "Address Line (other)?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="other") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "otherAddressLine2",
    message: "Address Line (optional)?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="other") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "otherCity",
    message: "City?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="other") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "otherProvince",
    message: "Province?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="other") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "otherPostalCode",
    message: "Postal Code?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="other") return true;
        }
        return false;
    }
},
    {
    type: "string",
    name: "otherCountry",
    message: "Country?",
    when: function (answers){
        for (var i in answers.addressType){
            if(answers.addressType[i]==="other") return true;
        }
        return false;
    }
},

    {
    type: "checkbox",
    name: "phoneType",
    message: "Cell, Home, Fax, or other phone numbers?",
    choices: ["cell", "home","fax", "other"]
},




    {
    type: "string",
    name: "cellPhone",
    message: "Phone Number (cell)?",
    when: function (answers){
     //   console.log(answers.phoneType);
        for (var i in answers.phoneType){
            if(answers.phoneType[i]==="cell") return true;
        }
        return false;
    }
},


    {
    type: "string",
    name: "homePhone",
    message: "Phone Number (home)?",
        when: function (answers){
        for (var i in answers.phoneType){
            if(answers.phoneType[i]==="home") return true;
        }
        return false;
    }
},


    {
    type: "string",
    name: "faxPhone",
    message: "Phone Number (fax)?",
        when: function (answers){
        for (var i in answers.phoneType){
            if(answers.phoneType[i]==="fax") return true;
        }
        return false;
    }
},


    {
    type: "string",
    name: "otherPhone",
    message: "Phone Number (other)?",
        when: function (answers){
        for (var i in answers.phoneType){
            if(answers.phoneType[i]==="other") return true;
        }
        return false;
    }
},


    {
    type: "checkbox",
    name: "emailType",
    message: "Home or Work email Address?",
    choices: ["home","work","other"]
},
    {
    type: "string",
    name: "homeEmail",
    message: "Email Address (home)?",
        when: function (answers){
     //       console.log(answers.emailType);
        for (var i in answers.emailType){
            if(answers.emailType[i]==="home") return true;
        }
        return false;
    }
},


    {
    type: "string",
    name: "workEmail",
    message: "Email Address (work)?",
            when: function (answers){
        for (var i in answers.emailType){
            if(answers.emailType[i]==="work") return true;
        }
        return false;
    }
},


    {
    type: "string",
    name: "otherEmail",
    message: "Email Address (other)?",
            when: function (answers){
        for (var i in answers.emailType){
            if(answers.emailType[i]==="other") return true;
        }
        return false;
    }
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
    showTable(addressBookLength);
    if(editIndex !== undefined){

      addressBook.entries.splice(editIndex,1);
   //   console.log(addressBook.entries[editIndex]);
    }
  });
    
}

