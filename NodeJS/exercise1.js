/* 
Modify the provided code to create a program that asks the user for his name, and after printing
“Welcome ${name}” asks the user for his age. If the age < 16 it should output “You’re not
allowed to drive in Iowa” otherwise it should output “You’re allowed to get a drivers license in
Iowa”.
*/
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("what is your name? \n", (name) => {
  console.log(`Welcone ${name}`);
  readline.question("what is your age? \n", (age) => {
    if (age < 16) {
      console.log("You’re not allowed to drive in Iowa");
    } else {
      console.log("You’re allowed to get a drivers license in Iowa");
    }
    readline.close();
  });
});
