var reward = 0.01;
var day = 0;
// for(var i = 0; i < 30; i++){
//     reward *=2;
//     if(reward >= 10000){
//         day = i+1;
//         break;
//     }
        
        
// }
// console.log(reward);
// console.log(day);


while(reward != Infinity){
    reward *= 2;
    day++;
}

console.log(day);
console.log(reward);