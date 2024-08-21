import React from 'react';
import Image from 'next/image';
import Tokenomix from "@/components/Tokenomic";
import { useSpring, animated } from 'react-spring';

const HeroSection = () => {
    const handleCopy = () => {
        navigator.clipboard.writeText('TBD');
        alert('Text copied to clipboard!');
    };

    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 }
    });

    return (
        <>
            <div className="bg-cover bg-center bg-[#cb22f6] bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/pfp.jpg')" }}>
                {/* Overlay with Text */}
                <animated.div style={fadeIn} className="relative z-10 flex flex-col items-center justify-center h-screen bg-[#cb22f6] bg-opacity-50 p-4 md:p-8">
                    <h1 className="text-[60px] sm:text-[120px] md:text-[100px] lg:text-[180px] text-shadow text-white font-permanentMarker font-extralight text-center">
                        $LANDWOLF
                    </h1>
                    <Tokenomix/>
                    <div className="mt-4 p-2 flex flex-col md:flex-row items-center justify-center font-hanaleiFill text-black rounded text-sm md:text-2xl font-bold w-full max-w-3xl">
                        <span className="text-center md:text-left">CA: </span>
                    </div>
                    <div className="flex justify-center p-8">
                        <a href="https://www.dextools.io/app/en/tron/pair-explorer/TXVsDoTtgfTN5nuRsa8yhx9eQS8xrtQLED?t=1724086856231" target="_blank" rel="noopener noreferrer">
                            <button
                                className="px-6 py-3 font-hanaleiFill text-white bg-black rounded font-bold hover:bg-gray-700 transition-colors duration-300"
                            >
                                Buy now
                            </button>
                        </a>
                    </div>
                    <div className="flex justify-center space-x-4 md:space-x-8 pt-4">
                        <a href="https://www.dextools.io/app/en/tron/pair-explorer/TXVsDoTtgfTN5nuRsa8yhx9eQS8xrtQLED?t=1724086856231" target="_blank" rel="noopener noreferrer">
                            <Image src="/dexscreener.png" alt="Dexscreener" width={40} height={40} />
                        </a>
                        <a href="https://x.com/LANDWOLF_TRON" target="_blank" rel="noopener noreferrer">
                            <Image src="/twitter.png" alt="Twitter" width={40} height={40} />
                        </a>
                        <a href="https://t.me/LANDWOLF_TRON" target="_blank" rel="noopener noreferrer">
                            <Image src="/tg.png" alt="Telegram" width={40} height={40} />
                        </a>
                    </div>
                </animated.div>
            </div>
        </>
    );
};

export default HeroSection;
