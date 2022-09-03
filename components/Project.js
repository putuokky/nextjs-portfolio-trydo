import Image from "next/image";
import Link from "next/link";
import project1 from "../public/img/portfolio-1.jpg";
import project2 from "../public/img/portfolio-2.jpg";
import project3 from "../public/img/portfolio-3.jpg";
import project4 from "../public/img/portfolio-4.jpg";

export default function Project() {
  return (
    <section className="bg-tema-second py-28" id="portfolio">
      <div>
        <h1 className="text-6xl text-center font-poppins font-bold mb-2.5">My Latest Project</h1>
        <p className="mb-4 text-lg leading-5 text-center text-more font-poppins">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, hic.</p>
        <p className="mb-4 text-lg leading-5 text-center text-more font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="container w-11/12 mx-auto">
        <div className="flex flex-wrap items-start justify-center w-full overflow-hidden">
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="relative hover:inline hover:transform hover:scale-110 cursor-pointer">
              <div className="relative cursor-pointer">
                <div>
                  <Image className="rounded-xl w-full object-cover transition duration-300 opacity-70 relative after:content-none after:w-full after:h-full after:bg-black after:z-[1] after:opacity-10" alt="" src={project1} />
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-primary rounded-xl transition duration-300 opacity-30 hidden"></div>
              </div>
              <div className="absolute top-0 left-0 flex h-full items-center justify-center flex-col flex-wrap rounded-xl w-full">
                <h5 className="font-normal text-xl pb-5">Development</h5>
                <h4 className="text-2xl font-poppins font-bold pb-5">Getting tickets to the big show</h4>
                <a href="#" className="py-3 px-9 border-2 border-solid border-more rounded-md transition duration-300 ease-in-out hover:bg-primary hover:border-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="relative hover:inline hover:transform hover:scale-110 cursor-pointer">
              <div className="relative cursor-pointer">
                <div>
                  <Image className="rounded-xl w-full object-cover transition duration-300 opacity-70 relative after:content-none after:w-full after:h-full after:bg-black after:z-[1] after:opacity-10" alt="" src={project3} />
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-primary rounded-xl transition duration-300 opacity-30 hidden"></div>
              </div>
              <div className="absolute top-0 left-0 flex h-full items-center justify-center flex-col flex-wrap rounded-xl w-full">
                <h5 className="font-normal text-xl pb-5">Development</h5>
                <h4 className="text-2xl font-poppins font-bold pb-5">Getting tickets to the big show</h4>
                <a href="#" className="py-3 px-9 border-2 border-solid border-more rounded-md transition duration-300 ease-in-out hover:bg-primary hover:border-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="relative hover:inline hover:transform hover:scale-110 cursor-pointer">
              <div className="relative cursor-pointer">
                <div>
                  <Image className="rounded-xl w-full object-cover transition duration-300 opacity-70 relative after:content-none after:w-full after:h-full after:bg-black after:z-[1] after:opacity-10" alt="" src={project2} />
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-primary rounded-xl transition duration-300 opacity-30 hidden"></div>
              </div>
              <div className="absolute top-0 left-0 flex h-full items-center justify-center flex-col flex-wrap rounded-xl w-full">
                <h5 className="font-normal text-xl pb-5">Development</h5>
                <h4 className="text-2xl font-poppins font-bold pb-5">Getting tickets to the big show</h4>
                <a href="#" className="py-3 px-9 border-2 border-solid border-more rounded-md transition duration-300 ease-in-out hover:bg-primary hover:border-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="relative hover:inline hover:transform hover:scale-110 cursor-pointer">
              <div className="relative cursor-pointer">
                <div>
                  <Image className="rounded-xl w-full object-cover transition duration-300 opacity-70 relative after:content-none after:w-full after:h-full after:bg-black after:z-[1] after:opacity-10" alt="" src={project4} />
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-primary rounded-xl transition duration-300 opacity-30 hidden"></div>
              </div>
              <div className="absolute top-0 left-0 flex h-full items-center justify-center flex-col flex-wrap rounded-xl w-full">
                <h5 className="font-normal text-xl pb-5">Development</h5>
                <h4 className="text-2xl font-poppins font-bold pb-5">Getting tickets to the big show</h4>
                <a href="#" className="py-3 px-9 border-2 border-solid border-more rounded-md transition duration-300 ease-in-out hover:bg-primary hover:border-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="relative hover:inline hover:transform hover:scale-110 cursor-pointer">
              <div className="relative cursor-pointer">
                <div>
                  <Image className="rounded-xl w-full object-cover transition duration-300 opacity-70 relative after:content-none after:w-full after:h-full after:bg-black after:z-[1] after:opacity-10" alt="" src={project1} />
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-primary rounded-xl transition duration-300 opacity-30 hidden"></div>
              </div>
              <div className="absolute top-0 left-0 flex h-full items-center justify-center flex-col flex-wrap rounded-xl w-full">
                <h5 className="font-normal text-xl pb-5">Development</h5>
                <h4 className="text-2xl font-poppins font-bold pb-5">Getting tickets to the big show</h4>
                <a href="#" className="py-3 px-9 border-2 border-solid border-more rounded-md transition duration-300 ease-in-out hover:bg-primary hover:border-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="relative hover:inline hover:transform hover:scale-110 cursor-pointer">
              <div className="relative cursor-pointer">
                <div>
                  <Image className="rounded-xl w-full object-cover transition duration-300 opacity-70 relative after:content-none after:w-full after:h-full after:bg-black after:z-[1] after:opacity-10" alt="" src={project2} />
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-primary rounded-xl transition duration-300 opacity-30 hidden hover:inline hover:transform hover:scale-110"></div>
              </div>
              <div className="absolute top-0 left-0 flex h-full items-center justify-center flex-col flex-wrap rounded-xl w-full">
                <h5 className="font-normal text-xl pb-5">Development</h5>
                <h4 className="text-2xl font-poppins font-bold pb-5">Getting tickets to the big show</h4>
                <a href="#" className="py-3 px-9 border-2 border-solid border-more rounded-md transition duration-300 ease-in-out hover:bg-primary hover:border-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-8">
            <Link href="#">
              <a className="hover:bg-white hover:text-primary py-4 px-5 font-medium rounded-md border-2 border-solid border-primary bg-primary text-white uppercase tracking-widest transition-all duration-300 ease-linear cursor-pointer">View More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
