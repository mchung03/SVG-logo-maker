const {Square, Circle, Triangle} = require("./shapes.js")

describe("Test for Square shape", () => {
    test("square render method", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect x="50" y="0" width="200" height="200" fill="blue"/>`);
    })
})

describe("Test for Circle shape", () => {
    test("circle render method", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="100" fill="blue"/>`);
    })
})

describe("Test for Triangle shape", () => {
    test("triangle render method", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon points="150, 0 0, 200 300, 200" fill="blue"/>`);
    })
})
