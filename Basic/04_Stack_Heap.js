// <!-- ----stack (primitive type)---
// ---stores direct copy-- -->


let a = "Stack "; //stores in stack
let a1 =a;

a1="new";
console.log(a);  //no change in a because a1 is a copy of a
console.log(a1);



// ----Heap(Non primitive)_------
// ---stores reference--- -->

let user1= {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let user2=user1;
user2.email="Akshay@gmail.com";
console.log(user1);  //change in user1 because user2 is a reference of user1
console.log(user2);