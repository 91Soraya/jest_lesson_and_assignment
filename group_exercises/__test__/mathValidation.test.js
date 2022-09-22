const {
    add, 
    sub, 
    mult, 
    div,
} = require("../math");

//Test add

it("should be the sum of x and y", () => {
    expect(add(3, 8)).toBe(11);
});

//Test sub

it("should be x minus y", () => {
    expect(sub(8, 3)).toBe(5);
});

//Test mult

it("should output x multiplied by y", () => {
    expect(mult(8, 3)).toBe(24);
});

//Test div

describe("div function works", () => {
it("should output x divided by y", () => {
    expect(div(15, 5)).toBe(3);
});

it("should output error when y is 0", () => {
    expect(() => {
        div(5, 0);
    }).toThrowError("Can't divide by 0");
});
});