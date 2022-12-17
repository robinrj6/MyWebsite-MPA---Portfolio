import '../assets/styles/homeStyles.css';
import anime from "animejs";
import { useEffect } from 'react';

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
                delay: (el, i) => 330 * i
            }).add({
                targets: '.ml2',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
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
        <div className="home" id="home">
            <h1 className="ml2">
                Hello world! I'm Robin Jose Raju.
            </h1>
            
        </div>
    );
}