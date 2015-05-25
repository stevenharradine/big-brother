var path         = "./" + process.argv[2];

process.stdin.setEncoding('utf8');

Array.prototype.hasStatus = function (status) {
    for (i = 0; i < this.length; i++) {
    	var hasStatus = this[i].status == status;

        if (hasStatus) return true;
    }
}

process.stdin.on('readable', function() {
	var chunk = process.stdin.read();

	if (chunk !== null) {
		var statuses       = require (path)(chunk.trim()),
		    log            = "";

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