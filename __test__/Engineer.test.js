const Engineer = require('../lib/Engineer');


test("Test the engineer", () => {
    engineer = new Engineer("Dave", 2, "dave@npm.com", "github.com/dave");

    expect(engineer.getRole()).toBe("Engineer")
    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe("Engineer");
    

});