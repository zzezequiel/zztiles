import Carousel from 'react-bootstrap/Carousel';


function CarouselHome() {
  return (
     <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://ik.imagekit.io/zzzzzzzzzz/ZZ_TILES/Banner/1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668877863831'
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://ik.imagekit.io/zzzzzzzzzz/ZZ_TILES/Banner/2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668877863809'
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://ik.imagekit.io/zzzzzzzzzz/ZZ_TILES/Banner/3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668877863847'
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;