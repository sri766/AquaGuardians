import React from 'react';
import { BrushIcon, ShowerHead, Wrench, Waves, Flower } from 'lucide-react';
import { GlassWaterIcon } from 'lucide-react';

const tips = [
  { text: "Turn off the tap while brushing your teeth.", icon: <BrushIcon size={32} /> },
  { text: "Take shorter showers.", icon: <ShowerHead size={32} /> },
  { text: "Fix leaky faucets and pipes.", icon: <Wrench size={32} /> },
  { text: "Use a broom instead of a hose to clean driveways and sidewalks.", icon: <Waves size={32} /> },
  { text: "Water your garden in the early morning or late evening to reduce evaporation.", icon: <GlassWaterIcon size={32} /> },
  { text: "Install a rain barrel to collect rainwater for your garden.", icon: <Flower size={32} /> },
];

const Tips = () => {
  return (
    <div className="h-full px-4 md:px-24 py-2">
      <section className="tips text-gray-400 body-font bg-transparent">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Water Conservation Tips</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">Simple tips to help you save water and protect the environment.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {tips.map((item, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-700 bg-slate-900 border-opacity-75 p-6 rounded-lg">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-teal-400 mb-4">
                    {item.icon}
                  </div>
                  <h2 className="text-lg text-white font-medium title-font mb-2">{item.text}</h2>
                  <p className="leading-relaxed text-base">Small actions can make a big difference in conserving water and preserving our planet.</p>
                </div>
              </div>
            ))}
          </div>
          <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default Tips;
