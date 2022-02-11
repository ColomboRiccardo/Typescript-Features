const oldCivic = {
	name: 'Civic',
	year: 2000,
	broken: true,
};

const printVehicle = (vehicle: {
	name: string;
	year: number;
	broken: boolean;
}): void => {
	console.log(`${vehicle.name}`);
};
//this annotation is way too long
//we can improve it by using interfaces

interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
	summary(): string;
}
//Typescript is not going to check if there is more properties in the object car or vehicle, it just checks the minimum

const printCar = (car: Vehicle): void => {
	console.log(car);
};

//If we have kind of a general interface, we can keep it general so we can reuse it
interface Summarisable {
	summary(): string;
}

const leDrink = {
	color: 'brown',
	carbonated: true,
	summary(): string {
		return 'ledrink';
	},
};

//leDrink: Summarisable, and if car has summary(), then car: Summarisable
//reusable code

//! As a general rule, to have reusable code in Typescript, all functions arguments are going to have interfaces
