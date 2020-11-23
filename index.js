const inquirer = require('inquirer');
//const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template.js');
const {writeFile, copyFile} = require('./utils/file-ops');

// Questions batch for basic Emplyee
// Prompt emloyee name id and email - Emplyee is input as default argument returns a promise
const employeeQuestons = (employeeType) => { 
    return[
    {
    
        type: 'input',
        name: 'name',
        message: `Please Enter ${employeeType} Name`,
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log(" // Please enter a name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please Enter an emplyee ID',
        validate: nameInput => {
            if(isNaN(nameInput) || nameInput === ''){
                console.log(" // Please enter an ID (must be a number)");
                return false;
            } else {
                
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Employee Email (Required)',
        validate: nameInput => {
            validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(nameInput); //regex test for valid email
            if(validemail){
                return true;
          } else {
            console.log(" // Please enter a email address");
            return false;
          }
        }
    },  
]};



// Prompt for the manager using combined managerEmplyeeitems - returns a promise od a object constinin an manager
const promptTeam = () => {
    empQuestions = employeeQuestons("Manager")
    // Additional questions 
    manQuestions = [
        {
            type:'input',
            name: "managerOfficeNumber",
            message: "Manager Office No?",
            default: "No office added for now" 
        }             
    ]
    
    questions = empQuestions.concat(manQuestions);  
    return inquirer.prompt(questions)
   
};


// Prompt for the engineer specific items - returns a promise
const promptEngineer = () =>{   
    empQuestions = employeeQuestons("Engineer")
    // Additional questions
    engQuestions= [
        {
            type:'input',
            name: "github",
            message: "Github repo ?",
            validate: nameInput => {
                testgithub = /.+(github.com)\/(.+)\/(.*)/; //regex test if c-p url 
                if(testgithub){
                    return true;
                } else {
                    console.log("please enter a GitHub repo URL");
                    return false;
                }
            } 
        }
    ];

    questions = empQuestions.concat(engQuestions);
    return inquirer.prompt(questions);
};

// Prompt for the intern specific items - returns a promise
const promptIntern = () =>{
    // Additional questions
    empQuestions = employeeQuestons("Intern")
    intQuestions = [
        {
            type:'input',
            name: "school",
            message: "Enter intern's school",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log("Please enter a school for the intern");
                    return false;
                }
            }
        }
    ];

    questions = empQuestions.concat(intQuestions);
    return inquirer.prompt(questions);
};



//prompt for add team member
const addTeamMember = (members) =>  {
    if(!members){
        members = [];
    }


    inquirer.prompt([
        {
            type: 'confirm',
            name: 'comfirmAddMember',
            message: 'Add a team member?',
            default: true
        }
    ]).then(res =>{
        if(res.comfirmAddMember){
            inquirer.prompt(
                [
                  {
                    type: 'list',
                    name: 'teamMemberType',
                    message: 'Choose team member role:',
                    choices: ['Engineer', 'Intern']
                  }  
                ]).then(res => {
                    if(res.teamMemberType === "Engineer"){
                        promptEngineer().then(res =>{
                            const {name, id,email, github} = res // destructure res obj
                            colleague = new Engineer(name,id,email,github);
                            members.push(colleague)
                            
                            return addTeamMember(members);
                        })     
                    };
                    if(res.teamMemberType === "Intern"){
                        promptIntern().then(res =>{
                            const {name, id,email, school} = res // destructure res obj
                            colleague = new Intern(name,id,email,school);
                            members.push(colleague)
                            
                            return addTeamMember(members);
                        })     
                    };
                    
                });
        } else {
            
            // make the page and copy to index.html
            let html = generatePage(members);
        
            writeFile(html)
            return members; 
        }

       
     
    });

    
};



// Run the whole stack of prompting functions..
function init(){
    
     promptTeam()
    .then(result => {
        let {name,id,email,managerOfficeNumber} = result;
        
        // init the tam Array with a manager object
        manager = new Manager(name,id,email,managerOfficeNumber);
        addTeamMember([manager])
    });

};
    

init();


