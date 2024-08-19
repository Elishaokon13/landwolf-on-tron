import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";

const ImageRowWithSocials = () => {
    return (
        <div className="bg-cover bg-center pt-20 bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="container mx-auto">

                <Marquee gradient={true} gradientColor="purple" className="grid  grid-cols-1 md:grid-cols-3 gap-8">
                    {/* First Image and Socials */}
                    <div className="text-center">
                        <Image src="/C1.jpeg" alt="Image 1" width={250} height={250} className="m-4" />
                    </div>

                    <div className="text-center animate-pulse">
                        <Image src="/C2.jpeg" alt="Image 2" width={250} height={250} className="m-4" />

                    </div>
                    {/* Second Image and Socials */}
                    <div className="text-center animate-pulse">
                        <Image src="/C3.jpeg" alt="Image 2" width={250} height={250} className="m-4" />
                    </div>
                </Marquee>
            </div>
            <Marquee gradient={true} gradientColor="purple" className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">
                {/* First Image and Socials */}
                <div className="text-center">
                    <Image src="/5.jpg" alt="Image 1" width={250} height={250} className="m-4" />
                </div>

                <div className="text-center animate-pulse">
                    <Image src="/4.jpg" alt="Image 2" width={250} height={250} className="m-4" />

                </div>
                {/* Second Image and Socials */}
                <div className="text-center animate-pulse">
                    <Image src="/3.jpg" alt="Image 2" width={250} height={250} className="m-4" />
                </div>
            </Marquee>
        </div>
    );
};

export default ImageRowWithSocials;
