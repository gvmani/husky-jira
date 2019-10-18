const fs = require('fs');
const chalk = require('chalk');

if(!process.env.npm_package_jiraId){
	console.log(chalk.red("husky-jira package not configured"));
	process.exit(1);
}

if(process.env.HUSKY_GIT_PARAMS){
	const message = fs.readFileSync(process.env.HUSKY_GIT_PARAMS, 'utf8').trim();
	if(message.match(new RegExp(process.env.npm_package_jiraId+"-\\d+"))){
		process.exit(0);
	}
}
console.log(chalk.red("USE appropriate JIRA ID for the project ["+process.env.npm_package_jiraId+"] in the commit mesasge"));
process.exit(1);