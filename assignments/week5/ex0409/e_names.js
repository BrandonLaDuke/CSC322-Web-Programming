function e_names() {
  var names = ["Brandon", "Alexis", "Brandy", "Cortney", "Bailey", "Freddie", "Jackson", "Abigial", "Nolan", "Erin", "Alieta", "Haley", "Lucas"];
  console.log(names);
  var arrayLength = names.length;
  var count = 0;
  var counte = 0;
  for (var i = 0; i < arrayLength; i++) {

    if (names[i].slice(-2) === "ie" || names[i].slice(-1) === "y") {
      console.log(names[i]);
      counte = counte + 1;
      console.log(counte);
    }
    count = count + 1;
  }
  document.getElementById('result').innerHTML = counte + " out of " + count;
}
