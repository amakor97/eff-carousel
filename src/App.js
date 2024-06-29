import app from "./app.module.css";

import { useState, useRef, useEffect } from "react";

import usePics from "./usePics.js";

import Carousel from "./Carousel.js";


function App() {
  const defPics = usePics().pics;
  const rawPics = usePics().pics;
  const pics = useRef(rawPics); 

console.log(localStorage.getItem("pics").length);
  console.log(localStorage.getItem("pics"));
  console.log(localStorage.getItem("pics").length === 2);
  pics.current = (localStorage.getItem("pics").length !== 2) ? JSON.parse(localStorage.getItem("pics")) : rawPics;

  let newPics = useRef([]);

  //newPics.current = (localStorage.getItem("pics").length !== 0) ? JSON.parse(localStorage.getItem("pics")) : pics.current;

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      console.log(newPics.current);
      localStorage.setItem("pics", JSON.stringify(newPics.current));
    });
  }, [])


  function handlePicsOrder(num) {
    let pic = pics.current[num];
    console.log("id to first: ", pic.id);

    console.log(defPics);
    newPics.current = JSON.parse(JSON.stringify(defPics));
    newPics.current = newPics.current.filter(iterablePic => iterablePic.id !== pic.id);
    //newPics.current.splice(num, 1);
    newPics.current.unshift(pic);


    console.log("c", newPics.current);
  }


  return (
    <div className={app.app}>
      <Carousel picsList={pics.current} onChangePicsOrder={handlePicsOrder}/>
    </div>
  );
}

export default App;
