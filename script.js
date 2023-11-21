//* Funksjons anatomi:

function funksjonNavn() {

}

//* Arrow funksjon anatomi:

const arrowFunksjonsNavn = () => {

}

//* Enkel funksjon med 2 paramentre:

function plussTallSammen(parameter1, parameter2) {
    return parameter1 + parameter2
}

//* Callback en funksjon:

console.log(plussTallSammen(1687, 1000))

//* Funksjon med if/else:

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(evenOrOdd(3))

//* Odd or even checker with arrow function:

const evenOrOddArrow = (num) => {
    return num % 2 ? "Odd" : "Even"
}

console.log(evenOrOddArrow(4))


//* kalkulator logikk

function add(num1, num2) {
    return num1 + num2
}

console.log(add(10, 30))


function minus(num1, num2) {
    return num1 - num2
}

console.log(minus(10, 30))


function jokerLogikk(name) {
    console.log(`Put a smile on ${name}'s face`)
}

jokerLogikk("Joakim")


//! Datatyper
//? String: "Hallo verden!"
const string = "Hallo verden!"
//? Integer/heltall: 1 , 2, 3, 643265
const integer = 321
//? Float: Alle tall med desimaler (1,65)
const float = 1.65
//? Boolean: true eller false
const boolean = true
const notBoolean = false
//? Array. f.eks ["kiwi", "apple", "pear"]
const fruitsArray = ["kiwi", "apple", "pear"]
//? Object. eks {firstName: "Jokka", lastName: "Bolle", age: "65" }
const personObject = { firstName: "Jokka", lastName: "Bolle", age: "65" }
const personFName = personObject.firstName
//? Undefined: Data som ikke kan brukes. Betyr det samme som false


//! Loops
//? For/interater loop

for (let i = 0; i < 5; i++) {
    //kode som kjøres her kjøres 5 ganger: 0-4
}

function countNumber() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }

}

countNumber()


const names = [
    "Tom",
    "Eric",
    "Jessica",
    "Scott",
    "Anna",
    "Carl",
    "Elisabeth",
    "Benny",
    "Oliver",
    "Andy",
    "Jenny",
    "Ashley",
    "Erin",
    "Patrick",
]

//!DRY - Do not repeat youself!
// console.log(`Good day ${names[0]}!`)
// console.log(`Good day ${names[1]}!`)
// console.log(`Good day ${names[2]}!`)

console.log(names.length)

const greeter = (name) => `Hello ${name}, have a nice day!`

for (let i = 0; i < names.length; i++) {
    console.log(greeter(names[i]))
}

function etEllerAnnetGreier() {
    let etArray = ["en", "to", "tre"];
    for (let i = 0; i < etArray.length; i++) {
        console.log(etArray[i])
    }
}

etEllerAnnetGreier()



//! String methods

console.log("Hallo world")

let myString = "   Javascript er vanskelig   "

console.log(myString.toUpperCase())

myString = myString.replace("vanskelig", "gøy")

console.log(myString)

console.log(myString.trim())

myString = myString.trim()

console.log(myString[0])
console.log(myString.charAt(0))

console.log(myString.split(""))

let wordCount = myString.split(" ").length

console.log(myString.split(" "))

console.log(wordCount)


//! Number (integer og floats) methods

const x = 15.9867567

console.log(x.toString())

console.log(x.toFixed(4))

// bruk toPrecision på STORE tall
console.log(x.toPrecision(6))

const myNumberString = "42.5"

const myParsedFloat = parseFloat(myNumberString)

console.log(myParsedFloat)


//! Array methods

let fruits = ["Apple", "Pear", "Mango", "Peach", "Melon", "Banana"];

console.log(fruits)
console.log(fruits.length)


console.log(fruits.join(", "))

console.log(fruits.pop())
console.log(fruits)

console.log(fruits.push("Lemon"), fruits)

console.log(fruits.unshift("Pomelo"), fruits)

const firstFruit = fruits[0]

console.log(firstFruit)

//! Kombinerte methods

const reversedArray = fruits.reverse().join(" ").toUpperCase().split(" ")

console.log(reversedArray)

const index = fruits.indexOf("Melon")

const removeItem = fruits.splice([index], 1)


const remove = fruits.splice(fruits.indexOf("Pear"), 1)

console.log(index)
console.log(removeItem)

console.log(fruits)

console.log(remove)
