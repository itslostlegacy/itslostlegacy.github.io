let i = 0;
let title = 'ItsLostLegacy';
let speed = 50; 

function typeWriter() {
  if (i < title.length) {
    document.getElementById("title").innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
