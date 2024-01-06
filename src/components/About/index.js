import { Link } from "react-router-dom";
import AddProject from "../AddProject";
import "./index.css";

export default function About() {
  return (
    <div>
      <div className="about-container">
        <img
          src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1704386752/project_img1_tijbdw.png"
          alt="top"
          className="mobile-image"
        />
        <div>
          <h1>Hello, my name is China Rayudu</h1>
          <p className="about-para">
            Aspiring Full Stack Developer | Learned at CCBP 4.0 Intensive |
            Html, CSS, Bootstrap, Python , javascript, Sql, Node js , React
            js,Express,MongoDb,JAVA
          </p>
          <div>
            <Link to="/projects">
              <button type="button" className="btn">
                Projects
              </button>
            </Link>
            <button type="button" className="btn lin-btn">
              <a
                href="https://www.linkedin.com/in/chinna-rayudu-bellary-1a2a07238"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </button>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1704386752/project_img1_tijbdw.png"
          alt="top"
          className="top-image"
        />
      </div>
      <div>
        <AddProject />
      </div>
    </div>
  );
}
