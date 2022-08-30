import Image from "next/image";
import blog1 from "../public/img/blog-01.jpg";
import blog2 from "../public/img/blog-02.jpg";
import blog3 from "../public/img/blog-03.jpg";

export default function Blog() {
  return (
    <div className="blog component__space">
      <div className="heading">
        <h1 className="heading">My Latest News</h1>
        <p className="heading p__color">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, hic.</p>
        <p className="heading p__color">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src="/img/blog-01.jpg" alt="" className="project__img" />
                  {/* <Image className="project__img" alt="" src={blog1} /> */}
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="blog_meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting tickets to the big show</h4>
                <a href="#" className="blog project__btn btn">Read More</a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src="/img/blog-02.jpg" alt="" className="project__img" />
                  {/* <Image className="project__img" alt="" src={blog1} /> */}
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="blog_meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting tickets to the big show</h4>
                <a href="#" className="blog project__btn btn">Read More</a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src="/img/blog-03.jpg" alt="" className="project__img" />
                  {/* <Image className="project__img" alt="" src={blog1} /> */}
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="blog_meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting tickets to the big show</h4>
                <a href="#" className="blog project__btn btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}