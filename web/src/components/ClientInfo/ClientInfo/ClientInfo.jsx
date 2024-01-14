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
  const canvasRef1 = useRef(null);

  useEffect(() => {
    // Consider removing unnecessary code inside useEffect
    setData(clientInfo.details);
    console.log(data)
  }, [data]);
  useEffect(() => {
    const generateQRCode = async  (text) => {
      // let img = new Image();

      // // await qrcode.toCanvas(canvasRef1.current, text, { color: { dark: '#000000', light: '#0000' } });
      // qrcode.toCanvas(canvasRef1.current, text, options, (error) => {
      //   if (error) {
      //     console.error(error);
      //   } else {
      //     // Convert the canvas to an image
      //     const imageDataURL = canvasRef1.current.toDataURL('image/png');

      //     // Create an image element
      //     // const image =

      //     // Set the source of the image to the data URL
      //     img.src = imageDataURL;

      //     // Now, the 'image' variable contains the image representation of the QR code.
      //     // You can append it to the DOM or perform other actions as needed.
      //     // For example, if you have a div with id 'qrCodeImageContainer':
      //     // const imageContainer = document.getElementById('qrCodeImageContainer');
      //     // imageContainer.appendChild(image);
      //   }
      // });


      const ctx = canvasRef.current.getContext('2d');

      // Load image
      const image = new Image();
      image.src = 'https://firebasestorage.googleapis.com/v0/b/taptocontact-fa569.appspot.com/o/img%2FFront.png?alt=media&token=b1ba695e-1d3b-4e5e-977a-01ad355ca7f9';

      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;

        // Draw the full image on the canvas
        ctx.drawImage(image, 0, 0, image.width, image.height);
        // ctx.drawImage(img, 0, 0);
      };
    }

    generateQRCode(clientInfo.client);
  }, []);
  const saveQRCodeImage = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');

    const a = document.createElement('a');
    a.href = image;
    a.download = `qr_code_${clientInfo.client}.png`;
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
            {/* <canvas id="canvas1" ref={canvasRef1}></canvas> */}
            <button onClick={saveQRCodeImage}>Save QR Code</button>
          </div>
        </div>
      </div>


    </>
  );
}

export default ClientInfo
