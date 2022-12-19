import '../assets/styles/aboutStyles.css'
import data from '../assets/data/data.json';



export default function AboutComponent() {
    return (
        <div>
            <div className="about" id="about">
                {/* data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center" */}
                <h1 class=" text_about">
                    <p> {data.about} </p>
                </h1>

            </div>
        </div>
    );
}