import Image from "next/image";
import about from '../public/img/about.jpg'

export default function About() {
  return (
    <div className="about component__space">
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
    </div>
  )
}
