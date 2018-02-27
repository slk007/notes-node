let square = (x) => {
	let result = x * x;
	return result;
};
console.log(square(9));

let sq = (x) => x * x;
console.log(sq(9));

let sq2 = x => x * x;
console.log(sq2(9));

let user = {
	name: 'Shubham',
	sayHi: () => {
		console.log(arguments);
		console.log(`Hi. I am ${this.name}`);
	},
	sayHiAlt(){
		console.log(arguments);
		console.log(`Hi. I am ${this.name}`);
	}
};
user.sayHi(3,4,'Abcd');
user.sayHiAlt(3,4,'Abcd');