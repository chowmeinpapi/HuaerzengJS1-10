//write first method
function sleep_in(weekday,vacation) {
    //If it isn't the weekday, or your on vacation, you can sleep in.
    if (weekday === false || vacation === true) {
        return true;
        //if it is the weekday, you can't sleep in.
    } else if (weekday === true){
        return false
    }
        }

//add 2-10 below here...

//write second method
    function monkey_trouble(param1, param2) {
        //if the conditions of them both smiling or both not smiling are met,
        //everything else is false.
        return param1 && param2 || !param1 && !param2;
    }

//third method
    function string_times(string,n){
    var nString = "";
    for(var i=0; i<n ; i++){
        //nString starts as nothing, then you add string to it n times.
        nString = nString+string;
    }
    //You only return nString after yout done with the function.
    return nString;
}

//fourth method
    function front_times(string,n){
        var nString = "";
        //Starts as zero
        for(var i=0; i<n ; i++){
            //string.substring tells how may letters to count.
            nString = nString+string.substring(0,3);
        }
        return nString;
    }

//fifth method
    function string_bits(string){
        var nString = "";
        //Starts as empty
        for(var i=0; i<string.length ; i++){
            //Make mod 2 equal 0 so the only the odd letter get chosen.
            if(i % 2 === 0){
                nString += string.substring(i,i+1);
                //the substring only counts the first and the one next to the first.
                //Since the one next to the first is even, its not counted.
            }
        }
        return nString;
    }

//sixth method
    function caughtSpeeding(speed,birthday){
        //Function that tells what level you were speeding at.
        //speed is a number, birthday is a boolean on if it's your birthday or not.
       if(birthday === true){
           speed = speed - 5;
           //if it is your birthday, your speed is decreased by 5.
       }
       if(speed <= 60){
           return 0;
           //If you speed is less or equal to 60, you'll get a zero.
       }
       if(60 < speed && speed < 81){
           return 1;
           //If your speed is between 60 or 81, you'll get a one.
       }
       if(speed >= 81){
           return 2;
           //If your speed is more or equal to 81, you'll get a 2.
       }

    }

//seventh method
    function fizz_buzz(n){
        var nFizz = "";
        //Set a variable to make space for the fizz_buzz.
        if (n % 3 === 0 && n % 5 === 0) {
            return "FizzBuzz";
            //If the number is divisible by 3 and 5, it returns FizzBuzz.
            //Use double space because your testing n.
        }else if (n % 3 === 0) {
            return "Fizz";
            //If the number is only divisible by 3, it returns Fizz.
            //Use double space because your testing n.
        }else if(n%5 === 0){
                return "Buzz";
                //If the number is only divisible by 5, it returns Buzz.
            //Use double space because your testing n.
            }
        else{
            return n+"!"
            //Otherwise, it will add an "!" to the end of the number.
        }
    }

//eight method
    function teaParty(tea,candy){
        if(tea < 5 || candy < 5){
            return 0;
            //if the tea or candy is less than 5, the party is a 0.
        }else if((tea*2 <= candy) || (candy*2 <= tea)){
            return 2;
            //if the tea or candy is at least double the other one, its a 2.
        }else{
            return 1;
            //anything else results in a 1.
        }
    }

//ninth method
    function blackjack(value1,value2){
        //You have 2 integer values.
        if(value1 > 21 && value2 > 21){
            //if both values 1 and 2 are greater than 21,
            //return 0.
            return 0;
        }else if(value1 > value2 && value1 <= 21){
            //if 1 is greater than 2 and its less or equal to 21, return 1
            return value1;
        }else if(value1 > value2 && value1 > 21){
            //if 1 is greater than 2 but also greater than 21, return 2.
            return value2;
        }else if(value2 > value1 && value2 <= 21) {
            //if 2 is greater than 1 and its less or equal to 21, return 2.
            return value2;
        }else if(value2 > value1 && value2 > 21){
            //if 2 is greater than 1 and its greater than 21, return 1.
                return value1;
        }
    }

//tenth method
    function loneSum(a,b,c) {
        //Your given three integer values.
        if(a==b && a==c){
            //if a and b and c equal eachother, return 0.
            //also use double equal signs cuz your just testing.
            return 0;
        }else if(a == c) {
            //if a only equals c, return b.
            return b;
        } else if(a == b) {
            //if a equals b, return c.
            return c;
        } else if(b == c) {
            //if b equals c, return a.
            return a;
        }else{
            //if they are all different numbers, add them all and return sum.
        return a + b + c;
    }
    }

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true,false);
    document.getElementById("output").innerHTML += front_times(true,false);
    document.getElementById("output").innerHTML += string_bits(true,false);
    document.getElementById("output").innerHTML += caughtSpeeding(true,false);
    document.getElementById("output").innerHTML += fizz_buzz(true,false);
    document.getElementById("output").innerHTML += teaParty(true,false);
    document.getElementById("output").innerHTML += blackjack(true,false);
    document.getElementById("output").innerHTML += loneSum(true,false);
    //test third method, etc
}
