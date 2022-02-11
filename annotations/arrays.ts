const carMakers = ['toyota', 'bmw', 'mercedes'];
//automatic type inference determines this has only strings

const carsByMake = [['F150'], ['Corolla'], ['Camero']];
let carsByMakeTwo: [][];
//this is the syntax for nested arrays

//Typescript can do automatic type inference when pulling an element out of an array
const oneBrand = carMakers[0];

//! prevent incompatible values
//if i push to an array a wrong type I'm going to get an error

carMakers.map((car: string): string => {
	return car;
});
//since it knows the type, Typescript can help me with the methods of the type I'm working with

//! flexible types

const importantDates = [new Date(), '2030-10-1'];
//Typescript does a type inference and assumes that importantDates is an array that contains either a Date or a string.
//if we want to specify that later I'm going to add a string or Date,
let importantDatesTwo: (Date | String)[];

//! Tuples
//it's an array, but each element represent some properties of a record

//we can describe a record with an object, like:
/*
 const drink = {
     color: "red",
     carbonated: true,
     "sugar content": 40
 }
 If we then want to have these properties in an array, we're building a tuple

 const drink = ["red", true, 40];
 The order of properties becomes extremely important, and there should be errors if i swap them
 */

const pepsi = ['brown', true, 40];
//unless we give it an annotation, we can swap them without issue
const coke: [string, boolean, number] = ['brown', true, 40];

//to make it easier, we can do a type alias
type Drink = [string, boolean, number];

const sprite: Drink = ['transparent', true, 20];

//we might be using them with a csv file, but not much else
