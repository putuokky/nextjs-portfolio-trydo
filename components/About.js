import Image from "next/image";
import about from '../public/img/about.jpg'
import { BsChevronUp } from "react-icons/bs";
import { useEffect } from "react";
import Link from "next/link";

export default function About() {
  // up to top button
  // window.addEventListener("scroll", function () {
  //   const upToTop = document.querySelector("a.bottom__to__top");
  //   upToTop.classList.toggle("active", window.scrollY > 0)
  // });

  return (
    <section className="bg-tema-second py-28" id="about">
      <div className="container w-11/12 mx-auto">
        <div className="flex flex-wrap items-start justify-center w-full overflow-hidden">
          <div className="max-w-[50%] flex p-5 justify-center flex-col">
            <figure>
              <Image src={about} alt="my self" className="w-full rounded-xl" />
            </figure>
          </div>
          <div className="max-w-[50%] flex p-5 justify-center flex-col">
            <h1 className="mb-2.5 font-bold text-start font-montserrat text-6xl">
              About Me
            </h1>
            <div className="about__meta">
              <p className="mb-4 text-lg leading-7 text-more font-poppins">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deleniti adipisci asperiores cum ad soluta. Itaque tenetur id, laborum, ab voluptatum nulla quidem omnis doloribus nemo quo dolorem vel vero illo nobis cupiditate, dignissimos quasi suscipit. Cum nostrum distinctio maxime?
              </p>
              <p className="mb-4 text-lg leading-7 text-more font-poppins">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deleniti adipisci asperiores cum ad soluta. Itaque tenetur id, laborum, ab voluptatum nulla quidem omnis doloribus nemo quo dolorem vel vero illo nobis cupiditate, dignissimos quasi suscipit. Cum nostrum distinctio maxime?
              </p>
              <p className="mb-4 text-lg leading-7 text-more font-poppins">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deleniti adipisci asperiores cum ad soluta. Itaque tenetur id, laborum,
              </p>
              <div className="flex items-center py-5">
                <Link href="#">
                  <a>
                    <button className="w-48 rounded-md text-lg capitalize transition duration-500 ease-in border-2 border-solid h-14 border-primary mx-2.5 bg-primary text-white font-medium hover:bg-white hover:text-primary">Download CV</button>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <button className="w-48 rounded-md text-lg capitalize transition duration-500 ease-in border-2 border-solid h-14 border-primary mx-2.5 bg-primary text-white font-medium hover:bg-white hover:text-primary">Hire Me</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UP TO TOP BTN */}
      <div className="fixed flex items-center justify-center w-10 h-10 transition-all duration-500 ease-in-out rounded-full cursor-pointer bottom-6 right-6 bg-primary z-[999] hover:opacity-70 hover:motion-safe:animate-bounce">
        <Link href="#">
          <a>
            <BsChevronUp className="text-white" />
          </a>
        </Link>
      </div>
    </section>
  )
}
