import React, { useState } from "react";
import "./portfolio.css";
import website2 from "../../assets/website2.PNG";
import website from "../../assets/website.PNG";
import meal1 from "../../assets/meal1.PNG";
import meal2 from "../../assets/meal2.PNG";
import fantalab2 from "../../assets/fantalab1.PNG";
import fantalab1 from "../../assets/fantalab2.PNG";
import fantalab3 from "../../assets/fantalab3.PNG";
import fantalab4 from "../../assets/fantalab4.PNG";
import fantalab5 from "../../assets/fantalab5.jpeg";
import fantalab6 from "../../assets/fantalab6.jpeg";
import sosFanta1 from "../../assets/sosFanta1.jpeg";
import sosFanta2 from "../../assets/sosFanta2.jpeg";
import sosFanta3 from "../../assets/sosFanta3.jpeg";
import sosFanta4 from "../../assets/sosFanta4.jpeg";

import { BsPatchCheckFill } from "react-icons/bs";
import { fantalabBulletPoints, mainProjectData, smallProjectsData, sosBulletPoints } from "./portfolioData";

const webImages = [fantalab1, fantalab2, fantalab3, fantalab4, fantalab5];
const mobileImages = [sosFanta1, sosFanta2, sosFanta3, sosFanta4];

const ProjectImages = ({ data, type, images }) => {
  const [currentMainImage, setCurrentMainImage] = useState(0);

  const nextMainImage = () => {
    setCurrentMainImage(
      (nextMainImage) => (nextMainImage + 1) % images.length,
    );
  };

  const prevMainImage = () => {
    setCurrentMainImage(
      (nextMainImage) =>
        (nextMainImage + images.length - 1) %
        images.length,
    );
  };

  return (
    <div className="w-full  ">
      <div>
        <div>
          <img
            className="min-h-[250px] md:min-h-[500px] max-h-[550px] lg:h-[600px] lg:w-[900px] object-cover md:object-contain"
            src={images[currentMainImage]}
          />
        </div>
        <div className=" gap-2 p-2 flex justify-center items-center">
          <button
            className="btn-carousel "
            onClick={prevMainImage}
          >
            &#10094;
          </button>
          <button
            className="btn-carousel"
            onClick={nextMainImage}
          >
            &#10095;
          </button>
        </div>
        {/*{type === "secondary" ? (*/}
        {/*  <div className="flex gap-10 md:gap-0 justify-center md:justify-between flex-col md:flex-row pt-8">*/}
        {/*    <div className=" px-4 flex flex-col items-center justify-start border-2 border-purple-800 flex-1">*/}
        {/*      <h3 className="text-left">{data?.[0].title1}</h3>*/}
        {/*      <div>*/}
        {/*        <p className="text-base">{data?.[0].description1}</p>*/}
        {/*      </div>*/}
        {/*      <div className="project-btns mt-3">*/}
        {/*        <a*/}
        {/*          href={data?.[0].liveLink1}*/}
        {/*          target="_blank"*/}
        {/*          rel="noreferrer"*/}
        {/*          className="btn"*/}
        {/*        >*/}
        {/*          Live*/}
        {/*        </a>*/}
        {/*        <a*/}
        {/*          href={data?.[0].codeLink1}*/}
        {/*          target="_blank"*/}
        {/*          rel="noreferrer"*/}
        {/*          className="btn"*/}
        {/*        >*/}
        {/*          Code*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="  px-4 flex flex-col items-center justify-start border-2 border-purple-800 flex-1">*/}
        {/*      <h3>{data?.[0].title2}</h3>*/}
        {/*      <div>*/}
        {/*        <p className="text-base">{data?.[0].description2}</p>*/}
        {/*      </div>*/}
        {/*      <div className="project-btns mt-3">*/}
        {/*        <a*/}
        {/*          href={data?.[0].liveLink2}*/}
        {/*          target="_blank"*/}
        {/*          rel="noreferrer"*/}
        {/*          className="btn"*/}
        {/*        >*/}
        {/*          Live*/}
        {/*        </a>*/}
        {/*        <a*/}
        {/*          href={data?.[0].codeLink2}*/}
        {/*          target="_blank"*/}
        {/*          rel="noreferrer"*/}
        {/*          className="btn"*/}
        {/*        >*/}
        {/*          Code*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*) : (*/}
        {/*  <div className="pt-8">*/}
        {/*    <h2 className="text-center">{data?.[0].title}</h2>*/}
        {/*    <div className="flex items-center w-full justify-center ">*/}
        {/*      */}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

const ProjectInfo = ({ projectBulletPoints }) => {
  return (
    <div className="p-2 w-full lg:w-[800px] flex flex-col gap-5 ">
      {projectBulletPoints.map((item) => {
        return (
          <div className='flex gap-4 lg:gap-8 '>
            <div className='pt-2'>
            <BsPatchCheckFill fontSize={5} className="icons"/>
            </div>
            {/*<div >*/}
              <p className="text-base ">{item}</p>
            {/*</div>*/}
          </div>
        );
      })}
    </div>
  );
};



function Portfolio() {
  return (
    <section className="portfolio-section pt-20" id="portfolio">
      <h2 style={{textAlign:'center'}} >Key Projects at Fantasy Football Platform</h2>
      <div className="w-full flex flex-col items-center gap-1 ">
        <div className="pt-14 " >
          <h1 style={{ textAlign: "center",color:'#debbf9f3' }}>{"Mobile App - SOSFanta"}</h1>

          <div className='pt-12 gap-8  justify-center flex  flex-col items-center'>
            <ProjectImages images={mobileImages}/>
            <ProjectInfo projectBulletPoints={sosBulletPoints}/>
          </div>
        </div>
        <div className="pt-10 " >
        <h1 style={{ textAlign: "center" ,color:'#debbf9f3'}}>{"Web/Mobile App - Fantalab"}</h1>
          <div className=' gap-8  justify-center flex  flex-col items-center'>
        <ProjectImages images={webImages}/>
        <ProjectInfo projectBulletPoints={fantalabBulletPoints}/>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
