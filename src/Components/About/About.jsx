import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>Experienced Python Developer with a strong command of Python programming language, Django, and React frameworks. Proven track record of designing and implementing robust and scalable software solutions. Seeking an engaging role in a dynamic work environment where I can apply my expertise in Python development, contribute to innovative projects, and foster continuous learning and collaboration for organizational growth.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Html & Css</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>Django</p>
              <hr style={{ width: "87%" }} />
            </div>
            <div className="about-skill">
              <p>Mysql</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
        <div className="about-achivements">
          <div className="about-achivement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>1+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
