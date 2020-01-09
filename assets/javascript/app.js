
var number = 10;
var right = 0;
var wrong = 0;
var answerOne = "storm";

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;
$("#questionOne").hide()
//  When the stop button gets clicked, run the stop function.
$("#start").on("click", start);





//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#questionOne").show()
    $("#start").hide()

}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>Time Remaining: " + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        //alert("Time Up!");
        if($("input[type='radio'].radioBtnClass").is(':checked')) {
            var card_type = $("input[type='radio'].radioBtnClass:checked").val();
            if (answerOne === card_type){
                alert("you got it!")
            }
            else{
                alert("you suck")
            }
        
    }
    
}
    
}
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }



