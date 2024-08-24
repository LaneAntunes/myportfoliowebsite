import React, { useState } from "react"
import "./portfolio.css"
import MasterGroceries from "../../assets/Capture4.PNG"
import MemeGenerator from "../../assets/Capture2.PNG"
import tenzies from "../../assets/tenziesGamePic.PNG"
import portfolioWebsite from "../../assets/portfolioWebsite.JPG"
import websitePicture from "../../assets/websitePicture.JPG"
import website2 from "../../assets/website2.PNG"
import website from "../../assets/website.PNG"
import meal1 from "../../assets/meal1.PNG"
import meal2 from "../../assets/meal2.PNG"
import fantalab1 from "../../assets/fantalab1.PNG"
import fantalab2 from "../../assets/fantalab2.PNG"
import fantalab3 from "../../assets/fantalab3.PNG"
import fantalab4 from "../../assets/fantalab4.PNG"
import { BsPatchCheckFill } from "react-icons/bs"

function Portfolio() {
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
    <section className="portfolio-section" id="portfolio">
      <h5>What I have built</h5>
      <h1>My Projects</h1>
      <div
        className="main-project"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 5,
        }}
      >
        <div className="product-img" style={{ width: " 70%", height: 600 }}>
          <img
            src={imagesMainProject[currentMainImage]}
            alt="Language website"
          />
          <div className="carousel-controls">
            <button className="btn-carousel" onClick={prevMainImage}>
              &#10094;
            </button>
            <button className="btn-carousel" onClick={nextMainImage}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="main-project-description">
          <h1 style={{ font: "bold", fontSize: 30, paddingTop: 15 }}>
            Fantasy football web and mobile app
          </h1>
        </div>
        <div
          style={{
            paddingTop: 15,
            paddingLeft: 30,
          }}
        >
          <article>
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>
                Revamped the majority of the site's layout, substantially
                improving both navigation and visual design.
              </h4>
            </div>
          </article>
          <article>
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>
                Developed a news management system for collaborators to create
                and publish articles.
              </h4>
            </div>
          </article>
          <article>
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>
                Created a personalized news feed in the app that delivers the
                latest updates on users' favorite players, keeping fans informed
                and engaged.
              </h4>
            </div>
          </article>
          <article>
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>
                Created a soundboard feature for real-time audio sharing,
                enhancing user interaction during auctions.
              </h4>
            </div>
          </article>
          <article>
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>
                Integrated high-performance data tables using React Virtualized
                to improve UI responsiveness.
              </h4>
            </div>
          </article>
          <article>
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>
                Resolved numerous bugs, improving stability for over 1,000,000
                users.
              </h4>
            </div>
          </article>
        </div>
        {/* <div className="main-project-description">
          <div className="all-user-actions">
            <p className="user-actions">Redux</p>
            <p className="user-actions">React Virtualised Window</p>
            <p className="user-actions">Company's component library</p>
            <p className="user-actions">React</p>
            <p className="user-actions">React Native</p>
            <p className="user-actions">Local Storage - Persisted</p>
            <p className="user-actions">Performance enhancement</p>
            <p className="user-actions">Cashing solutions</p>
          </div>
        </div> */}
      </div>
      <div className="main-project" style={{ width: "50%" }}>
        <div className="product-img">
          <img src={images[currentImage]} alt="Language website" />
          <div className="carousel-controls">
            <button className="btn-carousel" onClick={prevImage}>
              &#10094;
            </button>
            <button className="btn-carousel" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="main-project-description">
          <div className="main-project-tools">
            <div className="back-front-end">
              <h4>Project 1 - FullStack language website</h4>
              <p style={{ fontSize: 12 }}>
                This passion project of mine serves over 200 students, allowing
                users to create an account, take tests, save their scores, and
                access a personalized progress page.
              </p>
              <p className="extra-tools-main-project">
                * Built with Firebase and React.
              </p>
              <div className="project-btns">
                <a
                  href="https://teacherlaneantunes.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/LaneAntunes/Language-Website-Full-Stack"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="back-front-end">
              <h4>Project 2 - Meal Manager</h4>
              <p style={{ fontSize: 12 }}>
                This app is a solution for meal planning and grocery shopping,
                automatically updating and categorizing grocery lists when meals
                are adjusted. It dynamically updates servings and costs, and
                allows users to check off items as they shop, simplifying the
                entire process.
              </p>
              <p className="extra-tools-main-project">
                * Build with vanila javascrip and css.
              </p>
              <div className="project-btns">
                <a
                  href="https://mastergroceries.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/LaneAntunes/mastergroceries"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
