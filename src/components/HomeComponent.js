import '../assets/styles/homeStyles.css';
import anime from "animejs";
import { useEffect } from 'react';
import AOS from 'aos';

AOS.init();
export default function HomeComponent() {
    function MovingLetters() {
        var elements = document.getElementsByClassName("ml2");
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
                targets: '.ml2 .letter',
                scale: [4, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 100 * i
            }).add({
                targets: '.ml2',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 10000
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
            <div className="home" id="home">
                <div className='centerText'>
                    <h1 className="ml2">
                        Hello world!
                    </h1>
                    <h1 className="ml2 ">
                        I'm Robin Jose Raju.
                    </h1>
                </div>
            </div>
            <div className="about" id="about"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">


            </div>
            <div className="skills" id="skills"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">

            </div>
            <div className="projects" id="projects"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">

            </div>
            <div className="contact" id="contact"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">

            </div>
        </div>
    );
}