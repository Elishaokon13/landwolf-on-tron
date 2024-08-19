import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    const handleCopy = () => {
        navigator.clipboard.writeText('TBD');
        alert('Text copied to clipboard!');
    };

    return (
        <>
            <div className="bg-cover bg-center bg-[#EDAB4C] bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
                {/* Overlay with Text */}
                <div className="relative z-10 flex flex-col items-center justify-center h-screen bg-[#EDAB4C] bg-opacity-50 p-4 md:p-8">
                    <h1 className="text-[60px] sm:text-[120px] md:text-[100px] lg:text-[180px] text-shadow text-black font-permanentMarker font-extralight text-center">
                        $Nascoin
                    </h1>
                    <Image
                        src="/hero.png" // Replace with your image path
                        alt="Centered Image"
                        width={800} // Adjust width as needed
                        height={600} // Adjust height as needed
                        className="mt-8"
                    />
                    <div className="mt-4 p-2 flex flex-col md:flex-row items-center justify-center font-hanaleiFill  text-black rounded text-sm md:text-2xl font-bold w-full max-w-3xl">
                        <span className="text-center md:text-left">CA: </span>
                    </div>
                    <div className="flex justify-center p-8">
                        <button
                            className="px-6 py-3 font-hanaleiFill text-white bg-black rounded font-bold hover:bg-gray-700 transition-colors duration-300"
                        >
                            Buy now
                        </button>
                    </div>
                    <div className="flex justify-center bg-[#EDAB4C] space-x-4 md:space-x-8 pt-4">
                        <a href="https://dexscreener.com/solana/BZG7ZWQkvEZpZiE64Hz2weyHF8pfxXHHtLwU96Avpump" target="_blank" rel="noopener noreferrer">
                            <Image src="/dexscreener.png" alt="Dexscreener" width={40} height={40} />
                        </a>
                        <a href="https://x.com/nas_coin" target="_blank" rel="noopener noreferrer">
                            <Image src="/twitter.png" alt="Twitter" width={40} height={40} />
                        </a>
                        <a href="https://t.me/NAS_nation_Portal" target="_blank" rel="noopener noreferrer">
                            <Image src="/tg.png" alt="Telegram" width={40} height={40} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
