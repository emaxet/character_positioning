// returnIndices() - similar to countLetters - but return zero-based positions in the string where each char is found.
// For each letter, potentially multiple numbers to represent all the places in the string it shows up.
// Data structure associative array within an object.
// What would returnIndices("lighthouse in the house") look like?
// {l: [0], i: [1, 11], g:[2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], ' ': [10, 13, 17], n: [12]}
// loop through array using a for loop.
// Record the index by pushing i into the value of the character key
var input = process.argv.splice(2);
var string = input.join(" ");

function returnIndices(str) {
  var object = {};
  var array = str.split("");
  for (var i = 0; i < str.length; i++) {
    if (!object[array[i]]) {
      object[array[i]] = [i];
    } else {
      object[array[i]].push(i);
    }
  }
  return object;
}

console.log(returnIndices(string));