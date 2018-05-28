1. Use the MVC architecture to build the app.

Model: a JSON object saved in localStorage;
View: at the present, I haven't learn PUG template. So I decide to hard code this part by using loops and show the JSON data in li elements.

So, the controller and the view and combined together.

2. How the build the system

stage 1: break the task into small jobs described as API functions. ie. append() function will add a text to the JSON object; delete() function will delete a text from the object. 

stage 2: implement these API functions. Method 1: use a config.json file to set up environment varibles and define these functions as callback.

stage 3: write API with pseudocode, and implement it in Chrome console, single/multiply lines.

stage 4: after working out the API, write HTML and event listeners. 