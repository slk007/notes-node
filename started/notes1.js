console.log('Starting notes.js');

// console.log(module);
// module.exports.age=23;

module.exports.addNote = () => {
	console.log('addNote');
	return 'New note';
}

module.exports.add = (a, b) => {
	console.log('adding started'); 
	return a + b ;
}