/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % (3 * 5) === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

function main() {
  const n = 15;

  fizzBuzz(n);
}

main();

const logs = ["88 99 200", "88 99 300", "11 12 455", "11 12 555", "11 32 444"];

let thrshold = 2;

let user = {
  id: "",
  count: 0,
};

for (let i = 0; i < logs.length; i++) {
  l;
}
