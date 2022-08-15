import {Container, Nav, Row, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import personalPortfolio from "../assets/img/personal-portfolio.png";
import comingSoon from "../assets/img/coming-soon.jpg";
import internshipHunter from "../assets/img/internship-hunter.jpg";
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Portfolio",
      description: "My personal website, I made in my journey of learning ReactJS. I wanted a website to show all the projects" +
          "I made in my journey of becoming a better software developer.",
      techStack:"HTML, CSS, JavaScript, React, SASS & Bootstrap",
      imgUrl: personalPortfolio,
    },
    {
      title: "Instagram Clone",
      description: "An Instagram Clone web-app, on which I am currently working on as I am learning NextJS.",
      techStack:"React, NextJS, JavaScript, Tailwind CSS, Firebase",
      imgUrl: comingSoon,
    },
    {
      title: "Twitter Clone",
      description: "A Twitter Clone web-app, on which I am currently working on as I am learning NextJS.",
      techStack:"React, NextJS, JavaScript, Tailwind CSS, Firebase",
      imgUrl: comingSoon,
    },
    {
      title: "Internship Hunter",
      description: "A web-app, which makes searching for Internships easier. a project made by me and my friends in 48 hours for a hackathon event" +
          "and ever since being worked on to make it better.",
      techStack:"React, JavaScript, NodeJS, Python",
      imgUrl: internshipHunter,
    }
  ];

  let projectsTab = projects.map((project, index) => {
    return (
        <ProjectCard
            key={index}
            {...project}
        />
    )
  })

  return (
      <section className="project" id="project">
        <Container>
          <div className="project-box">
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"
                   id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Personal Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Instagram Clone</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Twitter Clone</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Internship Hunter</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>{projectsTab[0]}</Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>{projectsTab[1]}</Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>{projectsTab[2]}</Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Row>{projectsTab[3]}</Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Container>
      </section>
  )
}
