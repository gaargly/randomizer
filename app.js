// Wait for the page to load first
  window.onload = function() {

    // Get a reference to the link on the page
    // with an id of "mylink"
    var a = document.getElementById('button');

    // Set code to run when the link is clicked
    // by assigning a function to "onclick"
    a.onclick = function() {

      // Gets user input
      var text = document.getElementById('input').value;

      // Splits into array
      var text_array = text.split('\n');

      // Iterates through array and chooses random list item

      // Writes array to result div
      document.getElementById('result').innerHTML = text_array;

      // Apparently some sort of best practice?
      return false;

    }
  }
