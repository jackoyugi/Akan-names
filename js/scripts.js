function AkanName() {

var  centuary = document.getElementById("centuary").value;
var year = document.getElementById("year").value;
var month = document.getElementById("month").value;
var myBirthday = document.getElementById("myBirthDate").value;
var days = ["sunday" , "monday" , "tuesday" , "wenesday" , "thursday" , "friday" , "suterday"];
var dateOfBirth = new (myBirthday);
var dayOfTheWeek = dateOfBirth.getDay();
var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];



// This is what we expect to be outputed
// initialise empty variables to be used in our function.Their names correspond to our ids in HTML.


function calculate(){
    day();   // call the above function (day)
    dayOfTheWeek = (((centuary/4) -2*centuary-1) + ((5*year/4)) + ((26*(month+1)/10)) + date) % 7;
    return(Math.floor(dayOfTheWeek));
    // This is the  formula used  for finding the day of the week.The output expected should range 0 - 6
}

 var result = function AkanName(){
dayOfTheWeek = calculate();
checkgender();
}
// This code checks the gender input.It gives an alert with a message "input gender" if gender input is not found

 function AkanName(){
    if (myGender.value === "male"){
        document.getElementById("message").innerHTML = "you were born on a" + days[dayOfTheWeek] + ". Your AkanName's" + maleAkanNames[dayOfTheWeek]; 
    } else if (myGender.value === "female"){
        document.getElementById("message").innerHTML = "you were born on a" + days[dayOfTheWeek] + ". Your AkanName's" + femaleAkanNames[dayOfTheWeek]; 
    }
}

}
// The code above should be able to calculate the day from the date given and also get  gender
 
/*removed arrays*/


    //         }
    //     }
    //     }
    // }
    // The code above should ouput Akan names if they run sucessfully.
