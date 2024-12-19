import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Image or avatar (use a placeholder or a custom image) */}
        <div className="col-md-4 text-center">
          <img
            src="https://private-avatars.githubusercontent.com/u/188079659?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NDU2MDAsIm5iZiI6MTczNDY0NDQwMCwicGF0aCI6Ii91LzE4ODA3OTY1OSJ9.bUA75q6KMrbwoGJIp8Nvos9glv4Xysre6f5DStitZQY&v=4"
            alt="Mariluz Avatar"
            className="img-fluid shadow"
          />
        </div>
        {/* Developer's information */}
        <div className="col-md-8 d-flex flex-column justify-content-center">
          <h1 className="fw-bold">About Mariluz</h1>
          <p className="lead">
            Hi, I'm <strong>Mariluz</strong>, a passionate software developer
            focused on creating modern and functional web applications. I love
            working with technologies like React, Node.js, and Bootstrap, and I
            enjoy solving complex problems with simple and elegant solutions.
          </p>
          <p>
            In my free time, I dedicate myself to learning new tools,
            contributing to open-source projects, and exploring the ever-evolving
            world of software development.
          </p>
          <div>
            <a
              href="https://github.com/Mariluz2024"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{background: '#D66BA0', color: 'white'}}
            >
              Visit my GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
