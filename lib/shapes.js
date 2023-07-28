// Create Shape class, extends to triangle, circle, square
// Export triangle, circle, square classes
class SVG {
    constructor(shape, text) {
        this.shape = shape;
        this.text = text;
    }

    render() {
       return  `
        <svg width="250" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
            ${this.shape.render()}
            ${this.text.render()}
        </svg>`
    }
}

class Text {
    constructor(textColor, content) {
        this.textColor = textColor;
        this.content = content;
    }

    render() {
        return `<text xmlns="http://www.w3.org/2000/svg" x="125" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.content}</text>`
    }
}

class Shape {
    // properties
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    setColor(newColor) {
        this.shapeColor = newColor;
    }
}



// class Triangle extends Shape {

// }

// class Circle extends Shape {

// }

class Square extends Shape {
    render() {
        return `<rect x="0" y="0" width="250" height="250" fill="${this.shapeColor}" />
        `
    }
}

// const myShape = new Square("blueviolet");
// myShape.setColor("blue")
// const myText = new Text("red", "AB")
// console.log(myShape.render())
// const mySVG = new SVG(myShape, myText)
// console.log(mySVG.render())

module.exports = {SVG, Text, Square}
// other shapes too