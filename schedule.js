var schedule = require('node-schedule');
const execpy1 = 'python3 yes24-crwaler.py';
const execpy2 = 'python3 crawler_ggcf_or_kr.py';
const execpy3 = 'python3 crawler_mimint_co_kr.py';
const migrations = 'python3 db_migration.py';

const exec = require('child_process').exec;

var j;
j = schedule.scheduleJob('*/1 * * * *', function () {
	const child1 = exec(execpy1,
		(error, stdout, stderr) => {
			console.log(`stdout: ${stdout}`);
			console.log(`stderr: ${stderr}`);
			if (error !== null) {
				console.log(`exec error: ${error}`);
			}
		});
	const child2 = exec(execpy2,
		(error, stdout, stderr) => {
			console.log(`stdout: ${stdout}`);
			console.log(`stderr: ${stderr}`);
			if (error !== null) {
				console.log(`exec error: ${error}`);
			}
		});
	const child3 = exec(execpy3,
		(error, stdout, stderr) => {
			console.log(`stdout: ${stdout}`);
			console.log(`stderr: ${stderr}`);
			if (error !== null) {
				console.log(`exec error: ${error}`);
			}
		});
	const child4 = exec(migrations,
		(error, stdout, stderr) => {
			console.log(`stdout: ${stdout}`);
			console.log(`stderr: ${stderr}`);
			if (error !== null) {
				console.log(`exec error: ${error}`);
			}
		});
	child1;
	child2;
	child3;
	child4;
});
