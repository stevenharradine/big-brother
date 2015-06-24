module.exports = function (data) {
	var lines    = data.chunk.split ("\n"),
	    statuses = [];

	for (var linesIndex = 0; linesIndex < lines.length; linesIndex++) {
		var this_line = lines[linesIndex].replace(/\s+/g, ' ').split(" "),
		    path      = this_line[0],
		    percent   = this_line[4],
		    usage     = percent.substring(0, percent.length - 1),
		    message   = path + " is at " + percent;

		usage > 90 ? statuses.push ({
				"status":"ALERT",
				"message":message
		}) : usage > 50 ? statuses.push ({
				"status":"Warning",
				"message":message
		}) : statuses.push ({
				"status":"OK"
		});
	}

	return statuses;
}
