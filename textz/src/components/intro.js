import React from "react";
import MyCarousel from "./carousel";
import About from "./about";
import Team from "./team";
import Contact from "./contact";
import Footer from "./footer";



function Main() {
    return (
        <>
            <MyCarousel></MyCarousel>
            <About></About>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
}

export default Main;