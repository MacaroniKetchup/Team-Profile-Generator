const Engineer = require('../lib/Manager');
// Testing github input for Manager
test('gets to input github.', () => {
    const officeNumTest = 2;
    const newEmployee = new Manager('Cory', 2, 'stylesthestyer@gmail.com', officeNumTest);
    expect(newEmployee.officeNum).toBe(officeNumTest);
});
// Testing if officeNumTest will return github
test('officeNumTest to return github', () => {
    const officeNumTest = 2;
    const newEmployee = new Manager('Cory', 2, 'stylesthestyer@gmail.com', officeNumTest);
    expect(newEmployee.getOfficeNum()).toBe(officeNumTest);
});
// Testing for the Manager Value
test('testing Manager role', () => {
    const valueReturn = 'Manager';
    const newEmployee = new Manager('Cory', 2, 'stylesthestyer@gmail.com', 2);
    expect(newEmployee.getRole()).toBe(valueReturn);
});