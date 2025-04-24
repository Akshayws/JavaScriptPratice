// object creation has multiple ways to deifine
// 1.object literals
// 2.using buit in constuction (new object())
// 3.using constuctor Fuction
// 4.using ES6 classes
// 5.using object.create()
// -------------------------------------


// 1.object literals

// (you define key value pairs with in curly)
const mysym= Symbol("key1");

let person={
    name:"Jhon snow",
    "fullname":"akshay waghmare",
    mysym:"my symbole in persone",//its is not used as symbole or it typeof is string 
    [mysym]:"its corect way to declare symbole in object",// this is the correct way to declare the symbole
    age:24,
    greet:function(){
        console.log ("Hey..!"+this.name);
    }
}
console.log(person.name)
console.log(person.fullname) 
console.log(person["name"])
console.log(person.mysym)
console.log(typeof person.mysym)
console.log("--------------------------")
console.log(person[mysym])

console.log(typeof [mysym])//The typeof [mysym] will always return "object", as the result is an array, not the Symbol itself.

Object.freeze(person);//due to this the field in side the object not changed worke like final
person.name="jhon stark"/// we want to change the name but we cant we applied the freeze object function
console.log(person);

console.log("--------------------------------------------------")

// -------------------------------
// 2.using buit in constuction (new object())

     // (this approch uses java build in constuctor)
         //@Allow daynamic property assignement
let car =new Object();
car.brand="toyota";
car.model ="corolla";
car.year =2020;
console.log(car);

// --------------------------------------------------------


// 3.using constuctor Fuction

//    A consturctor function helps create multiple similar object using new 
     //@Resuable for multiple instance

     function  personX (name,age){
        this.name=name,
        this.age=age,
        this.greet =function(){
            console.log("Hello "+this.name);

        };


     }
     let personx1 = new personX("Akshay",24);
       personx1.greet();

// 4.using ES6 clases
// classes provide a clear more modern approch to object creation

class Animal{
    constructor (type,sound){
        this.type=type;
        this.sound=sound;

    }
    makesound(){
        console.log("i am dog and i :"+this.sound);

    }

}
let dog= new Animal("Doges","Woof");

console.log(dog);
dog.makesound();




///when we want to freeze the object means we dnt want to chanbes occuring on runtime we use the object.freeze();


// 
const obj1= {
    1:"hey",
    2:"there",
}
const obj2={
    3:"how",
    4:"are you"
}
const obj3={
    obj1,obj2
}
//console.log(obj3);// it print like two array

// const obj4=Object.assign(obj3);
// console.log(obj4);
const obj5=Object.assign({},obj1,obj2)
console.log(obj5);

 
///using spreed operator
const obj6= {...obj1,...obj2}
console.log(obj6);


const user=[
    {
        id:1,
        email:"akshy@gmail.com"

    },
    {
        id:2,
        email:"user2@gmail.com"

    },
    {
        id:3,
        email:"user3@gmail.com"

    }
]

console.log(user[0].email)
    console.log(Object.keys(person))///we can iterrate it ,beacause its typeof is array 
    console.log(Object.values(person))
    console.log(Object.entries(person))//each and every key value is separate array  [ [], []]
    console.log(person.hasOwnProperty('fullname'))
    console.log(person.hasOwnProperty('mysym'))
