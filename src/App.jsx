import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.css";

function App() {
  return (
    <div className="container">
      <Carousel className="slider" autoPlay>
        <div>
          <img src="./images/img1.jpg" width={200} height={300} />
        </div>
        <div>
          <img src="./images/img2.jpg" width={200} height={300} />
        </div>
        <div>
          <img src="./images/img3.jpg" width={200} height={300} />
        </div>
      </Carousel>
    </div>
  );
}

export default App;
