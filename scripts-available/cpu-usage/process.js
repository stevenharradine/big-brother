process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
  	var line = chunk.trim();
  	var cpuUsage = line.substring(0, line.length - 1);

  	console.log(
  		"    " +
  		(
			cpuUsage > 90 ? "ALERT " + cpuUsage :
			cpuUsage > 50 ? "Warning " + cpuUsage : 
			                "OK"
		)
  	);
  }
});