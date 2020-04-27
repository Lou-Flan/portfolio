var coloursArray = [];
var projectsArray = [
    {
        resource: "codepen", 
        title: "pikachu", 
        categories: ["css.", "front-end"]
    },
    {
        resource: "codepen", 
        title: "debugger ducky", 
        categories: ["css.", "front-end"]
    }
];
// var projectBox = document.getElementsByClassName('projects');
function generateProjects(){

    projectsArray.forEach((key, value) => {
        var resource = key.resource;
        var title = key.title;
        var categories = key.categories;
        console.log(resource, title, categories)
        //iterate over categories & create li for each

        // add each variable to the projects div inside it's own div
        // select random background colour
        // link background image in array

    })
}

// function to add animation and set bg to image from array

generateProjects();
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
