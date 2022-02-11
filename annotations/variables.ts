let apples: number = 5;
// this is a type annotation
let words: string = 'some words';

let nothingMuch: null = null;
//this has a name equal to its type
let nothingElse: undefined = null;

let now: Date = new Date();

//! Arrays

let colors: string[] = ['red', 'blue', 'green'];
//this is an annotation for arrays. More complex as you can see

//! Classes

class Car {}
let car: Car = new Car();

//! Object literals

let points: { x: number; y: number } = {
	//starting to get a bit crazy
	x: 10,
	y: 15,
};

//! Functions

const logNumber: (i: number) => void = i => {
	console.log(i);
};
//We are giving an annotation to the function and the argument that gets passed

//Every annotation we wrote up until now can actually be deleted, and Typescript is still going to work!!
//If you delete ": number" from the first line, it's still going to trow an error if you change apple to a string

//! when do we need to use annotations?

//! 1. When a function returns a type any

const json = "{'x':1, 'y':2}";
const coordinates = JSON.parse(json);
console.log(coordinates);
//coordinates is type any
//that's bad. We need to add annotation to the coordinates object

//! 2. When we declare a variable on one line and initialize it later

let wordArray = ['red', 'green', 'blue'];
let foundWord;

for (let word of wordArray) {
	if (word === 'green') {
		foundWord = word;
	}
}
//typescript is going to warn me that foundWord has type any, and that's bad

//! 3. When inference just doesn't work

let numbersArr = [-10, -1, 4];
let numberAboveZero;
//if there are numbers above zero we want to assign it to numberAboveZero, otherwise false
//this is bad code in the first place, assigning a number or boolean to a variable
//in this case when we declare numberAboveZero we say
let numberAboveZero2: number | boolean = 5;
