function printRange(start,end,skip = 1){
    if(arguments.length >= 2){
        for(var i = start;i < end;i = i+skip){
        console.log(i);
        }
    }else
        for(var i = 0; i < arguments[0];i++){
            console.log(i);
        }
   
}
printRange(4);