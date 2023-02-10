const Manager = require('../lib/manager');

// Tests all of the manager class
describe('Manager class', () => {

    // Tests that a new manager class was created
    describe('Create a new manager obj', () => {
        it('Should create a new manager obj', () => {
            const manager = new Manager('Chris', 1001, 'someOne@aol.com', 1000);

            expect(manager.name).toBe('Chris');
            expect(manager.id).toEqual(expect.any(Number));
            expect(manager.email).toEqual(expect.any(String));
            expect(manager.office).toEqual(expect.any(Number));
        });
    });

    // Tests getRole
    describe('getRole', () => {
        it('Should return the manager\'s role', () => {
            const manager = new Manager('Chris', 1001, 'someOne@aol.com', 1000);

            expect(manager.getRole()).toEqual('Manager');
        });
    });
});