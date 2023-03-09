const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, idNo, email, officeNum) {
        super (name, idNo, email);
        this.officeNum = officeNum;
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole () {
        return 'Manager';
    }
}

module.exports = Manager;