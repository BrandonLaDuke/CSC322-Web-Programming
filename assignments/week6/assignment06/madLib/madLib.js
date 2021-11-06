function createMadLib() {
  const wordArray = [];
  // I thought about a few diffrent ways to build it but this seemed the
  // cleanest way to do so.
  for (var i = 1; i < 16; i++) {
    let varID = "word-" + [i];
    var varResponceID = "word-" + [i] + "r";
    wordArray[i] = document.getElementById(varID).value;
    document.getElementById(varResponceID).innerHTML = wordArray[i];
  }
  document.getElementById('madLibComplete').classList.remove('hidden');
}
