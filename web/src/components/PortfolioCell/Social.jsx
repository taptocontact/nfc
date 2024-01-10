import React from "react";




// const SocialShare = [
//   {
//     iconName: "fa fa-facebook",
//     link: "https://www.facebook.com/",
//   },
//   { iconName: "fa fa-twitter", link: "https://twitter.com/" },
//   {
//     iconName: "fa fa-youtube",
//     link: "https://www.youtube.com/",
//   },
//   { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
// ];

const Social = ({userDetail}) => {

  // const { userId } = useParams(); // Get the userId parameter from the URL

  // // Find the user details based on the userId
  // const userDetail = details.find(user => user.id === userId);

  if (!userDetail) {
    return <div>User not found</div>;
  }

  return (
    <ul className="social list-unstyled pt-1 mb-5">

        <li>
          <a href={userDetail.media.facebook} target="_blank" rel="noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href={userDetail.media.instagram} target="_blank" rel="noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href={userDetail.media.linkedin} target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href={userDetail.media.twitter} target="_blank" rel="noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href={userDetail.media.telegram} target="_blank" rel="noreferrer">
            <i className="fa fa-telegram"></i>
          </a>
        </li>
        <li>
          <a href={userDetail.media.youtube} target="_blank" rel="noreferrer">
            <i className="fa fa-youtube"></i>
          </a>
        </li>

    </ul>
  );
};

export default Social;
