import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, techStack, url, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} id="tabCenter">
      <div className="project-image">
        <img src={imgUrl} alt="display of the project" />
        <div className="project-text">
          <h4>{title}</h4>
          <div className="project-text-tech">{techStack}</div>
          <a href={url}>{url}</a>
          <div className="project-text-body">{description}</div>
        </div>
      </div>
    </Col>
  );
};
