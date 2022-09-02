import Image from "next/image";
import footerImg from '../public/img/logo (1).png'

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between py-2.5 px-5 z-[100]">
      <figure>
        <Image className="cursor-pointer" alt="footer image" src={footerImg} />
      </figure>
      <p className="text-sm opacity-75 text-more">Copyright &copy; {new Date().getFullYear()}. All Rights Reseved.</p>
    </footer>
  )
}
