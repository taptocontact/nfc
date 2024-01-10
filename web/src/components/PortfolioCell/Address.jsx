import React from "react";


const Address = ({userDetail}) => {

  // const { userId } = useParams(); // Get the userId parameter from the URL

  // // Find the user details based on the userId
  // const userDetail = details.find(user => user.id === userId);

  // if (!userDetail) {
  //   return <div>User not found</div>;
  // }


  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>
        <a href={userDetail.mapLink}>{userDetail.address}</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href={`mailto:${userDetail.email}`}>{userDetail.email}</a>
      </p>

      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">

        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href={`Tel:${userDetail.contact}`}>{userDetail.contact}</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
