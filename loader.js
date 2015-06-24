var path = "./" + process.argv[2],
    mysql    = require('mysql'),
    connection = mysql.createConnection({
    	host     : 'localhost',
    	user     : 'douglas',
    	password : 'fargo'
    });

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
	var chunk = process.stdin.read();

	if (chunk !== null) {
		var statuses = require (path)({
				chunk            : chunk.trim(),
				mysql_connection : connection
			}),
		    log      = "";

		statuses.hasStatus = function (status) {
		    for (i = 0; i < this.length; i++)
		    	if (this[i].status == status)
		    		return true;
		}

		if (statuses.hasStatus ("ALERT") || statuses.hasStatus("Warning")) {
			for (statusesIndex = 0; statusesIndex < statuses.length; statusesIndex++) {
				var status        = statuses[statusesIndex].status,
				    message       = statuses[statusesIndex].message;

				if (status == "ALERT" || status == "Warning") {
					log += "    " +
					       status +
					       ( message != undefined ? " " + message : "") +
					       ( statusesIndex < statuses.length - 1 ? "\n" : "" );
				}
			}
		} else {
			log += "    OK";
		}

		console.log (log);
	}
});