import Image from "next/image";
import React from "react";

const OurClient = () => {
  return (
    <>
      <div className="w-full py-32 bg-sectionBg-10 flex flex-col justify-center items-center">
        <div className="inner-container-custom container flex flex-col justify-start gap-28">
          <h2 className="flex items-center gap-5 regular-30 poppins-font">
            <hr className="w-20 h-1 rounded bg-black-80" /> Clients
          </h2>
          <div className="clients-logo flexBetween px-20">
            <Image src="/Client Logo (3).png" height={88} width={200} />
            <Image src="/Client Logo (5).png" height={88} width={200} />
            <Image src="/Client Logo (1).png" height={88} width={200} />
            <Image src="/Client Logo (1).png" height={88} width={200} />
          </div>
          <div className="clients-logo flexBetween px-20">
            <Image src="/Client Logo (2).png" height={88} width={200} />
            <Image src="/Client Logo (1).png" height={88} width={200} />
            <Image src="/Client Logo (4).png" height={88} width={200} />
            <Image src="/Client Logo (2).png" height={88} width={200} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClient;
