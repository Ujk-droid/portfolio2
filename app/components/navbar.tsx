import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
const Navbar = ()=>{
    return (
      <div className='bg-black'><>

       {/* Hello world */}

        <header className="text-gray-400 body-font">
          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white-100 mb-4 md:mb-0">
              <Image src={require("../../public/asset/logo.png")} alt="omega" width={80} height={80}/>




              <span className="ml-3 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-green-600">ujk Scale Industry</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link href="/" className="mr-5 hover:text-gray-700">Home</Link>
              <Link href="#Project" className="mr-5 hover:text-gray-700">Projects</Link>
              <Link href="#Contact" className="mr-5 hover:text-gray-700">contact</Link>
            </nav>
            <button className="inline-flex items-center text-grey-200 border-0 py-1 px-3 focus:outline-none hover:bg-grey-500 rounded text-base mt-4 md:mt-0">
           

             <Link href="#Brochure" className="">Payment </Link>
              
             
            </button>
          </div>
        </header>
      </>
      </div>
    )
}
export default Navbar