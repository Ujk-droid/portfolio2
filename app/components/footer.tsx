
import Image from 'next/image';
import react from 'react'
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Footer =()=>{
  return(
    <div className='bg-black'><footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white-900">
      <Image src={require("../../public/asset/logo.png")} alt="omega" width={80} height={80}/>

        <span className="ml-3 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-green-600">Ujk Scale Industry</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      
        <a
          href="https://twitter.com/knyttneve"
          className="text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          karachi Pakistan
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <Link  target="_blank"href="{https://www.facebook.com/profile.php?id=100007708597027 }">

        <FaFacebook className='text-3xl text-blue-400 hover:text-blue-600' /></Link>
       
       <Link target="_blank"href="{https://www.facebook.com/profile.php?id=100007708597027 }">
       <FaInstagram className='text-3xl ml-2 text-red-400 hover:text-orange-700' /></Link>
   
      </span>
    </div>
  </footer>
  </div>
  )
}
export default Footer

