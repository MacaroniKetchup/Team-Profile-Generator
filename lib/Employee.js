// Employee class with constructor function
class Employee {
    constructor (name, idNo, email) {
        this.name = name;
        this.idNo = idNo;
        this.email = email;
    }

    getName () {
        return this.name;
    }

    getIdNo () {
        return this.idNo;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee';
    }
}

module.exports = Employee;