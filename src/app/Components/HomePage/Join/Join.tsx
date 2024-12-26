import React from 'react';
import helloImg from '../../../../../public/assets/images/hello.jpg';
import Image from "next/image";

function Join() {
    return (
        <>
            <section id="join-section" className="mt-10 bg-white">
                <div className="container py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        <div className="col">
                            <div className="head-wrap text-start pb-8">
                                <h1 className="font-semibold text-[24px]">
                              <span className="text-[#3A5F8A]">
                                Join Blends in 3
                              </span>
                                    <span className="text-primary"> steps</span>
                                </h1>
                                <p className="mt-2 text-[#ABABAB] text-[16px]">
                                    Join Blends Blends is quick, easy, and<br/>
                                    hassle-free!
                                </p>
                            </div>
                            <div className="pl-[18px]">
                                <ol className="relative border-l-2 border-primary">
                                    {/* Timeline Item 1 */}
                                    <li className="mb-10 ml-8">
                                    <span
                                        className="absolute -left-[1.4rem] flex items-center justify-center w-10 h-10 text-lg font-medium text-primary border-2 border-primary rounded-full bg-white">
                                      1
                                    </span>
                                        <h3 className="text-[18px] font-500">
                                            Create a Nosres Account.
                                        </h3>
                                        <h4 className="text-[14px] text-gray-400">
                                            Before joining Blends, you'll need to create a Nosres Account.
                                        </h4>
                                    </li>

                                    {/* Timeline Item 2 */}
                                    <li className="mb-10 ml-8">
                                    <span
                                        className="absolute -left-[1.4rem] flex items-center justify-center w-10 h-10 text-lg font-medium text-primary border-2 border-primary rounded-full bg-white">
                                      2
                                    </span>
                                        <h3 className="text-[18px] font-500">
                                            Click the button “Try Blends.”
                                        </h3>
                                        <h4 className="text-[14px] text-gray-400">
                                            You’ll find the “Try Blends” button throughout the
                                            website.
                                        </h4>
                                    </li>

                                    {/* Timeline Item 3 */}
                                    <li className="ml-8 last:border-0">
                                    <span
                                        className="absolute -left-[1.4rem] flex items-center justify-center w-10 h-10 text-lg font-medium text-primary border-2 border-primary rounded-full bg-white">
                                      3
                                    </span>
                                        <h3 className="text-[18px] font-500">
                                            Check the Platform Policies pop-up.
                                        </h3>
                                        <h4 className="text-[14px] text-gray-400">
                                            Review and accept the Platform Policies by checking
                                            the pop-up to proceed.
                                        </h4>
                                    </li>
                                </ol>
                            </div>
                            <div className="button_area mt-10">
                                <button type='button'
                                        className="py-1 px-6 ext-white bg-primary text-[14px] text-white rounded">
                                    Try Blends
                                </button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="right_image rounded-lg bg-[#DAE2F9] bg-opacity-[30%] p-10 pr-0">
                                <Image src={helloImg} className="rounded" alt="helloImg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Join;