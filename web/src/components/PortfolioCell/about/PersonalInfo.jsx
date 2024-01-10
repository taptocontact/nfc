import React from "react";


const personalInfoContent = [
  { meta: "first name", metaInfo: "Steve" },
  { meta: "last name", metaInfo: "Milner" },
  { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "Tunisian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Tunis" },
  { meta: "phone", metaInfo: "+21621184010" },
  { meta: "Email", metaInfo: "you@mail.com" },
  { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = ({userDetail}) => {
  // const { userId } = useParams(); // Get the userId parameter from the URL

  // // Find the user details based on the userId
  // const userDetail = details.find(user => user.id === userId);

  if (!userDetail) {
    return <div>User not found</div>;
  }
  return (
    <ul className="about-list list-unstyled open-sans-font">
    <li>
      <span className="title">Full Name: </span>
      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
        {userDetail.name}
      </span>
    </li>
    <li>
      <span className="title">Contact: </span>
      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
        {userDetail.contact}
      </span>
    </li>
    <li>
      <span className="title">Company Name: </span>
      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
        {userDetail.companyName}
      </span>
    </li>
    <li>
      <span className="title">Email: </span>
      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
        {userDetail.email}
      </span>
    </li>
    <li>
      <span className="title">Address: </span>
      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
        {userDetail.address}
      </span>
    </li>
    <li>
      <span className="title">Pin Code: </span>
      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
        {userDetail.pinCode}
      </span>
    </li>


  </ul>

  );
};

export default PersonalInfo;
