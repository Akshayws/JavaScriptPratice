const arry1= [0,2,1,4,5];
// const Heros=["thor","wolvarin","Iron man"]

// const arry2=  new Array (2,4,6);
// console.log(arry2[[0]])


// arry1.push(17);//addes an elemnt at the end of the array

// console.log(arry1);

// arry1.pop()//removes

// console.log(arry1);

// arry1.unshift(0);//adds an element at starting
// console.log(arry1);
// arry1.shift(); //removes an element at starting
// console.log(arry1);

// console.log(arry1.includes(1))//its a method to check if an element is present in the array or not and returns true or false (boolean type)


// const newarr= arry1.join();//Yes, that’s correct! When you have a number array in JavaScript and use .join(), it converts all elements into a string and returns a single string output.


// Why Does This Happen?
// - The .join() method concatenates all elements using the specified separator (default is a comma ,).
// - It automatically converts numbers to strings because .join() is designed to work with string manipulation.
// - The final result is a single string, even if the original array contained numbers.



// console.log(newarr);
// console.log(arry1);
// console.log(typeof newarr);

console.log("A",arry1); 
const myarr= arry1.slice(1,3)

console.log(myarr);
console.log("b",arry1)

const myarr2= arry1.splice(1,3);//removes the elements from the array and returns them in a new array
console.log(myarr2);
console.log("C",arry1);







