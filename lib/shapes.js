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

class Square extends Shape {
    render() {
        return `<rect x="0" y="0" width="250" height="250" fill="${this.shapeColor}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="125 0 0, 200 250, 196" fill="${this.shapeColor}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle xmlns="http://www.w3.org/2000/svg" cx="125" cy="110" r="80" fill="${this.shapeColor}"/>`
    }
}

module.exports = {SVG, Text, Square, Circle, Triangle}