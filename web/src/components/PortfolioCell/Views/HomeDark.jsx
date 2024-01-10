import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Index from "../about/index";
import Hero from "../hero/Hero";
import Address from "../Address";
import Portfolio from "../portfolio/Portfolio";
// import Blog from "../../components/blog/Blog";
import Contact from "../Contact";
import Social from "../Social";





const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "About" },
  // { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-photo", menuName: "Gallery" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  // { icon: "fa-comments", menuName: "Blog" },
];


const HomeDark = ({userDetail}) => {
  // const [detail, setDetail] = useState()

  // Find the user details based on the userId
  // useEffect(() => {
  //   const userDetail = details.find(user => user.id === userId);
  //   setDetail(userDetail)
  // }, [])
  // document.querySelector("body").classList.remove("rtl");

  return (
    <div className="yellow">
      {/* <SwitchDark /> */}
      {/* End Switcher */}
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero userDetail={userDetail} />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index userDetail={userDetail} />
            </div>
          </TabPanel>
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>Gallery</span>
              </h1>
              <span className="title-bg">works</span>
            </div>
            {/* End title */}
            <Portfolio userDetail={userDetail} />
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span>touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Don't be shy !
                  </h3>
                  <p className="open-sans-font mb-4">
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                  <Address userDetail={userDetail} />
                  {/* End Address */}

                  <Social userDetail={userDetail}/>
                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                <div className="col-12 col-lg-8">
                  <Contact userDetail={userDetail}/>
                </div>
                {/*  Contact Form Ends */}
              </div>
            </div>
            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}

          {/* Blog Content Starts */}
          {/* <TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>blog</span>
              </h1>
              <span className="title-bg">posts</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >

              <div className="row pb-50">
                <Blog use />
              </div>

            </div>
          </TabPanel> */}
          {/* Blog Content Ends */}
        </div>
      </Tabs>
    </div>
  );
};

export default HomeDark;
