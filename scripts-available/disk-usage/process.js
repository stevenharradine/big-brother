module.exports = function (chunk) {
	var lines = chunk.split ("\n");

	for (var linesIndex = 0; linesIndex < lines.length; linesIndex++) {
		var this_line = lines[linesIndex].replace(/\s+/g, ' ').split(" "),
		    path      = this_line[0],
		    percent   = this_line[4],
		    usage     = percent.substring(0, percent.length - 1),
		    message   = path + " is at " + percent;

		console.log (
			"    " +
			(
				usage > 90 ? "ALERT "   + message :
				usage > 50 ? "Warning " + message :
				             "OK"
			)
		);
	}
}
