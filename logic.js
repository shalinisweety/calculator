 //function that display the value
 function dis(val){
    document.getElementById("result").value+=val
   }
    //function that evaluates
     function sol(){
         let x = document.getElementById("result").value
         let y = eval(x)
         DocumentTimeline.getElementById("result").value = y
       }
        //function to clear the display
         function clr(){
             document.getElementById("result").value="0"
           }