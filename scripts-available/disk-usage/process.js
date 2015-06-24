module.exports = function (data) {
	var lines    = data.chunk.split ("\n"),
	    statuses = [];

	data.mysql_connection.connect();

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
				"status":"OK",
				"message":message
		});

		var sql = "INSERT INTO `big_brother`.`disk_usage` (`host`, `path`, `percent`) VALUES ('" + data.host + "', '" + path + "', '" + percent + "')";

		data.mysql_connection.query(sql, function(err, rows, fields) {
			if (err) throw err;
		});
	}
	
	data.mysql_connection.end();

	return statuses;
}
