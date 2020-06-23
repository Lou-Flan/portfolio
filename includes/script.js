let title = document.getElementById('title');
let viewportWidth;
let nav = document.getElementById('navList');
let rainbow = document.getElementById('left');
let container = document.getElementById('container');

let setWidth = function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

let responsiveTitle = function () {
    if(title){
        return viewportWidth < 600 ? title.textContent = "hi." : 
        (viewportWidth < 1200) ? title.textContent = "hello.": 
        title.textContent = "nice to meet you.";
    } 
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
var projectTitle = document.getElementById("project-title");

function changeColour(element) {
    if(title){
        title.style.color = element; 
    }   
    if(projectTitle){
        projectTitle.style.color = element;
    }
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
