function fancyArray(arr,symble,reverse=false){
    if(reverse === true){
        for(var i = arr.length-1;i>=0;i--){
            console.log(i + " " + symble + " " + arr[i]);
        }
    }else
        for(var i = 0; i < arr.length;i++){
            console.log(i + " " + symble + " " + arr[i]);
        }
}

fancyArray([ "James", "Jill", "Jane", "Jack" ],"**",true);