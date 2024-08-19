// components/InfoComponent.js

import React from 'react';

const InfoComponent = () => {
  return (
    <div className="bg-purple-900 font-hanaleiFill text-white py-10 px-6 h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-4xl font-bold mb-6">How to Buy $LANDWOLF</h2>
          <div className="space-y-8 font-permanentMarker">
            <div className="flex  items-start space-x-4">
              <div className="text-2xl font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold">CREATE A WALLET</h3>
                <p>Download TronLink or your wallet of choice from the app store or Google Play store. Desktop users, download the Chrome extension by visiting the TronLink website.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold">GET SOME TRX</h3>
                <p>Have TRX in your wallet to switch to $LANDWOLF. If you don't have any TRX, you can buy TRX from an exchange or cross-chain swap and send it to your wallet.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold">GO TO JUSTSWAP</h3>
                <p>Connect to JustSwap. Go to justswap.io in your browser inside your TronLink app. Connect your wallet. Paste the $LANDWOLF token address into JustSwap and confirm the swap. When TronLink prompts you for a wallet signature, sign it.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl font-bold">4</div>
              <div>
                <h3 className="text-xl font-bold">SWAP</h3>
                <p>Switch TRX for $LANDWOLF.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/pfp.jpg"
            alt="Landwolf Info Graphic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
