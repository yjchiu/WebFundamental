function rangeChance(num){
    while(num>0){
        // console.log("num: " + num);
        var reward = Math.floor(Math.random()*51+50);
        // console.log("reward: " + reward);
        num--;
        if(chanceToWin()){
            num += reward;
            // console.log("win: " +num);
            return num;
        }
    }
   
}

function chanceToWin(){
    return (Math.floor(Math.random()*100+1) === 1);       
}

rangeChance(10);