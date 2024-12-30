function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

// Contact Form email
const validateMessage = (name, email, message) => {
    if (name == "" || email == "" || message == "") {
        return false
    }
    return true
}
const sendBtn = document.getElementById('send-message-btn')

sendBtn.addEventListener('click', async () => {
    const nameInput = document.getElementById("name-input")
    const emailInput = document.getElementById("email-input")
    const messageInput = document.getElementById("message-input")
    
    validateMessage(nameInput.value, emailInput.value, messageInput.value)

    const message = `${nameInput.value}\n${emailInput.value}\n${messageInput.value}`

    try {
      const response = await fetch('https://portfolio-website-inkm.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'ronaldnguyen555@gmail.com',
          subject: 'Portfolio Website Message',
          text: message,
        }),
      });

      const result = await response.text();
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email: ' + result);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    }

    nameInput.value = ""
    emailInput.value == ""
    messageInput.value == ""
  });


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
        <div class="project-wrapper p-3"> 
        <img class="project-photo" src="${photo}">
            <div class="project-information mt-3">
                <h3 id="project-title-text">${name} | <button id="github-link"><a href="${link}">GitHub</a></button></h3>
                <h4 id="project-description-text">${description}</h4>
        
                    ${ skills.map( skill => skillButton(skill)).join('')  }

            </div>
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
