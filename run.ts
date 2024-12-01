import chalk from "chalk";

async function runDay(year: string, day: string, part: string) {
  try {
    // Validate arguments
    if (!year || !day || !part) {
      console.log(chalk.red("Please provide year, day, and part"));
      console.log(chalk.yellow("Usage: ts-node run.ts <year> <day> <part>"));
      process.exit(1);
    }

    console.log(chalk.blue(`🎄 Advent of Code 🎄`));
    console.log(chalk.red(`Year: ${year}`));
    console.log(chalk.green(`Day: ${day}`));
    console.log(chalk.yellow(`Part: ${part}`));
  } catch (error) {
    console.log(chalk.red(`Error - ${error}`));
  }
}

const [,, year, day, part] = process.argv;

runDay(year, day, part);