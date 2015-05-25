var path = "./" + process.argv[2];

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
	var chunk = process.stdin.read();

	if (chunk !== null) {
		var statuses = require (path)(chunk.trim());

		for (statusesIndex = 0; statusesIndex < statuses.length; statusesIndex++) {
			var status  = statuses[statusesIndex].status,
			    message = statuses[statusesIndex].message;

			console.log ("    " + status + ( message != undefined ? " " + message : ""));
		}
	}
});