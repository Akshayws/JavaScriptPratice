// function addnumber(num1,num2){//parameters
//     console.log(num1+num2);

// }
function addnumber(num1,num2){//parameters
//    let result= num1+num2;
//    return result;
  return num1+num2;
   console.log("aks")//is not printable beacause after return any this is not rechable

}


// addnumber(3,"null");//arguments
// addnumber(3,"a");
// addnumber(3,"4")
// addnumber(3,4)
const result= addnumber(3,4);

//console.log("result: ",result)//output undefined

// --------------------------------------------------------------------------------------
function logginUser(username){

    if(username=== undefined){//if(!username)
            console.log("please enter the username")
        return  
    }
    else{
       return `${username}  just logged in`
    }
     
}
console.log(logginUser(""))//just logged in
console.log(logginUser())//please enter thr username ,undefined
console.log(logginUser("aanit"))
