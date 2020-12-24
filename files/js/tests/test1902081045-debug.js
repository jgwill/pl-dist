//@test

var path = require('path');

//@q relative to the Test structure, where are the Patterns ??
//@cr ./dist/files/patterns, ./dist/files/js
var pattern_root = path.join(process.cwd(), 'files/patterns');//@q ??  



Mustache = require('mustache-file');

var must = new Mustache({
	extension: 'mustache',
	path: [pattern_root]
});

var templateNav = "tests-test-nav";
var dataFilepath = path.join(pattern_root, templateNav + ".json");
console.log(`dataFilepath: ${dataFilepath}`);

var contextData = require(dataFilepath);
//var contextData = require(path.join(process.cwd(), "tabarnak.json"));
console.log(contextData);
// require('test1902081045.json');


must.render(templateNav, contextData, function (err, html) {
	if (err) throw err;
	// Send html to the browser, for example 

	console.log(html);
});