import "../assets/styles/skillStyles.css";
import anime from "animejs";
import { useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import data from '../assets/data/data.json';
import { Link } from "react-router-dom";

export default function SkillsComponent() {

    const languages = data.programming;
    // const value = data.programmingValue;
    function MovingLetters() {
        var elements = document.getElementsByClassName("letters");
        for (var i = 0; i < elements.length; i++) {
            var text = elements[i].innerText;
            var newText = "";
            for (var j = 0; j < text.length; j++) {
                if (text[j].match(' '))
                    newText += "<span class='letter'>&nbsp;</span>";
                else
                    newText += "<span class='letter'>" + text[j] + "</span>";
            }
            elements[i].innerHTML = newText;
        }
        anime.timeline({ loop: true })
            .add({
                targets: '.ml7 .letter',
                translateY: ["1.1em", 0],
                translateX: ["0.55em", 0],
                translateZ: 0,
                rotateZ: [180, 0],
                duration: 750,
                easing: "easeOutExpo",
                delay: (el, i) => 50 * i
            }).add({
                targets: '.ml7',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: Infinity
            });
    }
    window.onload = function () {
        MovingLetters()
    }

    useEffect(() => {
        // Run your JavaScript command here
        MovingLetters();
    });

    return (
        <div>
            <div className="skills" id="skills">
                <h1 className="title">Skills</h1>
                <div className="languages">
                    <h1 className="ml7">
                        <span className="text-wrapper">
                            <span 
                            className="letters">Languages</span>
                        </span>
                    </h1>
                    <ProgressBar className="statusbar" style={{ height: '30px', fontFamily: "fasthand" }}>
                        <ProgressBar striped animated variant="success" now={25} key={1} label={languages[0]} style={{ color: "aqua" }} />
                        <ProgressBar striped animated variant="warning" now={10} key={2} label={languages[1]} style={{ color: "aqua" }} />
                        <ProgressBar striped animated variant="danger" now={20} key={3} label={languages[2]} style={{ color: "aqua" }} />
                        <ProgressBar striped animated variant="primary" now={20} key={4} label={languages[3]} style={{ color: "aqua" }} />
                        <ProgressBar striped animated variant="danger" now={30} key={5} label={languages[4]} style={{ color: "aqua" }} />
                        <ProgressBar striped animated variant="warning" now={30} key={6} label={languages[5]} style={{ color: "aqua" }} />
                    </ProgressBar>
                </div>
                <Link to="/about" className="d-md-block left"><i className="fa fa-chevron-circle-left"></i></Link>
                <Link to="/projects" className="d-md-block right"><i className="fa fa-chevron-circle-right"></i></Link>
            </div>
        </div>
    );
}