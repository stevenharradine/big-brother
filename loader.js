var path       = "./" + process.argv[2],
    host       = process.argv[3],
    fs         = require('fs'),
    DB_CONFIG  = JSON.parse(fs.readFileSync('config.json', 'utf8')),
    mysql      = require('mysql'),
    connection = mysql.createConnection({
    	host     : DB_CONFIG.DB_ADDRESS,
    	user     : DB_CONFIG.DB_USER,
    	password : DB_CONFIG.DB_PASS
    });

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
	var chunk = process.stdin.read();

	if (chunk !== null) {
		var log      = "",
		    statuses = require (path)({
				chunk            : chunk.trim(),
				host             : host,
				mysql_connection : connection
			});

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
			var message = "";
			for (statusesIndex = 0; statusesIndex < statuses.length; statusesIndex++) {
				message += statuses[statusesIndex].message + "\n";
			}

			log += "    OK (" + message + ")";
		}

		console.log (log);
	}
});