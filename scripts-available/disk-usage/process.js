process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
  	var lines = chunk.split ("\n");
  	var numberOfLines = lines.length;

	for (var linesIndex = 0; linesIndex < numberOfLines; linesIndex++) {
		var this_line = lines[linesIndex].replace(/\s+/g, ' ').split(" ");

		if (this_line != "") {
			var path    = this_line[0];
			var percent = this_line[4];
			var diskUsage = percent.substring(0, percent.length - 1);

			console.log (
				"    " +
				(
					diskUsage > 90 ? "ALERT "   + path + " is at " + percent :
					diskUsage > 50 ? "Warning " + path + " is at " + percent :
					                 "OK"
				)
			);
		}
	}
  }
});