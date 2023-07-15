import Image from "next/image";
import logo from "../images/logo.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-40 bg-amazon_light text-gray-300 flex flex-col items-center justify-center gap-4 p-2">
      <Image className="w-24" src={logo} alt="logo" />
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a
          className="text-[1.4rem] hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          href="https://twitter.com/"
          target="_blank"
        >
          <AiOutlineTwitter />
        </a>
        <a
          className="text-[1.4rem] hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          href="https://www.linkedin.com/in/ekunolajohn/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="text-[1.4rem] hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          href="https://johnekunola.com/"
          target="_blank"
        >
          <BsGlobeEuropeAfrica />
        </a>
        <a
          className="text-[1.4rem] hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          href="mailto:ekunolajohn@gmail.com"
          target="_blank"
        >
          <CgMail />
        </a>
      </div>
    </div>
  );
};

export default Footer;
