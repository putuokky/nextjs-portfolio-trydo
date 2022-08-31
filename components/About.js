import Image from "next/image";
import about from '../public/img/about.jpg'
import { BsChevronUp } from "react-icons/bs";
import { useEffect } from "react";

export default function About() {
  // up to top button
  // window.addEventListener("scroll", function () {
  //   const upToTop = document.querySelector("a.bottom__to__top");
  //   upToTop.classList.toggle("active", window.scrollY > 0)
  // });

  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <Image src={about} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">
              About Me
            </h1>
            <div className="about__meta">
              <p className="abotu__text p__color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deleniti adipisci asperiores cum ad soluta. Itaque tenetur id, laborum, ab voluptatum nulla quidem omnis doloribus nemo quo dolorem vel vero illo nobis cupiditate, dignissimos quasi suscipit. Cum nostrum distinctio maxime?
              </p>
              <p className="abotu__text p__color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deleniti adipisci asperiores cum ad soluta. Itaque tenetur id, laborum, ab voluptatum nulla quidem omnis doloribus nemo quo dolorem vel vero illo nobis cupiditate, dignissimos quasi suscipit. Cum nostrum distinctio maxime?
              </p>
              <p className="abotu__text p__color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deleniti adipisci asperiores cum ad soluta. Itaque tenetur id, laborum,
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <BsChevronUp className="white" />
        </a>
      </div>
    </div>
  )
}
