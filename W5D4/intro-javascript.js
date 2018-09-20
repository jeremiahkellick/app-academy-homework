function madLib(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`;
}

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

function fizzBuzz(array) {
  return array.filter((el) => {
    return (el % 3 == 0 || el % 5 == 0) && !(el % 3 == 0 && el % 5 == 0);
  });
}

function isPrime(number) {
  for(let i = 2; i < number; i++) {
    if(number % i == 0) return false;
  }
  return true;
}

function firstNPrimes(n) {
  let primes = [];
  let current = 2;
  while (primes.length < n) {
    if(isPrime(current)) primes.push(current);
    current += 1;
  }
  return primes;
}

function sumOfNPrimes(n) {
  return firstNPrimes(n).reduce((acc, el) => acc + el, 0);
}

function titleize(names, printCallback) {
  printCallback(names.map((name) => `Mx. ${name} Jingleheimer Schmidt`));
}

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  return `${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`;
}

Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
}

Elephant.prototype.play = function() {
  let trick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
  return `${this.name} is ${trick}!`;
}

let ellie = new Elephant(
  "Ellie",
  185,
  ["giving human friends a ride", "playing hide and seek"]
);
let charlie = new Elephant(
  "Charlie",
  200,
  ["painting pictures", "spraying water for a slip and slide"]
);
let kate = new Elephant(
  "Kate",
  234,
  ["writing letters", "stealing peanuts"]
);
let micah = new Elephant(
  "Micah",
  143,
  ["trotting", "playing tic tac toe", "doing elephant ballet"]
);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function(elephant) {
  console.log(elephant.play());
}

herd.forEach(Elephant.paradeHelper);

function dinerBreakfast() {
  let items = [];
  func = function(item) {
    items.push(item);
    console.log(`I'd like ${items.join(" and ")} please.`);
  }
  func("cheesy scrambled eggs");
  return func;
}

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");
