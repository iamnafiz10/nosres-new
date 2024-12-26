import React from 'react';
import patnerImg1 from '../../../../../public/assets/images/patner1.svg';
import patnerImg2 from '../../../../../public/assets/images/patner2.svg';
import patnerImg3 from '../../../../../public/assets/images/patner3.svg';
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

function Patner() {
    return (
        <>
            <section id="patner-section" className="mt-14">
                <div className="container py-10">
                    <div className="head-wrap text-start">
                        <h1 className="font-semibold text-[24px]">
                              <span className="text-[#3A5F8A]">
                                Nosres Blends is more than a marketplace—it's a community
                              </span>
                            <br/>
                            <span className="text-primary">built on trust, quality, and simplicity.</span>
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Whether you’re connecting with like-minded buyers and sellers, finding your next great deal,
                            or<br/>
                            turning unused items into income, Nosres Blens makes the process seamless and rewarding.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="card11 col image-box px-8 flex flex-col justify-center bg-yellow-400 rounded-md">
                            <Image src={patnerImg1} className="w-[80px] rounded-md" alt="patnerImg"/>
                            <div className="content mt-4">
                                <h2 className="font-semibold text-[16px]">Curated and Simplified Selection</h2>
                                <p className="mt-3 text-[14px]">
                                    Only brand-new or like-new items for
                                    consistent quality
                                </p>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="card1 col image-box bg-white rounded-md">
                            <Image src={patnerImg3} className="w-[80px] rounded-md" alt="patnerImg"/>
                            <div className="content px-6 py-6">
                                <h2 className="font-semibold">Strengthen your brand</h2>
                                <p className="mt-3 text-[14px]">
                                    At Nosres, we value entrepreneurship, passion, curiosity, creativity, innovation,
                                    and simplicity. Those values are deeply ingrained in our systems and are the pillars
                                    of our business. Thus, we can add value to your brand if you are looking to become a
                                    Nosres business.
                                </p>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="card1 col image-box bg-white rounded-md">
                            <Image src={patnerImg2} className="w-[80px] rounded-md" alt="patnerImg"/>
                            <div className="content px-6 py-6">
                                <h2 className="font-semibold">Get exposure to our management team</h2>
                                <p className="mt-3 text-[14px]">
                                    Our team is highly-skilled and analytical. We are passionate about what we do. Our
                                    specialties include marketing strategy, business operations analysis, business
                                    consultancy, corporate strategy, information technology, etc.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="mt-8 flex cursor-pointer items-center gap-1 justify-center text-primary hover:text-[#3A5F8A]">
                        <HiOutlineArrowRightCircle size={30}/>
                        <Link href='/'
                              className="text-[14px]">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Patner;