import '../assets/styles/aboutStyles.css'
import data from '../assets/data/data.json';
import { Link } from 'react-router-dom';



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
                <h1 className=" text_about">
                    <p> {data.about} </p>
                </h1>
                <Link to="/home" className="d-md-block left"><i className="fa fa-chevron-circle-left"></i></Link>
                <Link to="/skills" className="d-md-block right"><i className="fa fa-chevron-circle-right"></i></Link>
            </div>
        </div>
    );
}