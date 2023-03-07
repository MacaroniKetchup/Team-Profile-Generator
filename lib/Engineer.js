const Employee = require('./Employee');
// Engineer Class that extends a constuctor function off of the Employee Class
class Engineer extends Employee {
    constructor (name, idNo, github) {
        super (name, idNo, email);
        this.github = github;
    }

   getGithub() {
    return this.github;
   } 

   getRole() {
    return 'Engineer';
   }
}

module.exports = Engineer;