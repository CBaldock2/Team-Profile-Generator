const Employee = require('../lib/employee');

// Tests all of the Employee class
describe('Employee class', () => {
    // Tests that the Employee object is created
    describe('Create new employee obj', () => {
        it('Should create a new employee obj', () => {
            const employee = new Employee('Chris', 1001, 'someOne@aol.com');

            expect(employee.name).toBe('Chris');
            expect(employee.id).toBe(1001);
            expect(employee.email).toBe('someOne@aol.com');
        });
    });

    // Tests getName
    describe('getName', () => {
        it('should return the employee\'s name', () => {
            const employee = new Employee('Chris', 1001, 'someOne@aol.com');

            expect(employee.getName()).toEqual('Chris');
        });
    });

    // Tests getId
    describe('getId', () => {
        it('should return the employee\'s id', () => {
            const employee = new Employee('Chris', 1001, 'someOne@aol.com');

            expect(employee.getId()).toEqual(1001)
        });
    });

    // Tests getEmail
    describe('getEmail', () => {
        it('should return the employee\'s email', () => {
            const employee = new Employee('Chris', 1001, 'someOne@aol.com');

            expect(employee.getEmail()).toEqual('someOne@aol.com');
        });
    });

    // Tests getRole
    describe('getRole', () => {
        it('should return the the employee\'s role', () => {
            const employee = new Employee('Chris', 1001, 'someOne@aol.com');

            expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
        });
    });
});