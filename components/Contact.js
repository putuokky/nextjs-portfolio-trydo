import Image from "next/image";
import contactImg from '../public/img/about-9.jpg'

export default function Contact() {
  return (
    <div className="bg-tema-second py-28" id="contact">
      <div className="flex flex-wrap items-start justify-center w-full overflow-hidden">
        <div className="max-w-[50%] flex p-5 justify-center flex-col">
          <div>
            <div>
              <h1 className="text-6xl">Hire Me.</h1>
              <p className="text-lg leading-7 font-normal text-white">I am available for freelance work. Connect with me via phone: <br />
                <strong>+621023456789</strong> or email <strong>admin@domain.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input type="text" className="block w-full px-5 border-2 border-solid border-more/40 bg-tema rounded-md transition-all duration-300 ease-in-out h-12 leading-[46px] my-5 outline-none text-base tracking-wide bg-none" placeholder="Your Name *" />
              <input type="text" className="block w-full px-5 border-2 border-solid border-more/40 bg-tema rounded-md transition-all duration-300 ease-in-out h-12 leading-[46px] my-5 outline-none text-base tracking-wide bg-none" placeholder="Your Email *" />
              <input type="text" className="block w-full px-5 border-2 border-solid border-more/40 bg-tema rounded-md transition-all duration-300 ease-in-out h-12 leading-[46px] my-5 outline-none text-base tracking-wide bg-none" placeholder="Write a Subject *" />
              <textarea className="h-28 bg-none px-5 w-full leading-[46px] bg-tema outline-none text-base tracking-wide border-2 border-solid border-more/40" name="message" id="message" placeholder="Write Your message *"></textarea>
              <button className="my-5 cursor-pointer text-lg font-medium rounded border-2 border-solid border-primary text-white uppercase tracking-widest transition-all duration-300 ease-out h-12 w-44 mx-2.5 hover:bg-primary" type="submit">Submit</button>
            </div>
          </div>
        </div>
        <div className="max-w-[50%] flex p-5 justify-center flex-col">
          <Image alt="" className="rounded-lg w-full overflow-hidden" src={contactImg} />
        </div>
      </div>
    </div>
  )
}
