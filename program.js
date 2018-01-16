process.stdin.setEncoding('utf-8');
console.log(`Wersia NODE: ${process.version}`);
// Może też być tak:
// console.log('wersja NODE: ' + process.versions.node);
var osversion = process.platform;
switch (osversion) {
	case 'win32':
		console.log('Dla tego systemu zabronili podać język użytkownika');
	break;
	case 'darwin':
		console.log(process.env.LANG);
	break;
	case 'freebsd':
		console.log('Dla tego systemu zabronili podać język użytkownika');
	break;
	case 'linux':
		console.log(process.env.LANG);
	break;
	case 'sunos':
		console.log('Dla tego systemu zabronili podać język użytkownika');
	break;
}
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
	}
});