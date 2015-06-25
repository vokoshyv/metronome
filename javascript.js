var increment = function(){
  var work = document.getElementsByClassName("number");
  work[0].innerHTML = Number(work[0].innerHTML) + 1;
}

var decrement = function(){
  var work = document.getElementsByClassName("number");
  work[0].innerHTML = Math.max(Number(work[0].innerHTML) - 1, 1);
}

var addFlash = function(){
  var work = document.getElementsByClassName("flashingLight");
  work[0].classList.add("darkened");
}

var takeFlash = function(){
  var work = document.getElementsByClassName("flashingLight");
  work[0].className = work[0].className.replace(/\bdarkened\b/,'');
}

var pulse = function(){
  addFlash();
  window.setTimeout(takeFlash, 100);
}

var blink;

var runMetronome = function(){
  var work = document.getElementsByClassName("number");
  var metroSpeed = Number(work[0].innerHTML);
  console.log(typeof metroSpeed);
  blink = setInterval(pulse, 1000);
}

var stopMetronome = function(){
  clearInterval(blink);
}