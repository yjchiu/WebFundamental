var dayUntilMyBirthday = 60;

while(dayUntilMyBirthday>= 0){
    if(dayUntilMyBirthday >= 30){
        console.log(dayUntilMyBirthday + " days until my birthday. Such a long time..... :(");
        dayUntilMyBirthday--;
    }else if(dayUntilMyBirthday >= 5){
        console.log(dayUntilMyBirthday + " Almost there.");
        dayUntilMyBirthday--;
    }else if(dayUntilMyBirthday >= 1){
        console.log(dayUntilMyBirthday + " Days UNTIL MY BIRTHDAY!!!");
        dayUntilMyBirthday--;
    }else
        console.log("HAPPY BIRTHDAY");
        dayUntilMyBirthday--;

}



