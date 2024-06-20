import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <section class="text-gray-400 bg-trasparent body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-4xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Our mission is to raise awareness about the importance of water conservation. We aim to educate people on how to use water responsibly to ensure a sustainable future for all.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/sri.png"/>
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">Srisanth Seth</h2>
                <h3 class="text-gray-500 mb-3">UI/UX and FullStack Developer</h3>
                <p class="mb-4">B.Tech in Industrial Design @ NIT Rourkela, India</p>
                <span class="inline-flex gap-2">
                  <Facebook />
                  <Instagram />
                  <Linkedin />
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/ujjwal.jpeg"/>
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-white">Ujjwal Choudhary</h2>
                <h3 class="text-gray-500 mb-3">FullStack and BlockChain Developer</h3>
                <p class="mb-4">B.Tech in Chemical Engg. @ NIT Rourkela, India</p>
                <span class="inline-flex gap-2">
                  <Facebook />
                  <Instagram />
                  <Linkedin />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  );
};

export default About;
