import app from "./app.module.css";

import usePics from "./usePics.js";

import Carousel from "./Carousel.js";

function App() {
  const {pics} = usePics();
  console.log(pics);
  return (
    <div className={app.app}>
      <Carousel picsList={pics}/>
    </div>
  );
}

export default App;
