module.exports = function (chunk) {
	var usage    = chunk.substring(0, chunk.length - 1),
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

	return statuses;
}