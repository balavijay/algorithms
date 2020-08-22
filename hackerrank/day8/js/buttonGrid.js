document.getElementById("btn5").addEventListener("click", function(){
    console.log("HI");
    var buttonInitailMap = {};
  
    for(i=1; i<=9; i++) {
    if(i!=5){
      buttonInitailMap["btn" + i] = document.getElementById("btn" + i).innerHTML;
    }
  }
  
  
  
  var butMap = new Object({
  "1" : "btn4",
  "2" : "btn1",
  "3" : "btn2",
  "4" : "btn7",
  "6" : "btn3",
  "7" : "btn8",
  "8" : "btn9",
  "9" : "btn6"
  });
  
  for(i=1; i<=9; i++) {
    if(i!=5){
      document.getElementById("btn" + i).innerHTML = buttonInitailMap[butMap[i]];
    }
  }
  


});


