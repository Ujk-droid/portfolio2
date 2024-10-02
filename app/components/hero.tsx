"use client"
import Image from 'next/image';
import React from 'react';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="bg-black">
            <section className="text-white body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-red-600">
       Ujk Scale Industry
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Uzma khan', 'Marketing Executive ','Director Technical'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className="w-[120px] h-[2px] bg-gray-300"></div> <br />
      <p className="mb-8 leading-relaxed">
        
    Ujk Scale Industry is a leading manufacturer of precision weighing <br />
    The company is known for its commitment to quality and accuracy, ensuring reliable performance in every product. <br />
    Ujk Scale Industry serves diverse sectors, including agriculture, manufacturing, and pharmaceuticals. <br />
    With years of experience, they continue to set standards in the weighing industry worldwide. <br />
      </p>
      <div className="flex justify-center">
        <Link href="#Contact">
        <button className="inline-flex bg-yellow-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-900 rounded text-lg">
          Contact
        </button>
        </Link>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image src={require("../../public/asset/RG_COM 13.jpg")} alt="omega" width={250} height={250}/>
    </div>
  </div>
</section>

        </div>
    )
}
export default Hero