// so i can use this to get the current time in unix
let time = Math.floor(new Date().getTime() / 1000.0);
time;

// convert particular date to unix time
let myDate = new Date("Feb 8, 2022 14:20:00"); // Your timezone!
let myEpoch = myDate.getTime() / 1000.0;
myEpoch;
