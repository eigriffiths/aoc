import chalk from "chalk";

async function runDay(){
    try {
        console.log(chalk.blue(`🎄 Advent of Code 🎄`))
    } 
    catch(error)
    {
        console.log(chalk.red(`Error - ${error}`))
    }
}