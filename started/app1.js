console.log('Starting app.js');

const fs = require('fs');
const os =require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// var user=os.userInfo();
// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}\n`,function (err) {
// 	if(err)
// 	{
// 		console.log('Unable to write to file');
// 	}
// });

// var res = notes.addNote();
// var sum = notes.add(4,4);
// console.log(res);
// console.log(sum);

// console.log(_.isString(true));
// console.log(_.isString('Shubham'));

var filteredArray = _.uniq(['Shubham',1,7,'Shubham',1,2,3,4,5,'Shubham']);
console.log(filteredArray);