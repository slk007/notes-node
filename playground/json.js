// let obj = {								//normal js object
// 	name: 'Shubham'
// };
// let stringObj = JSON.stringify(obj);	//converting into JSON string 
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Shubham", "age": 23}';
// let person = JSON.parse(personString);			//converting string to object, reverse of stringify
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
	title: 'Some title',
	body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);
 fs.writeFileSync('notes.json',originalNoteString);

 let notesString = fs.readFileSync('notes.json');
 let note = JSON.parse(notesString);

 console.log(typeof note);
 console.log(note.title);