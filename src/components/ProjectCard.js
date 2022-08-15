import {Col} from "react-bootstrap";

export const ProjectCard = ({title, description,techStack, imgUrl}) => {
    return (
        <Col size={12} sm={6} md={4} id="tabCenter">
            <div className="project-image">
                <img src={imgUrl} alt="display of the project"/>
                <div className="project-text">
                    <h4>{title}</h4>
                    <span className="project-text-tech">{techStack}</span>
                    <span className="project-text-body">{description}</span>
                </div>
            </div>
        </Col>
    )
}
