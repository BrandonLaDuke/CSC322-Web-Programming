function tst_names() {
  // Get name
  var string1 = document.getElementById('firstName').value;
  var string2 = document.getElementById('lastName').value;
  var letter = document.getElementById('initial').value;

  var result = "";
  var error = "";
  var i = 0;
  var character='';
  while (i <= string1.length-1) {
    character = string1.charAt(i);
    if (!isNaN(character * 1)) {
        console.log('Field contains a number');
        error += "Error in First Name. Field contains a number<br>";
        break;
    } else {
      // Checking for First letter to be capatalized and the third letter
      // because some names have the third letter capitalized.
      if (character == character.toUpperCase() && i == 0 || i == 2) {
        console.log('First Letter True');
        result += character;
      } else if (character == character.toLowerCase() && i == 0) {
        console.log('First Letter False');
        error += "Error in First Name. First letter is lowercase<br>";
        break;
      } else if (character == character.toLowerCase() && i != 0){
        console.log('lower case true');
        result += character;
      } else if (character == character.toUpperCase() && i != 0) {
        console.log('lower case false');
        error += "Error in First Name. A letter is lowercase other then the first or third letter.<br>";
        break;
      } else {
        console.log('other problem');
      }
    }
    i++;
  }
  result += ", ";
  var i = 0;
  var character='';
  while (i <= string2.length - 1) {
    character = string2.charAt(i);
    if (!isNaN(character * 1)) {
        console.log('Field contains a number');
        error += "Error in Last Name. Field contains a number<br>";
        break;
    } else {
      // Checking if first and third letter is capitalized because some names
      // like mine has a third letter capitalized.
      if (character == character.toUpperCase() && i == 0 || i == 2) {
        console.log('First Letter True');
        result += character;
      } else if (character == character.toLowerCase() && i == 0) {
        console.log('First Letter False');
        error += "Error in Last Name. First letter is lowercase<br>";
        break;
      } else if (character == character.toLowerCase() && i != 0){
        console.log('lower case true');
        result += character;
      } else if (character == character.toUpperCase() && i != 0) {
        console.log('lower case false');
        error += "Error in Last Name. A letter is lowercase other then the first or third letter.<br>";
        break;
      } else {
        console.log('other problem');
      }
    }
    i++;
  }
  result += ", ";
  var i = 0;
  var character='';
  while (i <= letter.length - 1) {
    character = letter.charAt(i);
    if (!isNaN(character * 1)) {
        console.log('Field contains a number');
        error += "Error in Intinal. Field contains a number<br>";
        break;
    } else {
      if (character == character.toUpperCase() && i == 0 || i == 2) {
        console.log('Initial True');
        result += character;
      } else if (character == character.toLowerCase() && i == 0) {
        console.log('First Letter False');
        error += "Error in Initial. Letter is lowercase<br>";
        break;
      } else {
        console.log('other problem');
      }
    }
    i++;
  }
  if (error == "") {
    document.getElementById('status').innerHTML = "Names tested True";
  } else {
    document.getElementById('status').innerHTML = error;
  }
  document.getElementById('result').innerHTML = result;

}
