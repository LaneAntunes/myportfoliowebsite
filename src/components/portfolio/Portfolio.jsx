import React, { useState } from "react"
import "./portfolio.css"
import website2 from "../../assets/website2.PNG"
import website from "../../assets/website.PNG"
import meal1 from "../../assets/meal1.PNG"
import meal2 from "../../assets/meal2.PNG"
import fantalab2 from "../../assets/fantalab1.PNG"
import fantalab1 from "../../assets/fantalab2.PNG"
import fantalab3 from "../../assets/fantalab3.PNG"
import fantalab4 from "../../assets/fantalab4.PNG"
import { BsPatchCheckFill } from "react-icons/bs"
import { mainProjectData, smallProjectsData } from "./portfolioData"

const Project = ({ data, type }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentMainImage, setCurrentMainImage] = useState(0)

  const images = [website, website2, meal1, meal2]
  const imagesMainProject = [fantalab1, fantalab2, fantalab3, fantalab4]

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage + images.length - 1) % images.length
    )
  }

  const nextMainImage = () => {
    setCurrentMainImage(
      (nextMainImage) => (nextMainImage + 1) % imagesMainProject.length
    )
  }

  const prevMainImage = () => {
    setCurrentMainImage(
      (nextMainImage) =>
        (nextMainImage + imagesMainProject.length - 1) %
        imagesMainProject.length
    )
  }

  return (
    <div className="w-full lg:w-3/5 ">
      <div>
        <div>
          <img
            className="h-[250px] md:h-[450px]"
            src={`${
              type === "secondary"
                ? images[currentImage]
                : imagesMainProject[currentMainImage]
            }`}
          />
        </div>
        <div className=" gap-2 p-2 flex justify-center items-center">
          <button
            className="btn-carousel "
            onClick={type === "secondary" ? prevImage : prevMainImage}
          >
            &#10094;
          </button>
          <button
            className="btn-carousel"
            onClick={type === "secondary" ? nextImage : nextMainImage}
          >
            &#10095;
          </button>
        </div>
        {type === "secondary" ? (
          <div className="flex gap-10 md:gap-0 justify-center md:justify-between flex-col md:flex-row pt-8">
            <div className=" px-4 flex flex-col items-center justify-start border-2 border-purple-800 flex-1">
              <h3 className="text-left">{data?.[0].title1}</h3>
              <div>
                <p className="text-base">{data?.[0].description1}</p>
              </div>
              <div className="project-btns mt-3">
                <a
                  href={data?.[0].liveLink1}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Live
                </a>
                <a
                  href={data?.[0].codeLink1}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="  px-4 flex flex-col items-center justify-start border-2 border-purple-800 flex-1">
              <h3>{data?.[0].title2}</h3>
              <div>
                <p className="text-base">{data?.[0].description2}</p>
              </div>
              <div className="project-btns mt-3">
                <a
                  href={data?.[0].liveLink2}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Live
                </a>
                <a
                  href={data?.[0].codeLink2}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-8">
            <h1 className="text-center">{data?.[0].title}</h1>
            <div>
              {data?.[0].bulletPoints.map((item) => {
                return (
                  <article>
                    <BsPatchCheckFill className="icons" />
                    <div>
                      <p className="text-base">{item}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <h5>What I have built</h5>
      <h1>My Projects</h1>
      <div className="w-full flex flex-col items-center gap-1 pt-8">
        <Project data={mainProjectData} />
        <Project data={smallProjectsData} type={"secondary"} />
      </div>
    </section>
  )
}

export default Portfolio
