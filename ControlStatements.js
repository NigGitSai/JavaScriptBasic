let a = 5;
if(a===5)
{
    console.log("Value of a is 5")
}
else
{
    console.log("value of a is not 5")
}

let browser = "chrome";
if(browser === "chrome")
{
    console.log("Invoke chrome driver");
}
else if(browser === "firefox")
{
    console.log("Invoke Firefox browser")
}
else{
    console.log(`${browser} could not be invoked`)
}
let fruits = ["apple","mango","orange","berries"];
console.log("using for loop")
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i])
}
console.log("using for of loop")
for(let fruit of fruits)
{
    console.log(fruit)
}
console.log("using for in loop")
for(let fruit in fruits)
{
    console.log(fruit)
}
console.log("using for each loop")
fruits.forEach(fruit =>{
    console.log(fruit)
})
console.log("Switch case statements")
switch(browser)
{
    case "chrome":
        console.log("Invoke chrome browser")
        break;

    case "edge":
        console.log("Invoke edge browser")
        break;
    case "firefox":
        console.log("Invoke Firefox")
        break;
    default:
        console.log(`${browser} could not be invoked`)
}

