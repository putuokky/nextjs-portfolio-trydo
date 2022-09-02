import Image from "next/image";
import logo from "../public/img/logo.png";
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react";

export default function Header() {
  // fixed header
  // window.addEventListener("scroll", function () {
  //   const header = document.querySelector(".header");
  //   header.classList.toggle("active", window.scrollY > 0)
  // });

  // Toggle Menu
  const [show, setShow] = useState(true);

  return (
    <header id="home">
      <div className="bg-no-repeat bg-cover bg-[50%] bg-tema bg-hero">
        <div className="flex items-center transition duration-500 ease-in-out p-[30px]">
          <div>
            <Image alt="logo" src={logo} />
          </div>
          <nav className='flex p-[30px]'>
            <ul className='flex navbar'>
              <a href='#Home'>
                <li className='pb-4 mx-4 text-lg'>Home</li>
              </a>
              <a href='#About'>
                <li className='pb-4 mx-4 text-lg'>About</li>
              </a>
              <a href='#Services'>
                <li className='pb-4 mx-4 text-lg'>Services</li>
              </a>
              <a href='#Portfolio'>
                <li className='pb-4 mx-4 text-lg'>Portfolio</li>
              </a>
              <a href='#Blog'>
                <li className='pb-4 mx-4 text-lg'>Blog</li>
              </a>
              <a href='#Contact'>
                <li className='pb-4 mx-4 text-lg'>Contact</li>
              </a>
            </ul>
          </nav>
          {/* Toggle Menu */}
          {/* <div className="toggle__menu">
            <AiOutlineMenu onClick={() => setShow(!show)} className="white pointer" />
            {show ? (
              <div className="sideNavbar">
                <ul className="sidebar d__flex">
                  <li className="sideNavbar">
                    <a href="#">Home</a>
                  </li>
                  <li className="sideNavbar">
                    <a href="#">About</a>
                  </li>
                  <li className="sideNavbar">
                    <a href="#">Services</a>
                  </li>
                  <li className="sideNavbar">
                    <a href="#">Portfolio</a>
                  </li>
                  <li className="sideNavbar">
                    <a href="#">Blog</a>
                  </li>
                  <li className="sideNavbar">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div> */}
        </div>
        {/* Home Content */}
        <div className="container w-11/12 mx-auto">
          <div className="py-32">
            <div className="home__meta">
              <h1 className="text-lg font-normal tracking-[.1875em] text-more py-2.5">
                WELCOME TO MY WORLD
              </h1>
              <h2 className="text-[54px] font-extrabold font-montserrat leading-[54px] py-2.5">
                Hi,I'm John Doe
              </h2>
              <h3 className="text-5xl font-extrabold font-montserrat leading-10 text-primary py-2.5">
                JS Developer
              </h3>
              <h4 className="text-5xl font-extrabold font-montserrat leading-10 py-2.5">
                based in USA
              </h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
