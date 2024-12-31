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
    if (name == "") {
        alert("Please enter a name")
        return false
    } else if (email == "") {
        alert("Please enter an email")
        return false
    } else if (message == "") {
        alert("Please enter a message")
        return false
    }
    return true
}
const sendBtn = document.getElementById('send-message-btn')

sendBtn.addEventListener('click', async () => {
    const nameInput = document.getElementById("name-input")
    const emailInput = document.getElementById("email-input")
    const messageInput = document.getElementById("message-input")
    
    if (!validateMessage(nameInput.value, emailInput.value, messageInput.value)) {
        alert()
        return
    }

    sendBtn.innerHTML = `<svg aria-hidden="true" height="18px"focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg>
    &nbsp;Sending...`
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
    sendBtn.innerHTML = `<svg aria-hidden="true" height="18px"focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg>
    &nbsp;Send Message`
      const result = await response.text();
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email: ' + result);
      }
    } catch (error) {
      console.error('Error:', error);
      sendBtn.innerHTML = `<svg aria-hidden="true" height="18px"focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg>
    &nbsp;Send Message`
      alert('An error occurred while sending the email.');
    }

    nameInput.value = ""
    emailInput.value = ""
    messageInput.value = ""
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
        photo: "images/NBA.png"
    },
    {
        id: 2,
        name: "iOS Reminder App",
        skills: ["HTML","CSS","JavaScript"],
        description: "A user-friendly interface replicating the built-in iOS application, Reminders, built with",
        link: "https://github.com/ronaldnguyen7/iOS-reminders-app",
        photo: "images/reminders.png"
    },
]

const projectRow = document.getElementById("project-row")


const skillButton = (skill) => {
    return `<button class="skill-button">
        ${skill}
    </button>`
}

const projectBox = ( {id, name, skills, description, link, photo} ) => {
    return `<div id="${id}" class="col-12 col-md-6 col-lg-4 p-1 project-container">
        <div class="project-wrapper p-3 animate"> 
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
        <div class="job-wrapper p-3 animate">
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
