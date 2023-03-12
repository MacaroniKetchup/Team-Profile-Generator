const Employee = require('../lib/Employee')
// Test for create new employee
test('Should create new employee.', () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe('object');
})
// Test name input
test('Input name.', () => {
    const name = 'Cory';
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
})
// Testing ID number input
test('Input ID.', () => {
    const idNo = 2
    const newEmployee = new Employee('Cory', idNo);
    expect(newEmployee.idNo).toBe(idNo);
})
// Test Email input
test('Input Email.', () => {
    const email = 'stylesthestyer@gmail.com';
    const newEmployee = new Employee ('Cory', 2, email);
    expect(newEmployee.email).toBe(email);
})
// Test getName
test("Gets name through getName method.", () => {
    const testName = "Cory";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})
// Test getIdNo
test("Can test ID through getIdNo method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Cory", testID);
    expect(employeeInstance.getIdNo()).toBe(testID);
})
// Test getEmail
test("Can test email through getEmail method.", () => {
    const testEmail = "stylesthestyer@gmail.com";
    const employeeInstance = new Employee("Cory", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})
// Test getRole
test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Cory", 2, "stylesthestyer@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})