module.exports = function (chunk) {
	var lines = chunk.split ("\n");
	var numberOfLines = lines.length;

	for (var linesIndex = 0; linesIndex < numberOfLines; linesIndex++) {
		var this_line = lines[linesIndex].replace(/\s+/g, ' ').split(" ");

		if (this_line != "") {
			var path    = this_line[0];
			var percent = this_line[4];
			var usage   = percent.substring(0, percent.length - 1);
			var message = path + " is at " + percent;

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
}
