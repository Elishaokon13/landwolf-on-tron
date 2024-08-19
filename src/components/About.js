import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ImageRowWithSocials from './test';

const AboutSection = () => {
  const initialCount = 1624000;
  const [counter, setCounter] = useState(initialCount);
  const [power, setPower] = useState(1); // Start power from 1 to continue from initial count

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(initialCount + (2 ** 4) * power);
      setPower((prevPower) => prevPower + 1);
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [power]);

  return (
    <>
      <div className="bg-cover bg-center bg-[#cb22f6] bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
        <div className="relative min-h-screen w-full text-purple-950 p-8">
          <div className="relative text-center">
            <h1 className="text-3xl sm:text-5xl font-permanentMarker mt-10 font-bold mb-8">What is $LANDWOLF?</h1>
            <p className="max-w-4xl font-hanaleiFill mx-auto text-lg leading-relaxed mb-8">
            Tron enthusiasts are embracing Landwolf, moving away from the frog meme trend. Since its inception, Landwolf has become a beloved icon within the crypto community, known for his laid-back and wise demeanor. Created by Matt Furie, this character finally makes its debut on the Tron blockchain. Join our vibrant community on Telegram and enjoy the ride with Landwolf!

              <br/>Together, we're unstoppable
            </p>

            {/* <h2 className="text-2xl sm:text-4xl font-permanentMarker pt-10 font-bold mb-4">The Nas Nation</h2>
            <p className="max-w-4xl font-hanaleiFill mx-auto text-lg leading-relaxed mb-8">
              One Nation, Two Kings
            </p> */}

            {/* <div className="mb-8">
              <button
                onClick={() => {
                  setCounter(initialCount + (2 ** 4) * power);
                  setPower((prevPower) => prevPower + 1);
                }}
                className="px-4 py-2 font-hanaleiFill text-black bg-[#C45B14] rounded font-bold hover:bg-gray-300 transition-colors duration-300"
              >
                Click Here to support your favorite Nas now!
              </button>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-3xl sm:text-4xl rounded-2xl w-64 bg-white text-black items-center justify-center text-center font-permanentMarker font-thin">
                {counter} Nasites
              </div>
            </div> */}
            <ImageRowWithSocials />
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutSection;
