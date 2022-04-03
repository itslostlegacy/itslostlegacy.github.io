let i = 0;
let title = 'ItsLostLegacy';
let speed = 100; 

function typeWriter() {
  if (i < title.length) {
    document.getElementById("title").innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

async function secretFunction() {
  document.getElementById("btn").innerHTML = "what did i tell you?";
  var height = document.body.clientHeight - 200;
  var width = document.body.clientWidth - 200;
  var b = document.querySelector("button");
  b.addEventListener("click", secretFunction);
  
  var i = Math.floor(Math.random() * (width - 0) + 0);
  var j = Math.floor(Math.random() * (height - 0) + 0)
  b.style.left = i+"px";
  b.style.top = j+"px";
  b.style.display = "block";
  b.style.position = "absolute";
}