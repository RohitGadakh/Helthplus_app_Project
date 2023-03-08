import Carousel from 'react-bootstrap/Carousel';
import ImgCards from './Cards';

function Home(){
   return(
<div>
<Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/humberto.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/patty.jpg"  
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/online.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  <br></br>
  <span>
    <h1 style={{textAlign:"center"}}><b>-: Our Services :-</b></h1>
  </span>
    <div><ImgCards/></div>
    
</div>
   );

}
export default Home;