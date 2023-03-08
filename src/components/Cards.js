import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavLink from 'react-bootstrap/esm/NavLink';
import medical_Kit from './images/medical_kit.svg';
import "./Style.css"
function ImgCards(){
    return(
       <div className='card1'>
    <Card style={{ width: '18rem' }}>
      <Card.Body style={{backgroundColor:""}}>
        <Card.Title>Helth Maintanace Visits</Card.Title>
        <Card.Img  src={medical_Kit} className='medical_Kit_img' />
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
       </div>
    );
}
export default ImgCards;