// Create Shape class, extends to triangle, circle, square
class SVG {
    constructor(shape, text) {
        this.shape = shape;
        this.text = text;
    }
    render() {
       return  `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
        return `<text xmlns="http://www.w3.org/2000/svg" x="150" y="100" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.content}</text>`
    }
}

class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    setColor(newColor) {
        this.shapeColor = newColor;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 0 0, 200 300, 200" fill="${this.shapeColor}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`
    }
}

// Exports triangle, circle, square classes
module.exports = {SVG, Text, Square, Circle, Triangle}