import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { LinkedinIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-950 body-font mx-24">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src="/sea.png" alt="LOGO" className='inline h-10' />
            <span className="ml-3 text-xl logo">AquaGuardians</span>
            </a>
            <p className="text-lg text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 AquaGuardian | 
            <a href="" className="text-gray-500 ml-1 text-md" target="_blank" rel="noopener noreferrer" previewlistener="true">Made with love by Srisanth and Ujjwal</a>
            </p>
            <span className="inline-flex gap-2 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <LinkedinIcon />
                <Instagram/>
                <Facebook/>
            </span>
        </div>
    </footer>
  )
}

export default Footer
