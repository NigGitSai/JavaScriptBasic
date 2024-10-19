const numbers = [1,2,10]

let reduced = numbers.reduce((prev,curr) => prev+curr)
console.log(reduced)


let fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];

let fruitCount = fruits.reduce(function(accumulator, currentValue) {
  // If the fruit already exists in the accumulator, increment the count
  console.log(accumulator[currentValue])
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    // If the fruit does not exist, set the count to 1
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(fruitCount); 