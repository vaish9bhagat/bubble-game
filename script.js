var bubble="";
var timer = 60;
var score = 0;

var randn;
function makebubble() {
  bubble="";
  for (var i = 1; i <= 70; i++) {
    var rd = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${rd}</div>`;
  }
  document.querySelector(".down").innerHTML = bubble;
  console.log(bubble);
}

function hit() {
  randn = Math.floor(Math.random() * 10);
  document.querySelector(".hit").innerHTML = randn;
}

function time() {
  var int = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector(".timer").innerHTML = timer;
    } else {
      clearInterval(int);
    }
  }, 1000);
}
function scorep() {
  score += 10;
  document.querySelector(".score").innerHTML = score;
}

document.querySelector(".down").addEventListener("click", (dets) => {
  var num = Number(dets.target.textContent);
  console.log(randn);
  if (num === randn) {
    scorep();

    makebubble();
    hit();
  }
});
time();
makebubble();
hit();
