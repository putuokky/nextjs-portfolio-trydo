import Image from "next/image";
import contactImg from '../public/img/about-9.jpg'

export default function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">I am available for freelance work. Connect with me via phone: <br />
                <strong>+621023456789</strong> or email <strong>admin@domain.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input type="text" className="contact name" placeholder="Your Name *" />
              <input type="text" className="contact email" placeholder="Your Email *" />
              <input type="text" className="contact subject" placeholder="Write a Subject" />
              <textarea name="message" id="message" placeholder="Write Your message"></textarea>
              <button className="btn contact pointer" type="submit">Submit</button>
            </div>
          </div>
        </div>
        <div className="col__2">
          <Image alt="" className="contact__img" src={contactImg} />
        </div>
      </div>
    </div>
  )
}
