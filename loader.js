var path = "./" + process.argv[2];

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
	var chunk = process.stdin.read();
	
	if (chunk !== null) {
		require (path)(chunk.trim())
	}
});