"use client"
import React from 'react';
import Header from './(SITE ONE)/home/components/header/page'
import Footer from './(SITE ONE)/home/components/footer/page'
import {BrowserRouter} from "react-router-dom";

function Page() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default Page;