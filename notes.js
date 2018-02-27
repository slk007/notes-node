console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
	try	{
		let notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}catch(e){
		return [];
	}
};

let saveNotes = (notes) => {
		fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

let addNote = (title,body) => {								

	let notes = fetchNotes();									//fetching into a array
	let note = {												//defining an element for above array
		title: title,
		body
	};
	let duplicateNotes = notes.filter((note) => {				//old syntax
		return note.title === title;
	});
	if(duplicateNotes.length === 0)
	{
		notes.push(note);
		saveNotes(notes);
		return note;
	}	
};

let getAll = () => {
	return fetchNotes();
};

let getNote = (title) => {
	let notes =fetchNotes();
	let noteFound = notes.filter((note) => note.title === title);
	return noteFound[0];
};

let removeNote = (title) => {

	let notes =  fetchNotes();
	let filteredNotes = notes.filter((note) => note.title !== title);		//new syntax
	saveNotes(filteredNotes);
	return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
		console.log("--");
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
};

module.exports = {
	addNote: addNote,			//old syntax
	getAll: getAll,				
	getNote,					//new syntax
	removeNote,
	logNote
}