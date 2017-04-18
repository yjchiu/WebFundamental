function numbersOnly1(arr){
    var newarr=[];
    var j = 0;
    for(var i = 0;i < arr.length;i++){
        if(typeof arr[i] === "number")
            newarr[j++] = arr[i];
    }
    return newarr;
}

function numbersOnly2(arr){
    for (var i = 0, j = 0, l = arr.length; i < l; i++) {
        if (typeof arr[i] === "number") {
        console.log('j before assignment: '+j);
        arr[j++] = arr[i];
        console.log('j after assignment: '+j);
        console.log('arr is currently: '+arr);
        }
    }
    arr.length = j;
    return arr;
}

console.log(numbersOnly2([1, "apple", -3, "orange", 0.5,7,"a",22]));




