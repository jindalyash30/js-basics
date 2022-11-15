/*console.log("hello");

let a = 10;
a = 11;

const b = 20;

console.log("a is " + a);

console.log("b is " + b);

//check condition
if (a > b) {
  // scope
  console.log("a is greater");
} else {
  var c = 10;
  console.log("b is greater ");
}
console.log(c);
initialization
condition
increment/decrement
*/
/*const n = 10;
for (let i = 1; i < n; i += 2) {
  console.log(i);
}

try {
  throw new Error("can't divide 0");
} catch (err) {
  console.log(err);
}

function print(x) {
  console.log(x);
}

print(5);*/

//npm init
//npm i cowsay
const cowsay = require("cowsay");

var oneLinerJoke = require("one-liner-joke");
var getRandomJoke = oneLinerJoke.getRandomJoke();

console.log(
  cowsay.say({
    text: getRandomJoke.body,
    e: "OO",
    T: "👅",
  })
);

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
