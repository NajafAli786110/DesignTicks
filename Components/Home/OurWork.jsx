import { IoIosArrowForward } from 'react-icons/io';
import Link from "next/link";

const OurWork = () => {
  const CaseStudiesData = [
    {
      ImageUrl: "/Zonl.png",
      title: "Nozl",
      designation: "Branding / Web Design / Mobile Design",
    },
    {
      ImageUrl: "/Charmaine Sapp.png",
      title: "Charmaine Sapp",
      designation: "Branding / Web Design / Mobile Design",
    },
    {
      ImageUrl: "/1010 Wilshire Los Angeles Real Estate.png",
      title: "Wilshire",
      designation: "Branding / Web Design / Mobile Design",
    },
    {
      ImageUrl: "/Compound.png",
      title: "Compound",
      designation: "Branding / Web Design / Mobile Design",
    },
    {
      ImageUrl: "/Jays.png",
      title: "Jays",
      designation: "Branding / Web Design / Mobile Design",
    },
    {
      ImageUrl: "/Yuri Hana.png",
      title: "Yuri Hana",
      designation: "Branding / Web Design / Mobile Design",
    },
  ];

  const firstRowData = CaseStudiesData.slice(0, 3);
  const secondRowData = CaseStudiesData.slice(3, 6);

  return (
    <>
      <div className="flex flex-col gap-8 container">
        <h2 className="flex items-center gap-5 regular-30 poppins-font"><hr className="w-20 pt-1 rounded bg-black-80"/> Our Work</h2>
        <div className="Case_studies flexCenter gap-12">
          <div>
            {firstRowData.map((work, index) => (
              <div key={index} className=" flex flex-col gap-2 mb-16 ">
                <img src={work.ImageUrl} alt={work.title} width={700}/>
                <h3 className="regular-38 poppins-font">{work.title}</h3>
                <p className="regular-18 text-black-80">{work.designation}</p>
              </div>
            ))}
          </div>

          <div className="mt-32">
            {secondRowData.map((work, index) => (
              <div key={index} className="flex flex-col gap-2 mb-16">
                <img src={work.ImageUrl} alt={work.title} width={700}/>
                <h3 className="regular-38 poppins-font">{work.title}</h3>
                <p className="regular-18">{work.designation}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flexCenter">
          <Link href="/contact" className='flex items-center gap-2 regular-36 poppins-font text-orange-50'>View Projects <IoIosArrowForward className='regular-24'/> </Link>
        </div>
      </div>
    </>
  );
};

export default OurWork;
