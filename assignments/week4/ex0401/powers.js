function alertTable() {
    var table = "";
    // Iterate through Powers
    for (var i = 15; i < 26; i++) {
        //Create headings, not easy to display in an alert.
        if (i === 15) {
          table += "#" + "  " + "Sq" + "  " + "Cube" + "\n";
        }
        // Add lines to table string for each Power
        table += i + "  " + i*i + "  " + i*i*i + "\n";
    }
    alert(table);
}
