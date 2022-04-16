import { useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import News from "./News";
import Apply from "./Apply";


const Home = () => {
    const data = useSelector(st => st)

    return (<>

      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
src="/image/conferance2.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Տեղի է ունեցել կրթության զարգացման պետական ծրագրի նախագծի հանրային ներկայացումը</h3>
            <p>22 Փետրվար 2022</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
src="/image/conferance.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Կրթության զարգացման պետական ծրագրի նախագիծը քննարկվել է զարգացման գործընկերների հետ</h3>
            <p> 23 Փետրվար 2022</p>
          </Carousel.Caption>
        </Carousel.Item>
             <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
src="/image/conferance3.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Ամփոփվել է կրթության զարգացման պետական ծրագրի հանրային քննարկումների շարքը</h3>
            <p>24 Փետրվար 2022</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <News></News>
      <Apply></Apply>
    </>





    )
}
export default Home