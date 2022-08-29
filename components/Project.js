import Image from "next/image";
import project1 from "../public/img/portfolio-1.jpg";

export default function Project() {
  return (
    <div className="project component__space">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, hic.</p>
        <p className="heading p__color">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  {/* <img src={project1} alt="" className="project__img" /> */}
                  <Image className="project__img" alt="" src={project1} />
                </div>
                <div className="mask__effect"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
