// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = cats.push("Ralph").length;

const destructivelyPrependCat = cats.unshift("Bob");

const destructivelyRemoveLastCat = cats.pop("Ralph");

const destructivelyRemoveFirstCat = cats.shift("Ralph");

const appendCat = cats.slice(3);

const prependCat = cats.slice(0);

const removeLastCat = cats.splice(0, -1);

const removeFirstCat = cats.splice(0);
