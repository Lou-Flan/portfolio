
// var projectArray = [
//     {
//         resource:"codepen", 
//         title:"pikachu", 
//         categoryOne:"css"
//     },
//     {
//         resource:"codepen", 
//         title:"debugger ducky", 
//         categoryOne:"css"
//     }
// ];
// var projectBox = document.getElementsByClassName('projects');

// projectArray.forEach((key, value) => {
//     let projectDiv = document.createElement("div");
//     var p = document.createElement('p');
//     // var pText = document.createTextNode(key.name);
//     p.textContent = key.resource;
//     console.log(p);
//     // p.appendChild(pText);
//     projectDiv.appendChild(p);
//     // $("#output").append('<p>' + key.name + '</p>');
  
// });


// each project in projectArray
// #pikachu
//     p.resource= project.resource
//     h3= project.name
//     ul.categories
//         li= project.categoryOne
//         li= project.categoryTwo
//         li= project.categoryThree

let title = document.getElementById('title');
let viewportWidth;
let nav = document.getElementById('navList');
let rainbow = document.getElementById('left');
let container = document.getElementById('container');

let setWidth = function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

let responsiveTitle = function () {
    if(viewportWidth < 600){
        title.textContent = "hi."; 
        title.style.fontSize = "9rem";
        navList.style.flexDirection = "column";
        navList.style.alignContent = "flex-end";
        navList.style.alignItems = "flex-end";
        rainbow.style.display = "none";
        container.style.width = "90vw"
        return};
    if (viewportWidth < 1200) {
        title.textContent = "hello."
        title.style.fontSize = "8rem";
        navList.style.flexDirection = "row";
        rainbow.style.display = "block";
        container.style.width = "75vw"
        return };
    title.textContent = "nice to meet you.";
    title.style.fontSize = "7rem"; 
    navList.style.flexDirection = "row";
    rainbow.style.display = "block";
    container.style.width = "65vw"
    return 
}

setWidth();
responsiveTitle();

window.addEventListener('resize', function () {
    setWidth();
    responsiveTitle();
}, false);

// RAINBOW BACKGROUND CHANGE

var yellow = document.getElementById("yellow");
var pink = document.getElementById("pink");
var green = document.getElementById("green");
var inner = document.getElementById("inner");
var body = document.querySelector("body");

function changeColour(element) {
	// body.style.background = element;
	// inner.style.background = element;
    title.style.color = element;
}

yellow.addEventListener("click", () => {
    changeColour("#ffce00");
});
pink.addEventListener("click", () => {
	changeColour("#ff3675");
});
green.addEventListener("click", () => {
	changeColour("#30d6af");
});

outer.addEventListener(
	"click",
	function (event) {
		event.preventDefault;
		outer.classList.remove("run-animation");
		void outer.offsetWidth;
		outer.classList.add("run-animation");
	},
	false
);
