
function myfunction(){
    var userQuestion
    var respomse =  document.getElementById("response").innerHTML

    userquestion= document.getElementById("sure").nodeValue;
    document.getElementById("question").innerHTML = userrQuestion;
    var randomNum = Math.floor(Math.random() * 10 + 1);
    console.log(randomNum)
   switch (randomNum) {
       case 1:
       response = "Nope"
       document.getElementById("response").innerHTML = "Nope"
       break;
       case 2:
         response = "Yep"
         document.getElementById("response").innerHTML = "Yep"
         break;
        case 3:
          response = "Almost"
          document.getElementById("response").innerHTML = "Almost"
        break;
        case 4:
          response = "The"
          document.getElementById("response").innerHTML = "The"
        break;
        case 5:
          response = "Steelers"
          document.getElementById("response").innerHTML = "Steelers"
        break;
        case 6:
          response = "Are"
          document.getElementById("response").innerHTML = "Are"
        break;
        case 7:
          response = "Going to"
          document.getElementById("response").innerHTML = "Going to"
        break;
        case 8:
          response = "Win"
          document.getElementById("response").innerHTML = "Win"
        break;
        case 9:
          response = "The"
          document.getElementById("response").innerHTML = "The"
        break;
        case 10:
          response = "Superbowl"
          document.getElementById("response").innerHTML = "Superbowl"
        break;
   }
   
}