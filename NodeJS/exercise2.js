// Write a Node.js program that uses readline to keep on asking the user for a number until they
// enter “stop”. The program should then output the sum of all the numbers that the user has
// entered.
// Hint: using a loop with non-blocking code will cause it to run wild (infinite loop)! You need to
// write a “getNumber()” function and call that after the user has given his answer (recursion).

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const getNumber = ()=>{
    readline.question("Enter number \n", (number) => {
        if(number=="stop"){
            readline.close();
        }else{
            getNumber();
        }
      });
}

getNumber();