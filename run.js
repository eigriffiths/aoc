import chalk from "chalk";

 function runDay(){
    try {
        console.log(chalk.blue(`🎄 Advent of Code 🎄`))
    } 
    catch(error)
    {
        console.log(chalk.red(`Error - ${error}`))
    }
}

runDay()