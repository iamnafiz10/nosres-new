"use client"
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import Hero from "./components/hero/page";
import Build from "./components/build/page";
import Patner from "./components/patner/page";
import Slider from "./components/slider/page";
import Join from "./components/join/page";
import Future from "./components/future/page";
import WorkWith from "./components/workwith/page";

function Page() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Hero/>
                <Build/>
                <Patner/>
                <Slider/>
                <Join/>
                <Future/>
                <WorkWith/>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default Page;