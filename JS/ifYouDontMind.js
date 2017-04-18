// var HOUR = 8;
// var MINUTE = 50;
// var PERIOD = "AM";

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

var msg1 = "";
var msg2 = "";
if(MINUTE > 30){
    msg1 = "almost";
    HOUR +=1;
} else{
    msg1 = "just after";
}

if(PERIOD === "AM"){
    msg2 = "in the morning"
}else
    msg2 = "in the evening"


console.log("It's " + msg1 + " " + HOUR + " " + msg2);
