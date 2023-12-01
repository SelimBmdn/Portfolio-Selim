import React, { useState, useEffect } from 'react';
import '../src/styles/App.css'
import PhotoProfil from '../src/assets/PhotoProfile.jpg'
import AppMusculation from '../src/assets/AppMusculation.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="nav-bar">
          <a href="#home">Home</a>
          <a href="#about-me">About</a>
          <a href="#my-skills">Skills</a>
          <a href="#my-projects">Project</a>
          <a href="#contact-me">Contact Me</a>
        </div>


        <div className='social-media'>

          <div className='follow_me'>
            <p>Follow Me ➡️</p>
            <div className='logo'>
              <a href='https://fr.linkedin.com/in/sboumedien'>
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#26DEF2", }} />
              </a>
            </div>

            <div className='logo'>
              <a href='https://github.com/SelimBmdn'>
                <FontAwesomeIcon icon={faGithub} style={{ color: "#26DEF2", }} />
              </a>
            </div>

            <div className='logo'>
              <a href="mailto:selim.boumedien@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#26DEF2", }} />
              </a>
            </div>
          </div>

        </div>

      </div>

      <div className="picture-and-txt">

        <div className='profil_picture'>
          <img src={PhotoProfil} alt='Photo de profile de Selim' />
        </div>

        <div className="txt">
          <h1>Hello 🖐️, I'm Selim Boumedien</h1>
          <p>I am a web developer who recently graduated from Openclassrooms training. I am excited to contribute to innovative projects and continually learn in the ever-changing field of web technology. If you are looking for a motivated and passionate junior web developer, I would be happy to discuss how I could add value to your team.</p>
          <button><a href=''>Voir mon CV</a></button>
        </div>
      </div>


      <div className="about-me">
        <h2>About Me</h2>
        <p>Hello !</p>
      </div>

      <div className="my-skills">
        <h2>My Skills</h2>


        <div className='all-skills'>
        <div class="card">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5" width="80" height="80" />
          <h3>HTML</h3>
          <p>I use this language for creating Websites. </p>


        </div>

        <div class="card">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3" width="80" height="80" />
          <h3>CSS</h3>
          <p>I use this language for styling and designing Websites. </p>


        </div>


        <div class="card">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript" width="80" height="80" />
          <h3>JAVA SCRIPT</h3>
          <p>I use this programming language for making websites responsive and build them with full
            functionality.</p>


        </div>

        <div class="card">
          <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="80"
            height="80" />
          <h3>GITHUB</h3>
          <p>I use this tool for publishing my works and projects in the repository, and also contributing
            in open source projects.</p>

        </div>


        <div class="card">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react" width="100" height="100" />
          <h3>REACT JS</h3>
          <p>I use this framework for making webapp.</p>

        </div>

        <div class="card">
          <img src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" alt="flutter"
            width="80" height="80" />
          <h3>MONGODB</h3>
          <p>I use this DB for build highly available and scalable internet applications. With its flexible schema approach, it's popular with development teams using agile methodologies.</p>
        </div>

        </div>


      </div>

      <div className="my-projects">
        <h2>My projects</h2>

      <div className='projet1'>

        <div className='project_picture'>
          <h3>PFullstack project of a bodybuilding exercise application</h3>
          <p>Developed a bodybuilding exercise app using cutting-edge technologies such as React, Next.js, TypeScript and Chakra UI.</p>
          <a href='https://projet-hero-fullstack.vercel.app/'>
            <img src={AppMusculation} alt='Photo du projet App Musculation' />
          </a>
        </div>
        </div>


      </div>

      <div className="contact-me">
        <h2>Contact Me</h2>
      </div>

      <footer>
        <h2>Follow me</h2>

        <div className='footer-logo'>
          <div className='linkedin_logo'>
            <a href='https://fr.linkedin.com/in/sboumedien'>
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#26DEF2", }} />
            </a>
          </div>

          <div className='github'>
            <a href='https://github.com/SelimBmdn'>
              <FontAwesomeIcon icon={faGithub} style={{ color: "#26DEF2", }} />
            </a>
          </div>

          <div className='gmail'>
            <a href="mailto:selim.boumedien@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#26DEF2", }} />
            </a>
          </div>
        </div>

      </footer>

    </div>
  );
}

export default App;
