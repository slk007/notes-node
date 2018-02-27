//console.log('Starting app.js');


const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
// console.log('Command:',command);

// console.log('Process',process.argv);
// console.log('Yargs',argv);

if(command === 'add')
{	
	// console.log('--Adding a note--');	
	let note = notes.addNote(argv.title,argv.body);

	if(note === undefined)
		console.log("Note title already exists");
	else
	{
		console.log("Note Created");
		notes.logNote(note);
	}
}
else if(command === 'list')
{	let allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s)`);
	allNotes.forEach((note) => notes.logNote(note));
}
else if(command === 'read')
{
	// console.log('Read a note');	
	let note = notes.getNote(argv.title);
	if(note === undefined)
		console.log("Note not found");
	else
	{
		console.log("Note Found");
		notes.logNote(note);
	}
}
else if(command === 'remove')
{	
	// console.log('Remove a note');
	let noteRemoved = notes.removeNote(argv.title);
	let message = noteRemoved ? "Note was removed" : "Note not found";
	console.log(message);
}
else
{	console.log('Command not recognized');	}