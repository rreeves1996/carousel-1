import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import "./assets/style/style.css"


function App() {
  return (
    <>
      <NavBar />
        <main>
          <Carousel />
        </main>
      <Footer />
    </>
  )
}

export default App;
