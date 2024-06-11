import React from "react";
import "./about-me.css";
import Img from "gatsby-image";
import Hobbies from "./hobbies";

const AboutMe = ({ profileImg, hobbyImgs }) => {
  return (
    <section id="about" className="section">
      <h2 className="text-center">ABOUT ME</h2>
      <div className="section-content">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Profile image"
              alt="Image of Tony"
              sizes={profileImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Who I Am</h4>
            <p>
              I am currently finishing my M.S. in Business Data Science and Analytics at Michigan State University.
              I have a passion for everything data and technology, and I never shy away from a new opportunity to learn. 
              In fact, learning enough web development to build this website was one of my most recent projects, and as 
              my fellow programmers and data scientists know, the learning never stops. 
            </p>
            <h4>What I'm doing</h4>
            <p>
              I recently started a new role as a Finance Analyst Intern at EDL, a renewable energy company with a global portfolio of solar, renewable natural gas, and reciprocating
              engine assets.
            </p>
            <p>
              I am helping others as I advance in my career by sharing my
              experiences and perspectives through writing, speaking, and{" "}
              <a
                href="https://mentors.codingcoach.io/?name=MARIBEL+DURAN"
                target="_blank"
                rel="noopener noreferrer"
              >
                mentoring
              </a>
              .
            </p>
            <p>
              In my free time, I like to make music, listen to neuroscience and data podcasts,
              read tech blogs, and take online courses to help me become a
              better programmer and scientist.
            </p>
            <Hobbies icons={hobbyImgs} />
          </div>
        </div>
        <div className="row">
          <div className=" col-12 col-md-4 col-lg-4 offset-lg-1">
            <div className="box">
              <h5>Toolbox</h5>
              <p>
                <b>Languages and Frameworks:</b> Python, R, SQL, React,
                HTML, Node, MATLAB, Tableau, PowerBI, Microsoft Excel
                <br />
                <b>IDE:</b> Microsoft VS Code
                <br />
                <b>VCS:</b> Git/Github
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 ">
            <div className="box">
              <h5>Learning</h5>
              <p>
                Currently: GraphQL, Typescript, Accessibility
                <br /> On the radar: Web Performance
              </p>
            </div>
          </div>
          <div className="col-lg-4  col-md-4 col-6 ">
            <div className="box">
              <h5>Working On</h5>
              <p>
                {" "}
                1) Adding value to the finance team and other stakeholder groups at EDL throughout my internship. 
                <br />
                2) Making this website more{" "}
                <a
                  href="https://github.com/maribelduran/personal-portfolio-v2/pull/14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  accessible
                </a>
                .
                <br />
                3) Continuing my summer classes for my M.S. program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;