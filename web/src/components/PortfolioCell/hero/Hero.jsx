import React, { useState } from "react";
// import { useParams } from 'react-router-dom';
import Modal from "react-modal";
// import heroImg from "../../assets/img/hero/dark.jpg";
// import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
// import cancelImg from "../../assets/img/cancel.svg";
import Index from "../about/index";


const heroContent = {
  // heroImage: heroImg,
  // heroMobileImage: heroImgMobile,
  heroTitleName: "steve milner",
  heroDesignation: "web designer",
  heroDescriptions: `I'm a Tunisian based web designer & front‑end developer focused on
  crafting clean & user‑friendly experiences, I am passionate about
  building excellent software that improves the lives of those
  around me.`,
  heroBtn: "more about me",
};

const Hero = ({userDetail}) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const animationStyles = `
  @keyframes socialIconAnimation {
    0% {
      transform: translateY(0);
      opacity: 0.5;
    }
    50% {
      transform: translateY(-10px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 0.5;
    }
  }

  .social.list-unstyled li a {
    animation: socialIconAnimation 1s infinite;
    }
  `;
  // const { userId } = useParams(); // Get the userId parameter from the URL

  // // Find the user details based on the userId
  // const userDetail = details.find(user => user.id === userId);



  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            // backgroundImage: `url(${
              // process.env.PUBLIC_URL + heroContent.heroImage
            // })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={userDetail.profileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {userDetail.fullname}.
              <span>{userDetail.companyName}</span>
            </h1>
            <p className="open-sans-font">{userDetail.about}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
            <ul className="social list-unstyled">

        <li>
        <style>{animationStyles}</style>

          <a href={userDetail.facebook} target="_blank" rel="noreferrer">
          <i className="fa fa-facebook" style={{ margin: '12px', color: '#ffc107', border: '1px solid #ffc107', borderRadius: '10px',padding:'8px' }}></i>
          </a>
          <a href={userDetail.instagram} target="_blank" rel="noreferrer">
          <i className="fa fa-instagram" style={{ margin: '12px', color: '#ffc107', border: '1px solid #ffc107', borderRadius: '10px',padding:'8px' }}></i>
           </a>
          <a href={userDetail.linkedin} target="_blank" rel="noreferrer">
          <i className="fa fa-linkedin" style={{ margin: '12px', color: '#ffc107', border: '1px solid #ffc107', borderRadius: '10px',padding:'8px' }}></i>
          </a>
          <a href={userDetail.twitter} target="_blank" rel="noreferrer">
          <i className="fa fa-twitter" style={{ margin: '12px', color: '#ffc107', border: '1px solid #ffc107', borderRadius: '10px',padding:'8px' }}></i>
                    </a>
          <a href={userDetail.telegram} target="_blank" rel="noreferrer">
          <i className="fa fa-telegram" style={{ margin: '12px', color: '#ffc107', border: '1px solid #ffc107', borderRadius: '10px',padding:'8px' }}></i>
                    </a>
          <a href={userDetail.youtube} target="_blank" rel="noreferrer">
          <i className="fa fa-youtube" style={{ margin: '12px', color: '#ffc107', border: '1px solid #ffc107', borderRadius: '10px',padding:'8px' }}></i>
                    </a>

        </li>
        </ul>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            {/* <img src={cancelImg} alt="close icon" /> */}
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
