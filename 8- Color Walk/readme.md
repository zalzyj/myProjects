Color Walk:
===================================

You start in the upper left corner of the gameboard at the grey square. Use the buttons to take over neighboring squares of the same color. The goal is to clear the field in as few moves as possible.

gameboard: a 30*20 squares each with a random of 5 colors. The color of the upper left box is grey. 
Color buttons: Once a color button is clicked, all the boxes arround the grey area will be colored grey.

===========================================

solution: 1) we need to show the gameboard from an array(20,30). Each element has a integer 1-5 to represent a random color (1:skyblue, 2:darkblue, 3:pink, 4: purple, 5:orange), except array[0,0]=0 means grey. 
2) for all the color buttons, defines a callback function onClick(), input is the color and the output is a new array that the neighboring squares of the same color are 0.

3) Then render the gameboard with the new array.

4) if all elements of the new array are 0, the game is over 
==========================================
HTML

define a div for gameboard, id="gameboard", 
another div, id="control_container", for color buttons
and another div, id="game_over", with a link "play again" if clicked refresh the page.
==========================================

Pseudocode:

Algorithm: createInitArray(m,n,k)
requires: m rows, n columns
returns: an array that satisfy the conditions, arr[0,0]=0 and all other elements are 1-k

Algorithm: addGameboard(m,n)
requires: m rows, n columns
returns: true if the new DOM tree is created or false otherwise
    first create the new DOM tree 
    then render all boxes with a color;

Algorithm: addColorButtons(arr)
requires: an array n colors
returns: true if the new DOM tree is created or false otherwise
    first create the new DOM tree 
    then add EventListeners to the buttons;

Algorithm: render(arr)
requires: an array arr[m,n]
returns: true if the gameboard is rendered or false otherwise

Algorithm: isOver(arr)
requires: an array arr[m,n]
returns: true if all elements of arr are 0 or false otherwise

Algorithm: onClick(color)
requires: a color 1-5
returns: null
    first change arr according to the color
    then render(arr);
    if isOver(arr) {
        show game_over div
    }
    
Algorithm changeArray(color)
requires: a color 1-5
returns: null
    for each element, find its neighbours.
    then all the neighbours are not 0;


init()
// arr is the global array
const color = ["grey", "skyblue", "darkblue", "pink", "purple", "orange"]
find the hexadecimal color
Pink	粉红	#FFC0CB
Purple	紫色	#800080
SkyBlue	天蓝色	#87CEEB
DarkBlue	深蓝色	#00008B
Orange	橙色	#FFA500
WhiteSmoke	白烟	#F5F5F5

const color = ["#F5F5F5", "#87CEEB", "#00008B", "#FFC0CB", "#800080", "#FFA500"];
const m = 20, n = 30;

var arr = createInitArray(m,n, color.length-1);

addGameboard(m, n);
addColorButtons();
render(arr);