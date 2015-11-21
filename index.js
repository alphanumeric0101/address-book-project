var inquirer = require("inquirer");
var Table = require('cli-table');
var count = 0;
var currentIndex;

// Begin with the prompt //////////////////////////////////////////////////////

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

// Initializing Function //////////////////////////////////////////////////////

function init() {
    inquirer.prompt(mainMenu, function(answers) {
        if (answers.main === "Create an entry") {
            createNewEntry(questions);
        }
        else if (answers.main === "Search existing entries") {
            searchEntries();
        }
        else {
            process.exit();
        }
    });
}

init();


// Begin Entry Adding section ///////////////////////////////////////////

var addressBook = {
    entries: []
};

var questions = [{
        type: "string",
        name: "firstName",
        message: "First name?"
    }, {
        type: "string",
        name: "lastName",
        message: "Last name?"
    }, {
        type: "string",
        name: "birthDay",
        message: "Birth Day?"
    }, {
        type: "checkbox",
        name: "addressType",
        message: "Home, Work, or other Address?",
        choices: ["home", "work", "other"]
    }, {
        type: "string",
        name: "homeAddressLine1",
        message: "Address Line (home)?",
        when: function(answers) {
            //   console.log(answers.addressType);
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "home") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "homeAddressLine2",
        message: "Address Line 2 (optional)?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "home") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "homeCity",
        message: "City?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "home") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "homeProvince",
        message: "Province?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "home") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "homePostalCode",
        message: "Postal Code?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "home") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "homeCountry",
        message: "Country?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "home") return true;
            }
            return false;
        }
    },

    {
        type: "string",
        name: "workAddressLine1",
        message: "Address Line (work)?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "work") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "workAddressLine2",
        message: "Address Line (optional)?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "work") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "workCity",
        message: "City?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "work") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "workProvince",
        message: "Province?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "work") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "workPostalCode",
        message: "Postal Code?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "work") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "workCountry",
        message: "Country?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "work") return true;
            }
            return false;
        }
    },

    {
        type: "string",
        name: "otherAddressLine1",
        message: "Address Line (other)?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "other") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "otherAddressLine2",
        message: "Address Line (optional)?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "other") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "otherCity",
        message: "City?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "other") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "otherProvince",
        message: "Province?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "other") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "otherPostalCode",
        message: "Postal Code?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "other") return true;
            }
            return false;
        }
    }, {
        type: "string",
        name: "otherCountry",
        message: "Country?",
        when: function(answers) {
            for (var i in answers.addressType) {
                if (answers.addressType[i] === "other") return true;
            }
            return false;
        }
    },

    {
        type: "checkbox",
        name: "phoneType",
        message: "Cell, Home, Fax, or other phone numbers?",
        choices: ["cell", "home", "fax", "other"]
    }, {
        type: "string",
        name: "cellPhone",
        message: "Phone Number (cell)?",
        when: function(answers) {
            //   console.log(answers.phoneType);
            for (var i in answers.phoneType) {
                if (answers.phoneType[i] === "cell") return true;
            }
            return false;
        }
    },

    {
        type: "string",
        name: "homePhone",
        message: "Phone Number (home)?",
        when: function(answers) {
            for (var i in answers.phoneType) {
                if (answers.phoneType[i] === "home") return true;
            }
            return false;
        }
    },

    {
        type: "string",
        name: "faxPhone",
        message: "Phone Number (fax)?",
        when: function(answers) {
            for (var i in answers.phoneType) {
                if (answers.phoneType[i] === "fax") return true;
            }
            return false;
        }
    },

    {
        type: "string",
        name: "otherPhone",
        message: "Phone Number (other)?",
        when: function(answers) {
            for (var i in answers.phoneType) {
                if (answers.phoneType[i] === "other") return true;
            }
            return false;
        }
    },

    {
        type: "checkbox",
        name: "emailType",
        message: "Home or Work email Address?",
        choices: ["home", "work", "other"]
    }, {
        type: "string",
        name: "homeEmail",
        message: "Email Address (home)?",
        when: function(answers) {
            //        console.log(answers.emailType);
            for (var i in answers.emailType) {
                if (answers.emailType[i] === "home") return true;
            }
            return false;
        }
    },


    {
        type: "string",
        name: "workEmail",
        message: "Email Address (work)?",
        when: function(answers) {
            for (var i in answers.emailType) {
                if (answers.emailType[i] === "work") return true;
            }
            return false;
        }
    },


    {
        type: "string",
        name: "otherEmail",
        message: "Email Address (other)?",
        when: function(answers) {
            for (var i in answers.emailType) {
                if (answers.emailType[i] === "other") return true;
            }
            return false;
        }
    }
];

function createNewEntry(questions) {

    inquirer.prompt(questions, function(answers) {

        var addressBookLength = addressBook.entries.length;
        addressBook.entries[addressBookLength] = answers;
        showTable(addressBookLength);

    });
};

// Showing the Table /////////////////////////////////////////////////////////

function showTable(entityIndex) {

    var table = new Table({
        head: ['Entry Attribute', 'Entry Value'],
        colWidths: [25, 60],
        chars: {
            'top': '═',
            'top-mid': '╤',
            'top-left': '╔',
            'top-right': '╗',
            'bottom': '═',
            'bottom-mid': '╧',
            'bottom-left': '╚',
            'bottom-right': '╝',
            'right': '║',
            'left': '║',
            'left-mid': '╟',
            'mid': '─',
            'mid-mid': '┼',
            'right-mid': '╢',
            'middle': '│'
        },
        //colAligns = [null, null, null, 'right'],
        style: {
            'padding-left': 1,
            'padding-right': 1
        }
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



    var entryAddress = [];
    entryAddress[0] = "Addresses"
    if (addressBook.entries[entityIndex].homeAddressLine1 !== undefined) {
        entryAddress[1] = "home:\n" + addressBook.entries[entityIndex].homeAddressLine1 + " " + addressBook.entries[entityIndex].homeAddressLine2 + "\n" + addressBook.entries[entityIndex].homeCity + ", " + addressBook.entries[entityIndex].homeProvince + " " + addressBook.entries[entityIndex].homePostalCode + "\n" + addressBook.entries[entityIndex].homeCountry;
    }
    if (addressBook.entries[entityIndex].workAddressLine1 !== undefined) {
        entryAddress[1] += "\n\nwork:\n" + addressBook.entries[entityIndex].workAddressLine1 + addressBook.entries[entityIndex].workAddressLine2 + "\n" + addressBook.entries[entityIndex].workCity + ", " + addressBook.entries[entityIndex].workProvince + " " + addressBook.entries[entityIndex].workPostalCode + "\n" + addressBook.entries[entityIndex].workCountry;
    }
    if (addressBook.entries[entityIndex].otherAddressLine1 !== undefined) {
        entryAddress[1] += "\n\nother:\n" + addressBook.entries[entityIndex].otherAddressLine1 + addressBook.entries[entityIndex].otherAddressLine2 + "\n" + addressBook.entries[entityIndex].otherCity + ", " + addressBook.entries[entityIndex].otherProvince + " " + addressBook.entries[entityIndex].otherPostalCode + "\n" + addressBook.entries[entityIndex].otherCountry;
    }

    var entryPhone = [];
    entryPhone[0] = "Phones";
    if (addressBook.entries[entityIndex].cellPhone !== undefined) {
        entryPhone[1] = "cell: " + addressBook.entries[entityIndex].cellPhone;
    }
    if (addressBook.entries[entityIndex].homePhone !== undefined) {
        entryPhone[1] += "\nhome: " + addressBook.entries[entityIndex].homePhone;
    }
    if (addressBook.entries[entityIndex].faxPhone !== undefined) {
        entryPhone[1] += "\nfax: " + addressBook.entries[entityIndex].faxPhone;
    }
    if (addressBook.entries[entityIndex].otherPhone !== undefined) {
        entryPhone[1] += "\nother: " + addressBook.entries[entityIndex].otherPhone;
    }

    var entryEmail = [];
    entryEmail[0] = "Emails";
    if (addressBook.entries[entityIndex].homeEmail !== undefined) {
        entryEmail[1] = "home: " + addressBook.entries[entityIndex].homeEmail;
    }
    if (addressBook.entries[entityIndex].workEmail !== undefined) {
        entryEmail[1] += "\nwork: " + addressBook.entries[entityIndex].workEmail;
    }
    if (addressBook.entries[entityIndex].otherEmail !== undefined) {
        entryEmail[1] += "\nother: " + addressBook.entries[entityIndex].otherEmail;
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
    init();
}

// Creation function ////////////////////////////////////////////////////////

function createNewEntry(questions) {

    inquirer.prompt(questions, function(answers) {

        var addressBookLength = addressBook.entries.length;
        addressBook.entries[addressBookLength] = answers;
        showTable(addressBookLength);
    });
}
///////////////////////////////////////////////////////////////////////////////
// Editing Options /////////////////////////////////////////////////// Editing Options
///////////////////////////////////////////////////////////////////////////////
var editMenu = [{
    type: "list",
    name: "edit",
    message: "What would you like to do",
    choices: [{
        name: "Edit this entry",
        value: 1
    }, {
        name: "Delete this entry",
        value: 0
    }, {
        name: "Go to main menu"
    }]
}];

var areYouSure = [{
    type: "confirm",
    name: "lastChance",
    message: "Are you sure?",
}];


function editOptions() {
    inquirer.prompt(editMenu, function(answers) {
        if (answers.edit === 1) {
            editQuestions(currentIndex);
        }
        else if (answers.edit === 0) {
            inquirer.prompt(areYouSure, function(answers) {
                if (answers.lastChance) {
                    delete addressBook.entries[currentIndex];
                    console.log('Entry Deleted');
                    init();
                }
                else {
                    callEditOptions();
                }
            });
        }
        else {
            init();
        }
    });
}

/////////////////////////////////////////////////////////////////////////////////
// Start Search Section ///////////////////////////////////////////////////SEARCH
/////////////////////////////////////////////////////////////////////////////////
var query = [{
    type: "input",
    name: "find",
    message: "Enter search term:"
}];

function searchEntries() {
    inquirer.prompt(query, function(answers) {
        var total = addressBook.entries.length;
        var matches = [];
        var matchesInd = [];
        var resultsObj = [];
        for (var i = 0; i < total; i++) {
            if (
                (addressBook.entries[i]) &&
                addressBook.entries[i].firstName.toLowerCase().indexOf(answers.find.toLowerCase()) !== -1 || addressBook.entries[i].lastName.toLowerCase().indexOf(answers.find.toLowerCase()) !== -1 || (addressBook.entries[i].emailType[0] !== undefined && addressBook.entries[i].emailType[0].toLowerCase().indexOf(answers.find.toLowerCase()) !== -1) || (addressBook.entries[i].emailType[1] !== undefined && addressBook.entries[i].emailType[1].toLowerCase().indexOf(answers.find.toLowerCase()) !== -1) || (addressBook.entries[i].emailType[2] !== undefined && addressBook.entries[i].emailType[2].toLowerCase().indexOf(answers.find.toLowerCase()) !== -1)
            ) {
                matches.push(addressBook.entries[i]);
                matchesInd.push(i);
            }
        }
        if (matches.length === 0) {
            console.log('There were no matches');
        }

        for (var j = 0; j < matches.length; j++) {
            resultsObj[j] = matches[j].firstName + ' ' + matches[j].lastName;
            resultsObj.sort();
        }

        var resultsMenu = [{
            type: "list",
            name: "res",
            message: "Results:",
            choices: [{
                name: "Do another search"
            }, {
                name: "Main menu"
            }]
        }];

        for (var p = 0; p < resultsObj.length; p++) {
            resultsMenu[0].choices.unshift(resultsObj[p]);
        }

        inquirer.prompt(resultsMenu, function(answers) {
            if (answers.res === "Do another search") {
                callSearchEntries();
            }
            else if (answers.res === "Main menu") {
                init();
            }
            else {
                for (var k = 0; k < matches.length; k++) {
                    var savedInd = matchesInd[k];
                    if (answers.res === matches[k].firstName + ' ' + matches[k].lastName) {
                        currentIndex = savedInd;
                        showTable2(savedInd);
                    }
                }
            }
        });
    });
}

//Utility functions ////////////////////////////////////////////////////////////

function callSearchEntries() {
    searchEntries();
}

function callEditOptions() {
    editOptions();
}

// Show table without returning to INIT ////////////////////////////////////////

function showTable2(entityIndex) {

    var table = new Table({

        chars: {
            'top': '═',
            'top-mid': '╤',
            'top-left': '╔',
            'top-right': '╗',
            'bottom': '═',
            'bottom-mid': '╧',
            'bottom-left': '╚',
            'bottom-right': '╝',
            'right': '║',
            'left': '║',
            'left-mid': '╟',
            'mid': '─',
            'mid-mid': '┼',
            'right-mid': '╢',
            'middle': '│'
        }
    });

    table.push(
        ["First Name", addressBook.entries[entityIndex].firstName], ["Last Name", addressBook.entries[entityIndex].lastName], ["Birthday", addressBook.entries[entityIndex].birthDay], ["Addresses", addressBook.entries[entityIndex].addressLine + "\n" + addressBook.entries[entityIndex].city + ", " + addressBook.entries[entityIndex].province + " " + addressBook.entries[entityIndex].postalCode + "\n" + addressBook.entries[entityIndex].country], ["Phones", addressBook.entries[entityIndex].phoneType + ": " + addressBook.entries[entityIndex].phoneNumber], ["Emails", addressBook.entries[entityIndex].emailType + ": " + addressBook.entries[entityIndex].emailAddress]
    );
    console.log(table.toString());

    //console.log(addressBook.entries[count].firstName + addressBook.entries[count].lastName + ' has been Saved');
    count += 1;
    callEditOptions();
}
///////////////////////////////////////////////////////////////////////////////
// Edit entry section /////////////////////////////////////////////Edit Entry
///////////////////////////////////////////////////////////////////////////////

function editQuestions(editIndex) {

    var questions = [{
            type: "string",
            name: "firstName",
            message: "First name?"
        }, {
            type: "string",
            name: "lastName",
            message: "Last name?"
        }, {
            type: "string",
            name: "birthDay",
            message: "Birth Day?"
        }, {
            type: "checkbox",
            name: "addressType",
            message: "Home, Work, or other Address?",
            choices: ["home", "work", "other"]
        }, {
            type: "string",
            name: "homeAddressLine1",
            message: "Address Line (home)?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "home") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "homeAddressLine2",
            message: "Address Line 2 (optional)?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "home") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "homeCity",
            message: "City?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "home") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "homeProvince",
            message: "Province?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "home") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "homePostalCode",
            message: "Postal Code?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "home") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "homeCountry",
            message: "Country?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "home") return true;
                }
                return false;
            }
        },

        {
            type: "string",
            name: "workAddressLine1",
            message: "Address Line (work)?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "work") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "workAddressLine2",
            message: "Address Line (optional)?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "work") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "workCity",
            message: "City?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "work") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "workProvince",
            message: "Province?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "work") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "workPostalCode",
            message: "Postal Code?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "work") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "workCountry",
            message: "Country?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "work") return true;
                }
                return false;
            }
        },

        {
            type: "string",
            name: "otherAddressLine1",
            message: "Address Line (other)?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "other") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "otherAddressLine2",
            message: "Address Line (optional)?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "other") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "otherCity",
            message: "City?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "other") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "otherProvince",
            message: "Province?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "other") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "otherPostalCode",
            message: "Postal Code?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "other") return true;
                }
                return false;
            }
        }, {
            type: "string",
            name: "otherCountry",
            message: "Country?",
            when: function(answers) {
                for (var i in answers.addressType) {
                    if (answers.addressType[i] === "other") return true;
                }
                return false;
            }
        },

        {
            type: "checkbox",
            name: "phoneType",
            message: "Cell, Home, Fax, or other phone numbers?",
            choices: ["cell", "home", "fax", "other"]
        },
        {
            type: "string",
            name: "cellPhone",
            message: "Phone Number (cell)?",
            when: function(answers) {
                //   console.log(answers.phoneType);
                for (var i in answers.phoneType) {
                    if (answers.phoneType[i] === "cell") return true;
                }
                return false;
            }
        },
        {
            type: "string",
            name: "homePhone",
            message: "Phone Number (home)?",
            when: function(answers) {
                for (var i in answers.phoneType) {
                    if (answers.phoneType[i] === "home") return true;
                }
                return false;
            }
        },
        {
            type: "string",
            name: "faxPhone",
            message: "Phone Number (fax)?",
            when: function(answers) {
                for (var i in answers.phoneType) {
                    if (answers.phoneType[i] === "fax") return true;
                }
                return false;
            }
        },
        {
            type: "string",
            name: "otherPhone",
            message: "Phone Number (other)?",
            when: function(answers) {
                for (var i in answers.phoneType) {
                    if (answers.phoneType[i] === "other") return true;
                }
                return false;
            }
        },
        {
            type: "checkbox",
            name: "emailType",
            message: "Home or Work email Address?",
            choices: ["home", "work", "other"]
        }, {
            type: "string",
            name: "homeEmail",
            message: "Email Address (home)?",
            when: function(answers) {
                //       console.log(answers.emailType);
                for (var i in answers.emailType) {
                    if (answers.emailType[i] === "home") return true;
                }
                return false;
            }
        },
        {
            type: "string",
            name: "workEmail",
            message: "Email Address (work)?",
            when: function(answers) {
                for (var i in answers.emailType) {
                    if (answers.emailType[i] === "work") return true;
                }
                return false;
            }
        },
        {
            type: "string",
            name: "otherEmail",
            message: "Email Address (other)?",
            when: function(answers) {
                for (var i in answers.emailType) {
                    if (answers.emailType[i] === "other") return true;
                }
                return false;
            }
        }
    ];
    
    editEntry(questions, editIndex);
}

function editEntry(questions, editIndex) {

    inquirer.prompt(questions, function(answers) {

        var addressBookLength = addressBook.entries.length;
        addressBook.entries[addressBookLength] = answers;

        showTable(addressBookLength);
        if (editIndex !== undefined) {

            addressBook.entries.splice(editIndex, 1);
        }
    });
}