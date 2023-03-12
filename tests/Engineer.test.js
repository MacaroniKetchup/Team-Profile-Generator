const Engineer = require('../lib/Engineer');
// Testing github input for Engineer
test('gets to input github.', () => {
    const gitHubTest = 'MacaroniKetchup';
    const newEmployee = new Engineer('Cory', 2, 'stylesthestyer@gmail.com', gitHubTest);
    expect(newEmployee.github).toBe(gitHubTest);
});
// Testing if gitHubTest will return github
test('gitHubTest to return github', () => {
    const gitHubTest = 'MacaroniKetchup';
    const newEmployee = new Engineer('Cory', 2, 'stylesthestyer@gmail.com', gitHubTest);
    expect(newEmployee.getGithub()).toBe(gitHubTest);
});
// Testing for the Engineer Value
test('testing Engineer role', () => {
    const valueReturn = 'Engineer';
    const newEmployee = new Engineer('Cory', 2, 'stylesthestyer@gmail.com', 'MacaroniKetchup');
    expect(newEmployee.getRole()).toBe(valueReturn);
});