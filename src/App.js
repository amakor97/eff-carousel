import app from "./app.module.css";

import { useState, useRef, useEffect } from "react";

import usePics from "./usePics.js";

import Carousel from "./Carousel.js";


function App() {
  const rawPics = usePics().pics;
  const [pics, setPics] = useState(() => {
    if (localStorage.getItem("pics") && (localStorage.getItem("pics") !== "[]")) {
      return JSON.parse(localStorage.getItem("pics"));
    } else {
      return rawPics;
    }
  }); 
  const newPics = useRef([]);


  useEffect(() => {
    newPics.current = pics;

    window.addEventListener("beforeunload", () => {
      localStorage.setItem("pics", JSON.stringify(newPics.current));
    });
  }, [])


  function handlePicsOrder(num) {
    let pic = pics[num];
    newPics.current = JSON.parse(JSON.stringify(rawPics));
    newPics.current = newPics.current.filter(iterablePic => iterablePic.id !== pic.id);
    newPics.current.unshift(pic);
  }


  return (
    <div className={app.app}>
      <Carousel picsList={pics} onChangePicsOrder={handlePicsOrder}/>
    </div>
  );
}

export default App;
