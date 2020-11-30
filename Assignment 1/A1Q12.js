//current timestamp
let ts = Date.now();

let today = new Date(ts);//creating an object
let date = today.getDate();//current date
let month = today.getMonth() + 1;//current month
let year = today.getFullYear();//current year

let hours = today.getHours();//current hours

let minutes = today.getMinutes();//current minutes

let seconds = today.getSeconds();//current seconds

// prints date & time in dd-MM-yyyy format
console.log("Today's date and time is- ");
console.log(date + "-" + month + "-" + year+ "  " + hours + ":" + minutes + ":" + seconds);
