const Intern = require('../lib/Intern');


test("Test the Intern", () => {
    intern = new Intern("Stine",20, "stine@npm.com", "caltech");

    expect(intern.getRole()).toBe("Intern")
    expect(intern.getSchool()).toEqual(expect.any(String));
    
});