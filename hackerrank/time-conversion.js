function timeConversion(s) {
    /*
     * Write your code here.
     */

     let timeStringArray = s.split(':');
     let intValue;
      
     if(timeStringArray[2][2] == 'P') { 
        if(parseInt(timeStringArray[0]) != 12) {
             intValue = parseInt(timeStringArray[0]) + 12;
        } else {
            intValue = parseInt(timeStringArray[0]);
        }
         
         timeStringArray[0] = intValue.toString();

     } else if(parseInt(timeStringArray[0]) == 12) {
            timeStringArray[0] = "00";
        }
     

     console.log(timeStringArray.join(':').slice(0,-2));

}

timeConversion("07:05:45PM");
timeConversion("07:05:45AM");
timeConversion("12:45:54PM");
