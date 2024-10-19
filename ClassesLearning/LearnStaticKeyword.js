class StaticEx{

   static count =0;

    incCount(){
        return StaticEx.count++;
    }
    static display()
    {
        console.log("This program is for Static Keyword learning");
    }

    nonStaticFunc()
    {
        StaticEx.display();
    }
    printHello()
    {
        console.log("Hello!")
    }
    

}

const obj1 = new StaticEx();
const obj2 = new StaticEx();
const obj3 = new StaticEx();
console.log(obj1.incCount());
console.log(obj2.incCount());
console.log(obj3.incCount());
StaticEx.display();
obj3.nonStaticFunc();

