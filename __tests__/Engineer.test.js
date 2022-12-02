const Engineer = require('./lib/Engineer');

//Test - creates engineer object with name, id, email, and github username properties
describe('Engineer', () => {
    it('should create an engineer object with name, id, email, and github properties', () => {
        const engineer = new Engineer('name', 1, 'email', "github");

        expect(typeof engineer.github).toBe('string');

    });
});

//Test - gets GitHub username - expect a string
test('getGithub', () => {
    const engineer = new Engineer('name', 1, 'email', "github");
    expect(typeof engineer.github).toBe('string');
});

//Test - gets role - overrides to return engineer - expect to be engineer
test('getRole', () => {
    const engineer = new Engineer('name', 1, 'email', "github");
    const role = jest.fn(engineer => engineer.role);

    role(engineer);
    expect(role).toHaveReturnedWith('Engineer');
});