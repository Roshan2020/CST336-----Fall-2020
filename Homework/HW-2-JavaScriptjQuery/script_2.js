window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var words;              // Array of words
  var getHint ;           // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
    
  }
    

  // Create geusses ul
  result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  
  // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
  head = function(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
  }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
  }

  frame1 = function() {
    draw (0, 150, 150, 150);
  };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


  // OnClick Function
  check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    
    words = ["arkansas", "california", "connecticut", "delaware", "florida", "georgia", "hawaii", "illinois", "indiana", "kansas", "maryland", "massachusetts", "michigan", "nebraska", "nevada", "new-hampshire", "ohio", "rhode-island", "utah", "washington"];

    
    word = words[Math.floor(Math.random() * words.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    canvas();
  }

  play();
  
  // Hint
  hint.onclick = function() {

    hints = ["The only active diamond mine in the U.S.!", "A gold rush began in this state in 1848!", "The 'Constitution State' is this state's nickname!", "It is the second-smallest state in the United States!", "Walt Disney World and Epcot Center are in this state!", "This state is named after a British king!", "This state used to be an independent nation!", "The tallest building in the United States can be found in this state!", "This state hosts a famous car race!", "This state leads the United States in cattle and wheat production!", "This state was named after a queen of England!", "The first World Series was played in this state!", "You will find three mottos on this state's flag!", "This state is nicknamed the 'Cornhusker State'!", "Hoover Dam is in this state!", "This state's motto is 'Live Free or Die'!", "The first professional baseball team was established in this state!", "This state is the smallest state in the United States!", "This state is home to the Great Salt Lake!", "This state is the only state named after a U.S. president!"];

    
    var hintIndex = words.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [hintIndex];
  };

  // Reset
  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }

  // Home Page
  document.getElementById('home').onclick = function() {
    location.href = "index.html";
  }

  // Veteran Page
  document.getElementById('tryH').onclick = function() {
    location.href = "veteran.html";
  }

  // Regular Page
  document.getElementById('tryE').onclick = function() {
    location.href = "regular.html";
  }
}