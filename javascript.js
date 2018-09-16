// increases the speed of the metronome
var increment = function(){
  var work = document.getElementsByClassName("number");
  work[0].innerHTML = Number(work[0].innerHTML) + 1;
  stopMetronome();
}

var plusFive = function(){
    var work = document.getElementsByClassName("number");
    work[0].innerHTML = Number(work[0].innerHTML) + 5;
    stopMetronome();
}

// decreases the speed of the metronome
var decrement = function(){
  var work = document.getElementsByClassName("number");
  work[0].innerHTML = Math.max(Number(work[0].innerHTML) - 1, 1);
  stopMetronome();
}

var minusFive = function(){
    var work = document.getElementsByClassName("number");
    work[0].innerHTML = Math.max(Number(work[0].innerHTML) - 5, 1);
    stopMetronome();
}


// adds class to div to simulate blink of metronome
var addFlash = function(){
  var sound = new Audio("beat.wav");
  sound.play();
  var work = document.getElementsByClassName("flashingLight");
  work[0].classList.add("darkened");
}

// takes class away from div to make div blank
var takeFlash = function(){
  var work = document.getElementsByClassName("flashingLight");
  work[0].className = work[0].className.replace(/\bdarkened\b/,'');
}

//
var pulse = function(){
  addFlash();
  window.setTimeout(takeFlash, 100);
}

var blink;
var metroCheck = true;

var runMetronome = function(){

  if (metroCheck){
    var work = document.getElementsByClassName("number");

    // in beats per minute
    var metroSpeed = Number(work[0].innerHTML);

    // in beats per second
    metroSpeed = metroSpeed / 60;

    metroSpeed = 1 / metroSpeed;
    metroSpeed = 1000 * metroSpeed;

    blink = setInterval(pulse, metroSpeed);
    metroCheck = false;
  }
}

var stopMetronome = function(){
  clearInterval(blink);
  metroCheck = true;
}

var reset = function(){
    var work = document.getElementsByClassName("number");
    work[0].innerHTML = 60;
    stopMetronome();
}
