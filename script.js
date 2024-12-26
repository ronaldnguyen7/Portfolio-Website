function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

const projects = [
    {
        id: 0,
        name: "Flappy Bird",
        skills: ["Python", "Pygame"],
        description: "A clone of the popular Flappy Bird game, built with",
        link: "https://github.com/ronaldnguyen7/flappy-bird-game",
        photo: "images/flappy.png"
    },
    {   
        id: 1,
        name: "NBA Player Position Prediction",
        skills: ["Python", "SciKit-Learn", "KNN"],
        description: "An algorithm that analyzes NBA player statistics and predict player positions using",
        link: "https://github.com/ronaldnguyen7/KNN-NBA-Player-Position-Prediction",
        photo: ""
    },
    {
        id: 2,
        name: "iOS Reminder App",
        skills: ["HTML","CSS","JavaScript"],
        description: "A user-friendly interface replicating the built-in iOS application, Reminders, built with",
        link: "https://github.com/ronaldnguyen7/iOS-reminders-app",
        photo: " "
    }
]

const projectRow = document.getElementById("project-row")

const projectBox = ( {id, name, skills, description, link, photo} ) => {
    return `<div id="${id}" class="col-12 col-md-6 col-xl-4 p-2 project-container"> 
        <img class="project-photo" src="${photo}">

        <h3 id="project-title-text">${name}</h3>
        <h4 id="project-description-text">${description}</h4>
        <h4 id="skills">${ skills.map(skill => `#${skill}`).join(' ') }</h4>
        <button id="github-link"><a href="${link}">GitHub</a></button>
    </div>`
}

projectRow.innerHTML += projects.map( (project) => projectBox(project) ).join('')