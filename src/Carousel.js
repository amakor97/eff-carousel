import carousel from "./carousel.module.css";

import Pic from "./Pic.js";
import Btn from "./Btn.js";
import { useState, useRef, useEffect } from "react";

export default function Carousel({picsList, onChangePicsOrder}) {
  console.log("current list ", picsList);

  const [currentSlide, setCurrentSlide] = useState(undefined);


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

  function handleSelectPic(e) {
    onChangePicsOrder(currentSlide);
  }

  const carRef = useRef();
  const carInnerRef = useRef();

  useEffect(() => {
    if (picsList) {
      setCurrentSlide(0);
      carInnerRef.current.style.width = `${picsList.length*200}px`; 
    }
  }, [])


  useEffect(() => {
    carInnerRef.current.style.transform = `translateX(${-currentSlide*200}px)`;
  })



  return (
    <>
      <div className={carousel.wrapper}>
        <div ref={carInnerRef} className={carousel.inner}>
          {
            picsList.map(pic => <Pic picData={pic} onPicSelect={handleSelectPic}/>)
          }
        </div>
      </div>
      <div>
        <Btn text={"<-"} onEventHandler={() => handleMoveCarousel("left")}/>
        <Btn text={"->"} onEventHandler={() => handleMoveCarousel("right")}/>
      </div>
    </>
  );
}