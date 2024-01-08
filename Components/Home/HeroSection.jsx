import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container max-height py-5">
      <Image
        src="/Ticks_Hero.svg"
        alt="Designticks"
        className="mb -mb-72 z-10 self-center"
        width={661}
        height={543}
      />
      <h1 className="regular-105 z-20">Expert Graphic Design &</h1>
      <h1 className="regular-105 pl-28">Web Development Under One Roof.</h1>
      <div className="flex flex-col items-end gap-12">
        <p className="w-1/2 regular-28 text-black-80 poppins-font">
          Many brands are out there, but only special ones get noticed. At
          Design Ticks, we make sure your brand shines and gets the love it
          deserves.
        </p>
        <div className="flexBetween w-full">
          <Image src="/Clutch Review.png" width={231} height={78}></Image>
          <Link href="/contact" className="btn_orange">
            Scroll to know us better
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
