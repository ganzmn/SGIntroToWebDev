function evenNumbers(startNum, endNum, stepNum){
    console.log('started function');
    var output = [];
    console.log("looping from " + startNum + " to " + endNum + " by " + stepNum);
    for (var i= startNum; i < endNum; i += stepNum){
    if (i % 2 == 0){
       console.log("pushing " + i);
       output.push(i);
    }
}
    console.log("output is: " + output.join(',')); 
    document.getElementById("results").innerHTML = "Displaying even numbers between "+ startNum +" and " + endNum+" by " + stepNum + "'s" + ": " + output;}

function validateItems() {
    var startNum = parseInt(document.forms["numReturn"]["startNum"].value);
    var endNum = parseInt(document.forms["numReturn"]["endNum"].value);
    var stepNum = parseInt(document.forms["numReturn"]["stepNum"].value);
    if (startNum == "" || isNaN(startNum)) {
        alert("Start number must be filled in with a number.");
        document.forms["numReturn"]["startNum"].parentElement.className = "form-group has-error";
        document.forms["numReturn"]["startNum"].focus();
        return false;
    }
   if (endNum == "" || isNaN(endNum) || endNum <= startNum) {
       alert("End number must be filled in with a number that is greater than the start number.");
       document.forms["numReturn"]["endNum"].parentElement.className = "form-group has-error"
       document.forms["numReturn"]["endNum"].focus();
       return false;
   }
      if (stepNum == "" || isNaN(stepNum) || stepNum <= 0) {
       alert("Step number must be filled in with a number that is greater than 0.");
    document.forms["numReturn"]["stepNum"].parentElement.className = "form-group has-error"
    document.forms["numReturn"]["stepNum"].focus();
       return false;}
    else
    console.log ('startNum is' + startNum)
    console.log ('endNum is' + endNum)
    console.log ('stepNum is' + stepNum)
    evenNumbers(startNum,endNum,stepNum);return false;
    }


