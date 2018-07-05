var fs = require('fs');
//var StatMode = require('stat-mode');
var colors = require('colors');

// fs.stat('./cat.jpg', function(err, stats) {
// 	var statMode = new StatMode(stats);
// 	console.log(statMode.toString());	
// });

fs.readFile('./tekst.txt', 'utf-8', function(err, data){
	console.log('Dane przed zapisem!'.green);
	console.log(data);
	fs.appendFile('./tekst.txt', '\nTak wygladaja po zapisie!', function(err){
		if(err) throw err;
		console.log('Zapisano!'.green);
		fs.readFile('./tekst.txt', 'utf-8', function(err, data){
			console.log('Dane po zapisie'.green)
			console.log(data);
		});
	});
});

fs.readdir('./node_modules/colors', function(err, files) {
	fs.writeFile('./plik.txt', files, function(err){
		if(err) throw err;
		
		fs.readFile('./plik.txt', 'utf-8', function(err, data){
			console.log('Zapisano dane z katalogu!'.blue)
			console.log(data);
		});
	});
});