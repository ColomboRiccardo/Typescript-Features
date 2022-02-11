const profile = {
	name: 'Alex',
	age: 20,
	coords: {
		lat: 20,
		long: 50,
	},
	setAge(age: number): void {
		this.age = age;
	},
};

const { age }: { age: number } = profile;
const { age, name }: { age: number; name: String } = profile;
//with destructuring we need to write an annotation like the structure of the object

const {
	coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
