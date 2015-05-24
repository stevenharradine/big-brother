process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
  	var line = chunk.trim();

  	console.log(line.substring(0, line.length - 1));
  }
});