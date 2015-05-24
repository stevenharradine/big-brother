module.exports = function (chunk) {
	var cpuUsage = chunk.substring(0, chunk.length - 1);

	console.log(
		"    " +
		(
			cpuUsage > 90 ? "ALERT "   + cpuUsage :
			cpuUsage > 50 ? "Warning " + cpuUsage : 
			                "OK"
		)
	);
}