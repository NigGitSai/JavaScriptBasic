let fruits =["grapes","orange","apple","chikku"]
console.log("length of fruits array",fruits.length)
console.log(typeof fruits)

const numbers = [50,12,4,6,-2,0,6]
numbers.push(15)
console.log("After push",numbers)

numbers.pop()
console.log("After pop",numbers)

let num2 = []
console.log("POP for an empty array",num2.pop())
numbers.unshift(22,50);
console.log("After unshift",numbers)
//shift
numbers.shift()
console.log("After Shift",numbers)

num2.fill(3)
console.log("After filling 3 for num2 array",num2)

numbers.fill(15,1,4)
console.log("After filling 15 from position 1 to 3",numbers)
numbers.fill(9,-4)
console.log("Fill woth negative index",numbers)
numbers.fill(10,-2,4)
console.log("Fill with negative start index ",numbers)
numbers.fill(13,6,-10)
console.log("Fill with negative end index",numbers)
numbers.fill(13,4,-2)
console.log("Fill with negative end index 4,-2 ",numbers)
let joinEx = numbers.join(".0")
console.log("Join Ex ",joinEx)
console.log(typeof joinEx)
let testJoinWOParameter = numbers.join();
console.log("Join WO parameters : ",testJoinWOParameter)

console.log("Iterating over the array elements")
numbers.forEach(num=>{
    console.log(num)
})
console.log("Iterate using traditional for loop")
for(let i=0; i<numbers.length; i++)
{
    console.log(numbers[i])
}

console.log(fruits.fill(1))
console.log(fruits)