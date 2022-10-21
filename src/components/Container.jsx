import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carousel from "./Carousel";

export default function Container() {
    return (
        <>
            <NavBar />
                <Carousel />
            <Footer />
        </>
    )
}