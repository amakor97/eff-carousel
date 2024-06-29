import app from "./app.module.css";

import { useRef, useEffect } from "react";

import usePics from "./usePics.js";

import Carousel from "./Carousel.js";


function App() {
  const rawPics = usePics().pics;
  const pics = useRef(rawPics); 
  const newPics = useRef([]);

  pics.current = (localStorage.getItem("pics").length !== 2) ? JSON.parse(localStorage.getItem("pics")) : rawPics;


  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      console.log(newPics.current);
      localStorage.setItem("pics", JSON.stringify(newPics.current));
    });
  }, [])


  function handlePicsOrder(num) {
    let pic = pics.current[num];
    newPics.current = JSON.parse(JSON.stringify(rawPics));
    newPics.current = newPics.current.filter(iterablePic => iterablePic.id !== pic.id);
    newPics.current.unshift(pic);
  }


  return (
    <div className={app.app}>
      <Carousel picsList={pics.current} onChangePicsOrder={handlePicsOrder}/>
    </div>
  );
}

export default App;
