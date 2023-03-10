const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, idNo, email, school) {
        super(name, idNo, email,);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;