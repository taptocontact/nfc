import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedinIn, FaTwitter, FaTelegramPlane, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { TbWorldPin } from "react-icons/tb";
import qrcode from 'qrcode'


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
  const canvasRef = useRef(null);

  useEffect(() => {
    // Consider removing unnecessary code inside useEffect
    setData(clientInfo.details);
    console.log(data)
  }, [data]);


  useEffect( () => {
    const generateQRCode = async (text) => {
      try {
          // Create a new canvas element
          const canvas = document.createElement('canvas');
          // Use qrcode.toCanvas to render the QR code to the canvas
          await new Promise((resolve, reject) => {
              qrcode.toCanvas(canvas, text,
                 { color: { dark: '#000000', light: '#0000' } } ,
                //  { color: { dark: '#00FF00', light: '#FF0000' } } ,
                 (error) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve();
                  }
              });
          });

          // Get the data URL of the canvas
          const imageUrl = canvas.toDataURL();
          return imageUrl;
      } catch (error) {
          throw new Error('Error generating QR code: ' + error.message);
      }
  };

  const generateCard = () => {
    const canvas = canvasRef.current;
    canvas.width = 320
    canvas.height = 200
    const ctx = canvas.getContext('2d');

    const image2 = new Image();
    image2.src = '/front.png';
    image2.onload = async () => {
      ctx.drawImage(image2, 0, 0,320,200); // (image, x, y, width, height)
      const imageUrl = await generateQRCode('192.168.29.163:8910/portfolio/'+clientInfo.client);
        const image1 = new Image();
  image1.src = imageUrl;
    image1.onload = () => {
    ctx.drawImage(image1, 24, 60, 56, 56); // (image, x, y, width, height)
  };



    };


  }
  generateCard()






  // const imageUrl = await generateQRCode('YourTextHere');
  // console.log('QR code image URL:', imageUrl);


  // // Load two images
  // const image1 = new Image();
  // image1.src = imageUrl;



  // // // Draw the first image (lower one)


  // // // Draw the second image (above the first one)

  // image1.onload = () => {
  //   ctx.drawImage(image1, 0, 0, 56, 56); // (image, x, y, width, height)
  // };



    // generateQRCode('192.168.29.163:8910/portfolio/'+clientInfo.client);
  }, []);
  const saveQRCodeImage = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');

    const a = document.createElement('a');
    a.href = image;
    a.download = `qr_code_${clientInfo.client}.png`;
    // console.log('image',image)
    a.click();
  };
  return (

    <>
      <div
      //  className='bg-orange-700'
      >

        {/* <canvas id="canvas" ref={canvasRef}></canvas> */}
        {/* <button onClick={saveQRCodeImage}>Save QR Code</button> */}
        {/*
        <div>
          {JSON.stringify(clientInfo)}
        </div> */}

        <div className="container mx-auto p-4">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Client Information</h1>
            <p>ID: {clientInfo.id}</p>
            <p>Client: {clientInfo.client}</p>
            <p>Contact: {clientInfo.details.order.contact}</p>
            <p>Designation: {clientInfo.details.order.designation}</p>
            <p>Email: {clientInfo.details.order.email}</p>
            <p>Company Name: {clientInfo.details.order.companyName}</p>
            <p>Full Name: {clientInfo.details.order.fullname}</p>

            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Card Information</h2>
              <div className="flex items-center">
                <img src={clientInfo.details.order.cardInfo.imageUrl} alt={clientInfo.details.order.cardInfo.name} className="w-16 h-16 mr-4" />
                <div>
                  <p>Name: {clientInfo.details.order.cardInfo.name}</p>
                  <p>Color: {clientInfo.details.order.cardInfo.color}</p>
                  <p>Price: ${clientInfo.details.order.cardInfo.price}</p>
                  <p>Type: {clientInfo.details.order.cardInfo.type}</p>
                </div>
              </div>
            </div>

            <p>Created At: {clientInfo.created_at}</p>
            <p>Updated At: {clientInfo.updated_at}</p>
            <p>User ID: {clientInfo.userId}</p>
            <canvas id="canvas" ref={canvasRef}></canvas>
            <button onClick={saveQRCodeImage}>Save QR Code</button>
          </div>
        </div>
      </div>


    </>
  );
}

export default ClientInfo
