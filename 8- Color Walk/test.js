function addGameboard(m, n) {
    var iDiv = document.getElementById('gameboard');
    var innerDiv = [];
    for (var j = 0; j < n; j++) {

        innerDiv[j] = document.createElement('div');
        innerDiv[j].className = "box";
        innerDiv[j].style.backgroundColor = color[arr[0][j]];
        iDiv.appendChild(innerDiv[j]);
        innerDiv[j].style.cssFloat = "left";
    }
    divider = document.createElement('div');
    divider.style.clear = "both";
    iDiv.appendChild(divider);
    for (var j = 0; j < n; j++) {

        innerDiv[j+n] = document.createElement('div');
        innerDiv[j+n].className = "box";
        innerDiv[j+n].style.backgroundColor = color[arr[1][j]];
        iDiv.appendChild(innerDiv[j+n]);
        innerDiv[j+n].style.cssFloat = "left";
    }

}