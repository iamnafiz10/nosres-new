import React from 'react';
import Image from "next/image";

function Build() {
    return (
        <>
            <section id="build-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            We build products and services to boost businesses growth.
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Not only do we give people the possibility to sell their products in a trusted and secure
                            online<br/> marketplace, but we also provide them with the necessary tools and techniques
                            they
                            need to<br/> promote, advertise and market their businesses cost-effectively.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
                        <div data-aos="zoom-in"
                             className="col group box py-4 border-2 border-gray-200 items-center justify-center flex flex-col">
                            <Image src="/assets/images/build1.png" width={1000} height={500}
                                   className="w-16 group-hover:scale-125" alt="buildImg1"/>
                            <h3 className="mt-3 text-[14px] text-gray-500">Marketplace</h3>
                        </div>

                        <div data-aos="zoom-in"
                             className="col group box py-4 border-2 border-gray-200 items-center justify-center flex flex-col">
                            <Image src="/assets/images/build2.png" width={1000} height={500}
                                   className="w-16 group-hover:scale-125" alt="buildImg2"/>
                            <h3 className="mt-3 text-[14px] text-gray-500">Wallet</h3>
                        </div>

                        <div data-aos="zoom-in"
                             className="col group box py-4 border-2 border-gray-200 items-center justify-center flex flex-col">
                            <Image src="/assets/images/build3.png" width={1000} height={500}
                                   className="w-16 group-hover:scale-125" alt="buildImg3"/>
                            <h3 className="mt-3 text-[14px] text-gray-500">Logistics</h3>
                        </div>

                        <div data-aos="zoom-in"
                             className="col group box py-4 border-2 border-gray-200 items-center justify-center flex flex-col">
                            <Image src="/assets/images/build4.png" width={1000} height={500}
                                   className="w-16 group-hover:scale-125" alt="buildImg4"/>
                            <h3 className="mt-3 text-[14px] text-gray-500">Telecom</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Build;