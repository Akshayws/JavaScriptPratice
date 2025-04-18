// let value=3;
// let  negvalue =-value
// console.log(negvalue);

// console.log(2/3);
// console.log(2%3);
// console.log("A"+3+4)
// console.log('h'+'W')
// console.log(3+2+"e")

// let x=2;
// const y=x++;
// console.log(`x:${x},y:${y}`);
// console.log(null>0)
// console.log(undefined>0)
// console.log(null>=0)
// console.log(null==0)
// console.log(undefined==null) 

// ---------------Primitive and not primitive-------

// const id=Symbol('123');
// const id2=Symbol('123');
// console.log(id===id2);

// --------------object and prototype chain------------------
const heros= ["spiderman","ironman","hulk"];
// 1.Using Object.create() for Explicit Prototypes

// let myobj={
//     name:"Hritik",
//     age:22
// }
// console.log(myobj.name+" "+ myobj.age);

// const myobj2= Object.create(myobj);
// myobj2.name="Rahul";
// myobj2.age=24;
// console.log(myobj2.name  +" "+ myobj2.age);
// console.log(Object.getPrototypeOf(myobj));


// 2.using Constructor When you create an object using a constructor function, 
// that object automatically references the constructor’s prototype property.



// function car(color){
//     this.color=color;
// }
// car.prototype.greet=function(){
//     console.log("Here is your car :"+this.color);

// };
// const Akshay= new car("red");
// Akshay.greet();
// const saurabh=new car("blue");
// saurabh.greet();

