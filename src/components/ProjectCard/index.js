import "./index.css";

export default function ProjectCard(props) {
  const { projectDetails } = props;
  const { projectName, description, linkUrl, imageUrl, id } = projectDetails;
  return id % 2 !== 0 ? (
    <div className="projectCard">
      <div className="projectDescription">
        <h2 className="Route2ProjectName">{projectName}</h2>
        <p className="Route2ProjectDesc">{description}</p>
        <a href={linkUrl}>
          <button type="button" className="ProjectLink">
            View Project
          </button>
        </a>
      </div>
      <div className="projectImage">
        <img src={imageUrl} alt="projectImage" className="ImageRight" />
      </div>
    </div>
  ) : (
    <div className="projectCard">
      <div className="projectImage">
        <img src={imageUrl} alt="projectImage" className="ImageLeft" />
      </div>
      <div className="projectDescription">
        <h2 className="Route2ProjectName">{projectName}</h2>
        <p className="Route2ProjectDesc">{description}</p>
        <a href={linkUrl}>
          <button type="button" className="ProjectLink">
            View Project
          </button>
        </a>
      </div>
    </div>
  );
}
