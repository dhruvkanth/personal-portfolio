import {useEffect, useRef} from "react";
import '../'

export const Skills = () => {

    const TagCloud = require('TagCloud');
    const para = "Technologies I have worked with!";

    const animateChars = para.split('').map((char, i) => {
        return (
            char === ' ' ? <span key={i} className="hvr-bob">{'\u00A0'}</span> : <span key={i} className="hvr-bob">{char}</span>
        )
    })

    const container = '.tagcloud';
    const texts = [
        'HTML', 'CSS', 'JAVASCRIPT',
        'REACT', 'PYTHON', 'C',
        'MATLAB', 'JAVA', 'FireBase',
        'Tailwind CSS', 'SASS',
        'NextJS', "BootStrap", "Express", "NodeJS"
    ];
    const options = {
        radius: 200,

        maxSpeed: 'fast',
        initSpeed: 'fast',

        direction: 135,

        keep: true
    };
    useRef();
    useEffect(() => {
        const instance = TagCloud('.Sphere', texts, options);
        return () => instance.destroy();
    }, [TagCloud, options, texts]);

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="skill-box wow zoomIn Sphere">
                    <h2 className="hvr-bob">Skills</h2>
                    <p>{animateChars}</p>
                </div>
            </div>
        </section>
    )
}