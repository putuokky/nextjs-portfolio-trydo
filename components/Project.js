import Image from "next/image";
import project1 from "../public/img/portfolio-1.jpg";
import project2 from "../public/img/portfolio-2.jpg";
import project3 from "../public/img/portfolio-3.jpg";
import project4 from "../public/img/portfolio-4.jpg";

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
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src="/img/portfolio-1.jpg" alt="" className="project__img" />
                  {/* <Image className="project__img" alt="" src={project1} /> */}
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting tickets to the big show</h4>
                <a href="#" className="project__btn">View Details</a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src="/img/portfolio-3.jpg" alt="" className="project__img" />
                  {/* <Image className="project__img" alt="" src={project3} /> */}
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting tickets to the big show</h4>
                <a href="#" className="project__btn">View Details</a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src="/img/portfolio-2.jpg" alt="" className="project__img" />
                  {/* <Image className="project__img" alt="" src={project2} /> */}
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting tickets to the big show</h4>
                <a href="#" className="project__btn">View Details</a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src="/img/portfolio-4.jpg" alt="" className="project__img" />
                  {/* <Image className="project__img" alt="" src={project4} /> */}
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting tickets to the big show</h4>
                <a href="#" className="project__btn">View Details</a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src="/img/portfolio-1.jpg" alt="" className="project__img" />
                  {/* <Image className="project__img" alt="" src={project1} /> */}
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting tickets to the big show</h4>
                <a href="#" className="project__btn">View Details</a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src="/img/portfolio-3.jpg" alt="" className="project__img" />
                  {/* <Image className="project__img" alt="" src={project2} /> */}
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting tickets to the big show</h4>
                <a href="#" className="project__btn">View Details</a>
              </div>
            </div>
          </div>
          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
