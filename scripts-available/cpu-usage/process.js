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

	return statuses;
}