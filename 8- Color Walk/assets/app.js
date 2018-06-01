const color = [
  "#F5F5F5",
  "#87CEEB",
  "#00008B",
  "#FFC0CB",
  "#800080",
  "#FFA500"
];
const m = 20,
  n = 30;

var arr = createInitArray(m, n, color.length - 1);
var divider = [];
var innerDiv = new Array(m);
for (var i = 0; i < m; i++) {
  innerDiv[i] = new Array(n);
}
addGameboard(m, n);
addColorButtons();

function createInitArray(m, n, k) {
  var x = new Array(m);
  for (var i = 0; i < m; i++) {
    x[i] = new Array(n);
  }
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      x[i][j] = Math.floor(Math.random() * k) + 1;
    }
  }
  x[0][0] = 0;
  return x;
}

function addGameboard(m, n) {
  var iDiv = document.getElementById("gameboard");

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      innerDiv[i][j] = document.createElement("div");
      innerDiv[i][j].className = "box";
      innerDiv[i][j].style.backgroundColor = color[arr[i][j]];
      iDiv.appendChild(innerDiv[i][j]);
      innerDiv[i][j].style.cssFloat = "left";
    }
    divider[i] = document.createElement("div");
    divider[i].style.clear = "both";
    iDiv.appendChild(divider[i]);
  }
}

function addColorButtons() {
  var iDiv = document.getElementById("control_container");
  var innerDiv = [];
  var divider;
  for (var i = 1; i < color.length; i++) {
    innerDiv[i] = document.createElement("div");
    innerDiv[i].className = "colorButton";
    innerDiv[i].id = i;
    innerDiv[i].style.backgroundColor = color[i];
    iDiv.appendChild(innerDiv[i]);
    innerDiv[i].style.cssFloat = "left";
    innerDiv[i].addEventListener("click", clickHandler, false);
  }
  divider = document.createElement("div");
  divider.style.clear = "both";
  iDiv.appendChild(divider);
}
function clickHandler() {
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (arr[i][j] == parseInt(this.id)) {
        if (i - 1 >= 0) {
          if (arr[i - 1][j] == 0) arr[i][j] = 0;
        }
        if (j - 1 >= 0) {
          if (arr[i][j - 1] == 0) arr[i][j] = 0;
        }
        if (i+1<m){
            if (arr[i + 1][j] == 0) arr[i][j] = 0;
        }
        if (j+1<n){
            if (arr[i][j+1] == 0) arr[i][j] = 0;
        }
      }
    }
  }
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      innerDiv[i][j].style.backgroundColor = color[arr[i][j]];
    }
  }
}
