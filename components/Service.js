import { FiUsers, FiMonitor, FiGlobe } from 'react-icons/fi'

export default function Service() {
  return (
    <section className="py-24" id="services">
      <div>
        <h1 className="text-6xl text-center font-poppins font-bold mb-2.5">My Awesome Service</h1>
        <p className="mb-4 text-lg leading-5 text-center text-more font-poppins">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, hic.</p>
        <p className="mb-4 text-lg leading-5 text-center text-more font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="container w-11/12 mx-auto">
        <div className="flex flex-wrap items-start justify-center w-full overflow-hidden">
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="w-full transition ease-linear rounded-lg cursor-pointer bg-tema-second p-14 hover:origin-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
              <div>
                <FiUsers className='mb-6 text-5xl font-normal text-white' />
              </div>
              <article>
                <h1 className="text-lg font-poppins py-2.5">Business Strategy</h1>
                <p className="mb-4 text-lg leading-7 text-more font-poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nobis sed soluta dolores.</p>
              </article>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="w-full transition ease-linear rounded-lg cursor-pointer bg-tema-second p-14 hover:origin-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
              <div>
                <FiGlobe className='inline-flex mb-6 text-5xl font-normal text-white' />
              </div>
              <article>
                <h1 className="text-lg font-poppins py-2.5">Website Development</h1>
                <p className="mb-4 text-lg leading-7 text-more font-poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nobis sed soluta dolores.</p>
              </article>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="w-full transition ease-linear rounded-lg cursor-pointer bg-tema-second p-14 hover:origin-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
              <div>
                <FiUsers className='inline-flex mb-6 text-5xl font-normal text-white' />
              </div>
              <article>
                <h1 className="text-lg font-poppins py-2.5">Marketing & reporting</h1>
                <p className="mb-4 text-lg leading-7 text-more font-poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nobis sed soluta dolores.</p>
              </article>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="w-full transition ease-linear rounded-lg cursor-pointer bg-tema-second p-14 hover:origin-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
              <div>
                <FiMonitor className='inline-flex mb-6 text-5xl font-normal text-white' />
              </div>
              <article>
                <h1 className="text-lg font-poppins py-2.5">Mobile App Development</h1>
                <p className="mb-4 text-lg leading-7 text-more font-poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nobis sed soluta dolores.</p>
              </article>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="w-full transition ease-linear rounded-lg cursor-pointer bg-tema-second p-14 hover:origin-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
              <div>
                <FiUsers className='inline-flex mb-6 text-5xl font-normal text-white' />
              </div>
              <article>
                <h1 className="text-lg font-poppins py-2.5">Business Strategy</h1>
                <p className="mb-4 text-lg leading-7 text-more font-poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nobis sed soluta dolores.</p>
              </article>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3 p-5 mt-5">
            <div className="w-full transition duration-500 ease-out rounded-lg cursor-pointer bg-tema-second p-14 hover:origin-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
              <div>
                <FiGlobe className='inline-flex mb-6 text-5xl font-normal text-white' />
              </div>
              <article>
                <h1 className="text-lg font-poppins py-2.5">Website Development</h1>
                <p className="mb-4 text-lg leading-7 text-more font-poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nobis sed soluta dolores.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
