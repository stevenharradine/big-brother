module.exports = function (chunk) {
	var line = chunk.trim();
	var cpuUsage = line.substring(0, line.length - 1);

	console.log(
		"    " +
		(
			cpuUsage > 90 ? "ALERT "   + cpuUsage :
			cpuUsage > 50 ? "Warning " + cpuUsage : 
			                "OK"
		)
	);
}