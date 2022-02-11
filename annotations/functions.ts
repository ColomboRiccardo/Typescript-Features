const logMyNumber: (i: number) => void = i => {
	console.log(i);
};

//Typescript is not going to figure out what the types of the arguments of the function are (need annotation), but is going to figure out what type it returns (does inference).

const addNumbers = (a: number, b: number): number => {
	return a + b;
};
//type system is just concerned with types

const addNumbersProper = (a: number, b: number) => {
	return a + b;
};
//we don't need to use annotation on the return of the function, but we will

const subtract = (a: number, b: number) => {
	a - b;
};
//in this case, since we don't return anything, Typescript does a type inference and thinks: ok, it returns type void

function logger(a: number): void {
	console.log(a);
}
//if a functions doesn't return anything, we say type void. The function can technically still return null or undefined

const throwError = (message: string): never => {
	throw new Error(message);
};
//never stands for "this function will never return", since it doesn't reach completion

const forecast = {
	date: new Date(),
	forecast: 'cloudy',
};
const logWeather = (forecast: { date: Date; forecast: 'string' }): void => {
	console.log(forecast.date, forecast.forecast);
};
//what if i want to destructure the object
const logWeatherTwo = ({
	date,
	forecast,
}: {
	date: Date;
	forecast: 'string';
}): void => {
	console.log(date, forecast);
};
