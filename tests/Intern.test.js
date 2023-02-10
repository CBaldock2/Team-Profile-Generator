const Intern = require('../lib/intern');

// Tests all of the intern class
describe('Intern class', () => {

    // Tests that the new intern class was created
    describe('Create new intern obj', () => {
        it('Should create a new intern obj', () => {
            const intern = new Intern('Emma', 2005, 'emmalemma@hotmail.com','Tarleton state University');

            expect(intern.name).toBe('Emma');
            expect(intern.id).toEqual(expect.any(Number));
            expect(intern.email).toEqual(expect.any(String));
            expect(intern.school).toEqual(expect.any(String));
        });
    });

    // Tests getSchool
    describe('getSchool', () => {
        it('Should return the intern\s school', () => {
            const intern = new Intern('Emma', 2005, 'emmalemma@hotmail.com', 'Tarleton state University');

            expect(intern.getSchool()).toEqual(expect.any(String));
        });
    });

    // Tests getRole
    describe('getRole', () => {
        it('Should return the Intern\'s role', () => {
            const intern = new Intern('Emma', 2005, 'emmalemma@hotmail.com', 'Tarleton state University');

            expect(intern.getRole()).toEqual('Intern');
        });
    });
});