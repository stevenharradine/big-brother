module.exports = function (data) {
	var usage    = data.chunk.substring(0, data.chunk.length - 1),
		message  = "CPU usage at " + usage,
		statuses = [];

	usage > 90 ? statuses.push ({
			"status":"ALERT",
			"message":message
	}) : usage > 50 ? statuses.push ({
			"status":"Warning",
			"message":message
	}) : statuses.push ({
			"status":"OK"
	});

	var sql = "INSERT INTO `big_brother`.`cpu_usage` (`host`, `cpu_usage`) VALUES ('" + data.host + "', '" + usage + "')";
console.log (sql);
	data.mysql_connection.connect();
	data.mysql_connection.query(sql, function(err, rows, fields) {
		if (err) throw err;
	});
	data.mysql_connection.end();

	return statuses;
}