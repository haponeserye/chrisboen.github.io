//MAGBUHOS, Chris Boen I.
//IT211

/* The following Javascript codes are equipped with 3 Javascript concepts, which are
Objects, Functions, and Conditionals*/

//Javascript object
const person = {age:17}; 

//Javascript function
function ageVerifier(){
  var ageNum = parseInt(document.getElementById("age").value);

  //Javascript conditional
  if (ageNum == 17){
    document.getElementById("display").innerHTML = "His age is " + person.age + ", and you are correct!";
  }

  else {
    document.getElementById("display").innerHTML = "You are incorrect! Please try again.";
  }
}

