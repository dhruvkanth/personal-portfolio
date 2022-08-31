import {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Hero = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [, setIndex] = useState(1);
    const toRotate = ["Software Engineering Student"];
    const introName = "Hi! I'm Dhruvkanth Puli";
    const aboutMe = "I am a 19 year old software engineering student at University of Auckland." +
        " I love coding, especially anything related Backend or Machine Learning, and am also very passionate about " +
        "software development.";
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                <span className="tagline">
                  <span className="txt-rotate" data-rotate='[ "Software Engineering Student" ]'>
                    <span className="wrap">{text}</span>
                  </span>
                </span>
                        <h1>{introName}</h1>
                        <p>{aboutMe}</p>
                        <a href={"#project"} className="hover-bob">Projects <ArrowRightCircle
                            size={25}/></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
