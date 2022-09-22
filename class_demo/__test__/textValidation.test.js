// STEP 0: Make sure you export the functions in your main file
// STEP 1: Import function you want to test
// What function do I want to test?
const {
    generateText,
    validateText,
    validateAndReturn,
} = require("../textValidation");

// Unit Test generateText
// What is the expected behavior of the function? What is the expected output?

it("should output dogName and breed string", () => {
    // assertion/your test case 
    expect(generateText("Ted", "Spaniel-Beagle")).toBe("Ted is a Spaniel-Beagle")
    //toBe is a matcher. 
});

//test("outputs dogName and breed string", () => {
    // assertion or your test case
//})

//test() and it() behave the same. it() has better readability. 

// Unit test for validateText

// Group related testcases (for the same function for example)

describe("validateText works", () => {
    //think about what you need to test => inputs to f
    // check if the function returns true or false
    // check output when we input a string => true
    it("should output true when given a string input", () => {
        const dogName = "Fido";
        expect(validateText(dogName)).toBe(true);
    });

    // check output when we input a number => false
        it("should output false when a number input is provided", () => {
    expect(validateText(5)).toBe(false);
    }); 
});

//validateAndReturn = integration test

describe("validateAndReturn works", () => {
    it("outputs dog name and breed", () => {
        expect(validateAndReturn("Ted", "Spaniel-Beagle")).toBe("Ted is a Spaniel-Beagle");
    });
    expect(validateAndReturn(5, 6)).toBe("Text not valid");
});
