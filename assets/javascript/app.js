
var number = 10;
var right = 0;
var wrong = 0;
var answerOne = "storm";
var answerTwo = "Hope";
var answerThree = "speedforce";

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;
$("#questionOne").hide()
$("#questionTwo").hide()
$("#questionThree").hide()
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
    $("#questionTwo").show()
    $("#questionThree").show()
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

        
        if($("input[type='radio'].radioBtnClass1").is(':checked')) {
            var card_type = $("input[type='radio'].radioBtnClass1:checked").val();
            
            if (card_type === answerOne ){ //for correct guess
                
                right++
                
                
            }
            else{ //for wrong guess
                
                wrong++
                
                
            }

    }
        else{ //for unchecked box
        wrong++
        
        }
   if($("input[type='radio'].radioBtnClass2").is(':checked')) {
        var card_typetwo = $("input[type='radio'].radioBtnClass2:checked").val();
        if (answerTwo === card_typetwo){
            
            right++
        }
        else{
            
            wrong++
        }
    
}
    else{ //for unchecked box
    wrong++
    
    }
    if($("input[type='radio'].radioBtnClass3").is(':checked')) {
    var card_type3 = $("input[type='radio'].radioBtnClass3:checked").val();
    if (answerThree === card_type3){
        
            right++
        }
        else{
            
            wrong++
        }
    
}
    else{ //for unchecked box
    wrong++
    
    }
    end()
}

}

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

function end(){
$("#questionOne").hide()
$("#questionTwo").hide()
$("#questionThree").hide()
$("#correct").html("Correct " +right)
$("#incorrect").html("Incorrect " +wrong)
}