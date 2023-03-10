const Intern = require('../lib/Intern');
// Testing school input for Intern
test('gets to input school.', () => {
    const testSchool = 'MacaroniKetchup';
    const newEmployee = new Intern('Cory', 2, 'stylesthestyer@gmail.com', testSchool);
    expect(newEmployee.school).toBe(testSchool);
});
// Testing if testSchool will return school
test('testSchool to return school', () => {
    const testSchool = 'MacaroniKetchup';
    const newEmployee = new Intern('Cory', 2, 'stylesthestyer@gmail.com', testSchool);
    expect(newEmployee.getSchool()).toBe(testSchool);
});
// Testing for the Intern Value
test('testing Intern role', () => {
    const valueReturn = 'Intern';
    const newEmployee = new Intern('Cory', 2, 'stylesthestyer@gmail.com', 'UofA');
    expect(newEmployee.getRole()).toBe(valueReturn);
});