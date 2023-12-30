import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedinIn, FaTwitter, FaTelegramPlane, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { TbWorldPin } from "react-icons/tb";



import { jsonDisplay, timeTag } from 'src/lib/formatters'

const DELETE_CLIENT_INFO_MUTATION = gql`
  mutation DeleteClientInfoMutation($id: Int!) {
    deleteClientInfo(id: $id) {
      id
    }
  }
`

const ClientInfo = ({ clientInfo }) => {
  const [deleteClientInfo] = useMutation(DELETE_CLIENT_INFO_MUTATION, {
    onCompleted: () => {
      toast.success('ClientInfo deleted')
      navigate(routes.clientInfos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete clientInfo ' + id + '?')) {
      deleteClientInfo({ variables: { id } })
    }
  }
  const [data, setData] = useState({});

  useEffect(() => {
    // Consider removing unnecessary code inside useEffect
    setData(clientInfo.details);
    console.log(data)
  }, [data]);

  if (!data || !data.bannerImage) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-gray-800 flex justify-center h-16 items-center">
        <a href={data.facebook} target="_blank" className="mr-4">
          <FaFacebook size={30} color="white" />
        </a>
        <a href={data.instagram} target="_blank" className="mr-4">
          <FaInstagramSquare size={30} color="white" />
        </a>
        <a href={data.linkedin} target="_blank" className="mr-4">
          <FaLinkedinIn size={30} color="white" />
        </a>
        <a href={data.twitter} target="_blank" className="mr-4">
          <FaTwitter size={30} color="white" />
        </a>
        <a href={data.telegram} target="_blank" className="mr-4">
          <FaTelegramPlane size={30} color="white" />
        </a>
        <a href={data.youtube} target="_blank">
          <FaYoutube size={30} color="white" />
        </a>
      </div>

      <div className="flex  justify-center mt-8">
        <div className="flex items-center max-md:flex-col">
          <div className="rounded-full overflow-hidden">
            <img src={data.profileImage} alt="" className="w-32 h-32 object-cover" />
          </div>
          <div className="ml-4 flex flex-col space-y-2 ">
            <h1 className="text-2xl font-semibold text-center">{data.fullname}</h1>
            <h1 className="text-2xl font-semibold text-center">{data.companyName}</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="w-3/4">
          <h1 className="text-xl font-semibold">About:</h1>
          {/* <p className='text-justify'>{data.about}</p> */}
          <div className='' dangerouslySetInnerHTML={{ __html: data.about }}>

          </div>
        </div>
      </div><br /><br />
      <h1 className='text-center text-4xl font-bold text-gray-900'>Quick Contact:</h1>
      <div className='flex justify-center flex-wrap' >
        <div className='p-10 border-4 m-10 w-56 bg-gray-100 rounded-2xl'>
          <FaPhoneAlt size={35} />
          <p>Call at</p>
          <a href={`tel:${data.contact}`}><p>{data.contact}</p></a>
          <a href={`tel:${data.alternateContact}`}><p>{data.alternateContact}</p></a>

        </div>
        <div className='p-10 border-4 m-10 w-56 bg-gray-100 rounded-2xl'>
          <IoIosMail size={40} />
          <p>Mail at</p>
          <a href={`mailto:${data.email}`}><p>{data.email}</p></a>
          <a href={`mailto:${data.alternativeEmail}`}><p>{data.alternativeEmail}</p></a>

        </div>
      </div>
      <div className='flex justify-center flex-wrap' >

        <div className='p-10 border-4 m-10 w-56 bg-gray-100 rounded-2xl'>
          <IoLocationSharp size={45} />
          <p>Address</p>
          <a href={data.mapLink}>{data.adress}</a>

        </div>
        <div className='p-10 border-4 m-10 w-56 bg-gray-100 rounded-2xl'>
          <TbWorldPin size={40} />
          <p>Website</p>
          <a href={data.websiteLink} target='_blank'>{data.websiteLink}</a>


        </div>
      </div>
      <h1 className='text-center text-4xl font-bold text-gray-900'>
        You Can Also Pay <br />Using Your UPI Apps
      </h1>
      <div className='flex justify-center'>
        <img src={data.scannerImage} alt="" className='h-60 mt-4' />
      </div><br /><br />
      <h1 className='text-center text-4xl font-bold text-gray-900'>Gallery</h1>
      {/* <div className='flex flex-wrap justify-evenly'>
        {JSON.parse(data.gallery).map((image, index) => (
          <img key={index} src={image} alt={`Gallery Image ${index + 1}`} className="gallery-image mb-4 h-56 mt-20" />
        ))}
      </div> */}
      <div className='flex justify-center bg-gray-800 h-16 items-center text-white text-2xl'>
        <h1>DESIGNED BY | <Link to='http://edutechindia.co.in/'>EDUTECH</Link> </h1>
      </div>

    </>
  );
}

export default ClientInfo
