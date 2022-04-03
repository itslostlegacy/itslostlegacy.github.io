let i = 0;
let title = 'ItsLostLegacy';
let speed = 100; 
let counter = 0;

function typeWriter() {
  if (i < title.length) {
    document.getElementById("title").innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

async function secretFunction() {
  counter += 1;

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

  if (counter == 17){
    document.getElementById("btn").innerHTML = "ok, this is the last one, i promise.";
  }
  else if (counter == 19){
    const response = await fetch("http://ip-api.com/json/");
    const data = await response.json();
    document.getElementById("annoying").innerHTML = data.query;
    b.style.left = null;
    b.style.top = null;
    b.style.display = null;
    b.style.position = null;
  }
}