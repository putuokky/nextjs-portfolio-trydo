import Image from "next/image";
import blog1 from "../public/img/blog-01.jpg";
import blog2 from "../public/img/blog-02.jpg";
import blog3 from "../public/img/blog-03.jpg";

export default function Blog() {
  return (
    <section className="py-24" id="blog">
      <div>
        <h1 className="text-6xl text-center font-poppins font-bold mb-2.5">My Latest News</h1>
        <p className="mb-4 text-lg leading-5 text-center text-more font-poppins">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, hic.</p>
        <p className="mb-4 text-lg leading-5 text-center text-more font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="container w-11/12 mx-auto">
        <div className="flex flex-wrap items-start justify-center w-full overflow-hidden">
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="relative hover:inline hover:transform hover:scale-110 cursor-pointer">
              <div className="relative cursor-pointer">
                <div>
                  <Image className="rounded-xl w-full object-cover transition duration-300 opacity-70 relative after:content-none after:w-full after:h-full after:bg-black after:z-[1] after:opacity-10" alt="" src={blog1} />
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-primary rounded-xl transition duration-300 opacity-30 hidden"></div>
              </div>
              <div className="w-full h-full top-0 left-0 flex items-center justify-end px-5 flex-col flex-wrap rounded-xl overflow-hidden absolute">
                <h5 className="font-normal text-xl pb-5">Development</h5>
                <h4 className="text-2xl font-poppins font-bold pb-5">Getting tickets to the big show</h4>
                <a href="#" className="blog project__btn btn">Read More</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="relative hover:inline hover:transform hover:scale-110 cursor-pointer">
              <div className="relative cursor-pointer">
                <div>
                  <Image className="rounded-xl w-full object-cover transition duration-300 opacity-70 relative after:content-none after:w-full after:h-full after:bg-black after:z-[1] after:opacity-10" alt="" src={blog2} />
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-primary rounded-xl transition duration-300 opacity-30 hidden"></div>
              </div>
              <div className="w-full h-full top-0 left-0 flex items-center justify-end px-5 flex-col flex-wrap rounded-xl overflow-hidden absolute">
                <h5 className="font-normal text-xl pb-5">Development</h5>
                <h4 className="text-2xl font-poppins font-bold pb-5">Getting tickets to the big show</h4>
                <a href="#" className="blog project__btn btn">Read More</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="relative hover:inline hover:transform hover:scale-110 cursor-pointer">
              <div className="relative cursor-pointer">
                <div>
                  <Image className="rounded-xl w-full object-cover transition duration-300 opacity-70 relative after:content-none after:w-full after:h-full after:bg-black after:z-[1] after:opacity-10" alt="" src={blog3} />
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-primary rounded-xl transition duration-300 opacity-30 hidden"></div>
              </div>
              <div className="w-full h-full top-0 left-0 flex items-center justify-end px-5 flex-col flex-wrap rounded-xl overflow-hidden absolute">
                <h5 className="font-normal text-xl pb-5">Development</h5>
                <h4 className="text-2xl font-poppins font-bold pb-5">Getting tickets to the big show</h4>
                <a href="#" className="py-3 px-9 mb-12 text-lg font-medium rounded-md border-2 border-solid border-primary bg-primary text-white uppercase tracking-widest transition-all duration-300 ease-linear h-12 w-44 mx-2.5 hover:mb-10">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}