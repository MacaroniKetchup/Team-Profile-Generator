const Employee = require("./Employee");

class Intern extends Employee {
    constuctor(name, idNo, github) {
        super(name, idNo, email,);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;