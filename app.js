// Wait for the page to load first
  window.onload = function() {

    // Get a reference to the link on the page
    // with an id of "mylink"
    var randomize = document.getElementById('randomize');

    // Set code to run when the link is clicked
    // by assigning a function to "onclick"
    randomize.onclick = function() {

      // Gets user input
      var text = document.getElementById('input').value;

      // Splits into array
      var text_array = text.split('\n');

      // Iterates through array and chooses random list item
      var choice = text_array[Math.floor(Math.random()*text_array.length)];

      // Writes array to result div
      document.getElementById('result').innerHTML = choice;

      // Apparently some sort of best practice?
      return false;

    }

    /* Timer */
    var start = document.getElementById('start');
    start.classList.add("hide");

    start.onclick = function() {
      this.classList.add("hide");
      var timeoutHandle;
      function countdown(minutes) {
          var seconds = 60;
          var mins = minutes
          function tick() {
              var counter = document.getElementById("timer");
              var current_minutes = mins-1
              seconds--;
              counter.innerHTML =
              current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
              if( seconds > 0 ) {
                  timeoutHandle=setTimeout(tick, 1000);
              } else {

                  if(mins > 1){

                     // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                     setTimeout(function () { countdown(mins - 1); }, 1000);

                  }
              }
          }
          tick();
      }
      countdown(25);
    }

  }
