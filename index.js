const fs = require("fs")
const inquirer = require('inquirer')
const {SVG, Text, Square, Circle, Triangle} = require('./lib/shapes.js')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Type in a title for your image up to 3 characters',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What color would you like your text to be?',
            name: 'color'
        },
        {
            type: 'list',
            message: 'What shape would you like?',
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            message: 'What color would you like your shape to be?',
            name: 'fill'
        },
    ])
    .then(ans => {
        const myText = new Text(ans.color, ans.title)
        let myShape;
        if(ans.shape == "Square") {
            myShape = new Square(ans.fill)
        } else if(ans.shape == "Circle") {
            myShape = new Circle(ans.fill)
        } else {
            myShape = new Triangle(ans.fill)
        }
        const mySVG = new SVG(myShape, myText)
        fs.writeFile("examples/hw.svg", mySVG.render(), err => {
            if(err) {
                console.log(err)
            }
            console.log("Generated logo.svg")
        })
    })