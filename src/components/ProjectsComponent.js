import Card from 'react-bootstrap/Card';
import '../assets/styles/projectStyles.css';
import img from '../assets/images/PneumoGan.jpg';

export default function ProjectsComponent() {

    return (
        <div className='projects' id='projects'>
            <div className='centerAlign'>
                <a href='https://pneumogan.vercel.app/' className='link'>
                    <Card style={{ width: '18rem' }} bg='primary'>
                        <Card.Img variant="top" src={img} className="cardImg" />
                        <Card.Body>
                            <Card.Title>PneumoGan</Card.Title>
                            <Card.Text>
                                A deep machine learning project which uses GAN and CNN to predict whether a X-Ray image is pneumonic or not.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </div>

        </div>
    );
}