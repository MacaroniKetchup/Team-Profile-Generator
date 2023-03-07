const Employee = require('./Employee');

class Intern extends Employee {
    constuctor(name, idNo, email, github) {
        super (name, idNo, email, github);
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