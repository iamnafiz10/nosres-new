"use client"
import {Suspense} from "react";
import React from 'react';
import Header from './(SITE ONE)/home/components/header/page'
import Footer from './(SITE ONE)/home/components/footer/page'
import {BrowserRouter} from "react-router-dom";

function Page() {
    return (
        <>
            <BrowserRouter>
                <Suspense>
                    <Header/>
                    <Footer/>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default Page;