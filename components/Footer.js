import Image from "next/image";
import footerImg from '../public/img/logo (1).png'

export default function Footer() {
  return (
    <div className="footer d__flex align__items__center justify__content__space__between pz-10" style={{ "zIndex": "100", "padding": "10px 20px" }}>
      <Image className="footer__img pointer" alt="" src={footerImg} />
      <span className="copyright" style={{ "color": "#c6c9d8", "fontSize": "14px", "opacity": "0.75" }}>Copyright &copy; {new Date().getFullYear()} programmer Okky Maheswara. All Rights Reseved.</span>
    </div>
  )
}
