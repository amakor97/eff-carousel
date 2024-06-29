import app from "./app.module.css";

import { useState, useRef, useEffect } from "react";

import usePics from "./usePics.js";

import Carousel from "./Carousel.js";

function App() {
  const rawPics = usePics().pics;
  const pics = useRef(rawPics); 

  pics.current = localStorage.getItem("pics") ? JSON.parse(localStorage.getItem("pics")) : rawPics;

  let newPics = useRef([]);

  //newPics.current = localStorage.getItem("pics") ? JSON.parse(localStorage.getItem("pics")) : pics.current;

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("pics", JSON.stringify(newPics.current));
    });
  }, [])


  function handlePicsOrder(num) {
    newPics.current = [];


    console.log(pics.current[num]);

    let pic = pics.current[num];

    newPics.current.push(pic);

    console.log("n", newPics.current);

    console.log(pics);

    pics.current.forEach(pic => {
      console.log(pic);
      console.log(pic.id === newPics.current[0].id);
      if (pic.id !== newPics.current[0].id) {
        newPics.current.push(pic);
      }
    })
  }


  return (
    <div className={app.app}>
      <Carousel picsList={pics.current} onChangePicsOrder={handlePicsOrder}/>
    </div>
  );
}

export default App;
