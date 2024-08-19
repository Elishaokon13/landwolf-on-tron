import Image from 'next/image';
import React from 'react';

const ImageRowWithSocials = () => {
    return (
        <div className="bg-cover bg-center pt-20 bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="container mx-auto">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* First Image and Socials */}
                    <div className="text-center">
                        <Image src="/C1.jpeg" alt="Image 1" width={250} height={250} className="mx-auto" />
                    </div>

                    <div className="text-center animate-pulse">
                        <Image src="/C2.jpeg" alt="Image 2" width={250} height={450} className="mx-auto" />
                        
                    </div>
                    {/* Second Image and Socials */}
                    <div className="text-center animate-ping">
                        <Image src="/C3.jpeg" alt="Image 2" width={250} height={450} className="mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageRowWithSocials;
