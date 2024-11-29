import chalk from "chalk";

 async function runDay(year: string, day: string, part: string) {
    try {
        console.log(chalk.blue(`🎄 Advent of Code 🎄`))
        console.log(chalk.red(`Year: ${year}`))
        console.log(chalk.green(`Day: ${day}`))
        console.log(chalk.yellow(`Part: ${part}`))
    } 
    catch(error)
    {
        console.log(chalk.red(`Error - ${error}`))
    }
}

const [,, year, day, part] = process.argv;

runDay(year, day, part);