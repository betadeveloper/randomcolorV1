let background = document.querySelector("body");
var colors = [];
var i = 0;

function hide() {
  var x = document.querySelector("header");
  var y = document.querySelector(".fade-in");
  if (x.style.opacity == 1, y.style.opacity == 1) {
    x.style.opacity = 0;
    y.style.opacity = 0;
  } else {
    x.style.opacity = 1;
    y.style.opacity = 1;
  }
}

function changeBackground() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var color = "rgb(" + r + ", " + g + ", " + b + ")";
  if(i == colors.length) {
  colors.push(color);
  }
  console.log("Color array index: " + i);
  console.log(colors);
  background.style.backgroundColor = colors[i];
  document.querySelector(".color").innerHTML = colors[i];
  if(i >= 0){ i++ }
}

function goBack() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var color = "rgb(" + r + ", " + g + ", " + b + ")";
  if(i >= 2){ i--; };
  background.style.backgroundColor = colors[i-1];
  document.querySelector(".color").innerHTML = colors[i-1];
  if (colors[colors.length-i] == undefined)
    {
      document.querySelector(".color").innerHTML = colors[0];
    }
  if (colors[i-1] == undefined) {
     document.querySelector(".color").innerHTML = "";
  }
  console.log("Color array index: " + (i-1));
  console.log(colors);
}

document.querySelector("#button").addEventListener("click", changeBackground);
document.querySelector("#backButton").addEventListener("click", goBack);
