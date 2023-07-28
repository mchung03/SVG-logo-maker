const {Square, Circle, Triangle} = require("./shapes.js")

describe("Test for Square shape", () => {
    test("square render method", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect x="0" y="0" width="250" height="250" fill="blue"/>`);
    })
})

describe("Test for Circle shape", () => {
    test("circle render method", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<circle xmlns="http://www.w3.org/2000/svg" cx="125" cy="110" r="80" fill="blue"/>`);
    })
})

describe("Test for Triangle shape", () => {
    test("triangle render method", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon points="125, 0 0, 200 250, 200" fill="blue"/>`);
    })
})
