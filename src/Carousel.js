import carousel from "./carousel.module.css";

import { useState, useRef, useEffect } from "react";

import Pic from "./Pic.js";
import Btn from "./Btn.js";

export default function Carousel({picsList, onChangePicsOrder}) {
  const [currentSlide, setCurrentSlide] = useState(undefined);
  const carInnerRef = useRef();

  useEffect(() => {
    if (picsList) {
      setCurrentSlide(0);
      carInnerRef.current.style.width = `${picsList.length*400}px`; 
    }
  }, [])


  useEffect(() => {
    carInnerRef.current.style.transform = `translateX(${-currentSlide*400}px)`;
  })

  function handleMoveCarousel(dir) {
    if (dir === "left") {
      if (currentSlide > 0) {
        setCurrentSlide(value => value-1);
      }
    }
    if (dir === "right") {
      if (currentSlide < picsList.length-1) {
        setCurrentSlide(value => value+1);
      }
    }
  }

  function handleSelectPic() {
    onChangePicsOrder(currentSlide);
  }


  return (
    <div>
      <div className={carousel.wrapper}>
        <div ref={carInnerRef} className={carousel.inner}>
          {
            picsList.map(pic => <Pic key={pic.id} picData={pic} onPicSelect={handleSelectPic}/>)
          }
        </div>
      </div>
      <div className={carousel.ctrlCont}>
        <Btn text={"<-"} onEventHandler={() => handleMoveCarousel("left")}/>
        <Btn text={"->"} onEventHandler={() => handleMoveCarousel("right")}/>
      </div>
    </div>
  );
}