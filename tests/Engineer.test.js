const Engineer = require('../lib/engineer');

// Tests all of the Engineer class
describe('Engineer class', () => {
    // Tests that the Engineer class was created
    describe('Create new engineer obj', () => {
        it('should create a new engineer obj', () => {
            const engineer = new Engineer('Sara', 1097, 'Hello@gmail.com', 'Saracha');

            expect(engineer.name).toBe('Sara');
            expect(engineer.id).toBe(1097);
            expect(engineer.email).toBe('Hello@gmail.com');
            expect(engineer.github).toBe('Saracha');
        });
    });

    // Tests getGithub 
    describe('getGithub', () => {
        it('Should return the engineer\'s github username', () => {
            const engineer = new Engineer('Sara', 1097, 'Hello@gmail.com', 'Saracha');

            expect(engineer.getGithub()).toEqual(expect.any(String));
        });
    });

    // Tests getRole
    describe('getRole', () => {
        it('Should return the engineer\'s role of Engineer', () => {
            const engineer = new Engineer('Sara', 1097, 'Hello@gmail.com', 'Saracha');

            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});