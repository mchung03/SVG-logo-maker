// Test each shape class for render method
    // refer to act 11-12
const {Square} = require("./shapes.js")

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe("Test for Square shape", () => {
    test("square render method", () => {
        // test values
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect x="0" y="0" width="250" height="250" fill="blue"`);
    })
})
