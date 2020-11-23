const Employee = require('./Employee');


class Manager extends Employee{
    constructor(name, id, email, officeNo){
        super(name, id, email);
        this.officeNo = officeNo;
        this.role = "Manager"
    };

    getOfficeNo(){
        return this.officeNo;
    };
 
    getRole(){
        return this.role;
    };


}

module.exports = Manager;

