let numbers = [1,2,3,4,5,0,-1]

let num1 = numbers.map((eachNO,index) => {
    return eachNO+2
})
console.log("Using Map ",num1)

let store = {
    "books":[
        {
    "title" : "You can win",
    "price" : 400
    },
    {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "price": 10.99
    }

]
    
}
  let title =  store.books.map(book => book.title)
  console.log("Book Titles ",title)