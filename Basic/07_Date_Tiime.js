// let myDate= new Date();
// console.log("toISOString- "+myDate.toISOString())
// console.log("\n toString- "+myDate.toString())
// console.log("\n toUTCString- "+myDate.toUTCString())

// console.log("\n toDateString- "+myDate.toDateString())
// console.log("\n toLocaleString- "+myDate.toLocaleString())

// console.log(typeof myDate)//object

//let mycreatedDate= new Date(2023,0,23);
 let mycreatedDate= new Date(2023,0,23,5,3);
// console.log(mycreatedDate.toLocaleString())


// ----Time Stamps--------

let MytimeStamp = Date.now()
// console.log(MytimeStamp);

// console.log(mycreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))


let newDate= new Date();
// console.log(newDate);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
}))