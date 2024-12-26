"use client"
import Header from "@/app/Header/Header";
import Footer from "@/app/Footer/Footer";
import Hero from "@/app/Components/HomePage/Hero/Hero";
import Build from "@/app/Components/HomePage/Build/Build";
import Patner from "@/app/Components/HomePage/Patner/Patner";
import WorkWith from "@/app/Components/HomePage/WorkWith/WorkWith";
import Join from "@/app/Components/HomePage/Join/Join";
import {BrowserRouter} from "react-router-dom";

export default function Home() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Hero/>
                <Build/>
                <Patner/>
                <WorkWith/>
                <Join/>
                <Footer/>
            </BrowserRouter>
        </>
    );
}
