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


const skillButton = (skill) => {
    return `<button class="skill-button">
        ${skill}
    </button>`
}

const projectBox = ( {id, name, skills, description, link, photo} ) => {
    return `<div id="${id}" class="col-12 col-md-6 col-lg-4 p-2 project-container">
        <div class="project-wrapper p-2"> 
            <img class="project-photo" src="${photo}">

            <h3 id="project-title-text">${name}</h3>
        <h4 id="project-description-text">${description}</h4>
        
        
        ${ skills.map( skill => skillButton(skill)).join('')  }
        

        <button id="github-link"><a href="${link}">GitHub</a></button>
        </div>
    </div>`
}

projectRow.innerHTML += projects.map( (project) => projectBox(project) ).join('')

const jobs = [
    {
        id : 0,
        company : "Imperial Lion Dance",
        title : "Web Development Intern",
        description : "Redesign and redevelop organization's website using",
        skills : ["JavaScript"],
        beginning : "May 2024",
        ending : "August 2024"
    }
]

const jobRow = document.getElementById("experience-row")

const jobBox = ( job ) => {
    return `<div class="job-container d-flex align-items-center">
        <div class="job-wrapper p-3">
            <div class=" row job-title-container d-flex align-items-center justify-content-between">
                <p id="job-title-text" class="col-12 col-lg-6">${job.title}</p>

                <p id="job-length-text" class="col-12 col-lg-6">${job.beginning} - ${job.ending}</p>
            </div>

            <p id="job-company-text">${job.company}</p>

            <p id="job-description-text">${job.description}</p>

            ${ job.skills.map( skill => skillButton(skill)).join('')  }
        </div>
    </div>`
}

jobRow.innerHTML += jobs.map ( (job) => jobBox(job) ).join("")
