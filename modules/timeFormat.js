function timeFormat() {
	var os = require('os');
	var uptime = os.uptime().toFixed(0);
	var  hours = (uptime/3600);
	var onlyHours = hours | 0;
	var minutes = ((uptime % 3600) / 60);
	var onlyMinutes = minutes | 0;
	var seconds = (uptime - ((onlyHours * 3600) + (onlyMinutes * 60)));
	console.log('Czas działania systemu: ', onlyHours,'h ', onlyMinutes,'min ', seconds,'s.');
}
exports.print2 = timeFormat;