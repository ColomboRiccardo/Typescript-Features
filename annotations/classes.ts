class Vehicle {
	color: string = 'red'; //this is a field

	constructor(color: string) {
		this.color = color; //this is if you want to pass an argument to the class
	}
	/*
    the code above can be shorthanded to:

    constructor(public color: string){

    }
    */
	drive(): void {
		console.log('Go go');
	}
	honk(): void {
		console.log('beep beep');
	}
}
const vehicle = new Vehicle('red');
vehicle.drive();

class Car extends Vehicle {
	drive(): void {
		console.log('wroom');
	}
	//we're inhereting methods from the class Vehicle, but also rewriting one of them
}

const car = new Car(); //it gives us an error, if it extends Vehicle we need to pass an argument
//remember that if you want to call a constructor inside the extended class, you need to call super(), or super("red"), or super(color)
car.honk();

//modifiers are properties that we can put in classes, private, public or protected
//the default is public

//if we were to put private in front of the last drive(), we would get an error, since we cannot access it outside the class Car

//if we want to modify a class method we cannot change its properties, so if drive() was private, it needs to stay private

//if a method is protected it's accessible only from that class or child classes, if it's private it can be accessed only from within the class it was called in
