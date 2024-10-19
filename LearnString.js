let str = "Hello Monday";
console.log(str)
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase())

console.log(str.includes("Monday"))
console.log(str.includes("monday"))

console.log(str.includes("M"))
let fruit = " name is apple ";
console.log(fruit.trim());
console.log(fruit.trimStart())
console.log(fruit.trimEnd())

console.log(str.charAt(4))
console.log(str.split(" "))
let words = str.split(" ")

words.forEach(function(word){
    console.log(word)
})

words.forEach((word,index)=>{
    console.log(word)
})

console.log(str.replace("Monday","Tueday"))

console.log(str.repeat(2))
console.log(str.substring(0,5))