// let a=10;
// const b=20;
//  var c=30;
// if(true){
//     var c=99;
//     let a=98;
//     const b=97;
// }

            

 
//  console.log(a)
 
//  console.log(b)
 
//  console.log(c)
// -----------------------------------------------------------


 function one (){
    const username="akshay";
    function two (){
        const website="yotube";
        console.log(username);// we can acces outer scope variable object inside 


    }
  //console.log(website);// this will not be exicuted beacue we cannnot acces inner scope with outer scope

 
    two();
}
one();


if(true){
  const user="akshay";
if(user=== "akshay")
{
  const website =" youtube"
  console.log(user+website);
}
//console.log(website);//we cannot access scope element outside
   
}
//console.log(user);//we cannot access scope element outside





// &********Intersting!!!!!!!!!!!!!!!!!!\

console.log(addone(7));
function addone(num){
  return  num+1;//its is retruned not printed
}


console.log(addTwo(6))//Cannot access 'addTwo' before initialization it is call hoisting
const addTwo= function (num){
  return num+22;
}
