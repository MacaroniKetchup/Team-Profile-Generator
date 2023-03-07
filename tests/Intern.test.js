const Engineer = require('../lib/Intern');
// Testing github input for Intern
test('gets to input github.', () => {
    const gitHubTest = 'MacaroniKetchup';
    const newEmployee = new Intern('Cory', 2, 'stylesthestyer@gmail.com', gitHubTest);
    expect(newEmployee.github).toBe(gitHubTest);
});
// Testing if gitHubTest will return github
test('gitHubTest to return github', () => {
    const gitHubTest = 'MacaroniKetchup';
    const newEmployee = new Intern('Cory', 2, 'stylesthestyer@gmail.com', gitHubTest);
    expect(newEmployee.getGitHub()).toBe(gitHubTest);
});
// Testing for the Intern Value
test('testing Intern role', () => {
    const valueReturn = 'Intern';
    const newEmployee = new Intern('Cory', 2, 'stylesthestyer@gmail.com', 'MacaroniKetchup');
    expect(newEmployee.getRole()).toBe(valueReturn);
});