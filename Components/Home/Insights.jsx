import Link from "next/link";
import React from "react";


const Insights = () => {
  return (
    <div className="container flex flex-col gap-28">
      <h2 className="flex items-center gap-5 regular-30 poppins-font">
        <hr className="w-20 h-1 rounded bg-black-80" /> Insights
      </h2>
      <div className="insights flexEnd">
        <div className="inner-insights w-3/4">
          <div className="py-16 flex justify-between items-start gap-28 pb-6 border-b-2">
            <div className="blog-info flex flex-col gap-3">
              <p className="regular-34 poppins-font">7 min read</p>
              <p className="regular-19 poppins-font">October 2, 2023</p>
            </div>
            <div className="blog-name w-1/2 flex flex-col gap-6">
              <h3 className="blog-title">Creating a Corporate Learning Culture</h3>
              <p className="regular-20 poppins-font">
                By putting users' needs at the forefront, we tell a unique story
                of your company, juggling with fancy visual elements.
              </p>
            </div>
            <Link href="/contact" className="regular-28 poppins-font">Learn More</Link>
          </div>
          <div className="py-16 flex justify-between items-start gap-28 pb-6 border-b-2">
            <div className="blog-info flex flex-col gap-3">
              <p className="regular-34 poppins-font">7 min read</p>
              <p className="regular-19 poppins-font">October 2, 2023</p>
            </div>
            <div className="blog-name w-1/2 flex flex-col gap-6">
              <h3 className="blog-title">Creating a Corporate Learning Culture</h3>
              <p className="regular-20 poppins-font">
                By putting users' needs at the forefront, we tell a unique story
                of your company, juggling with fancy visual elements.
              </p>
            </div>
            <Link href="/contact" className="regular-28 poppins-font">Learn More</Link>
          </div>
          <div className="py-16 flex justify-between items-start gap-28 pb-6 border-b-2">
            <div className="blog-info flex flex-col gap-3">
              <p className="regular-34 poppins-font">7 min read</p>
              <p className="regular-19 poppins-font">October 2, 2023</p>
            </div>
            <div className="blog-name w-1/2 flex flex-col gap-6">
              <h3 className="blog-title">Creating a Corporate Learning Culture</h3>
              <p className="regular-20 poppins-font">
                By putting users' needs at the forefront, we tell a unique story
                of your company, juggling with fancy visual elements.
              </p>
            </div>
            <Link href="/contact" className="regular-28 poppins-font">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
