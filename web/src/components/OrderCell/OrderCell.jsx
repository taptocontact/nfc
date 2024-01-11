import { useRef, useState } from 'react'
import { useEffect } from 'react'


import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
  SelectField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from 'src/auth'
import { storage } from "src/Utils/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ImageSelector from 'src/components/ImageSelector/ImageSelector'

export const QUERY = gql`
  query FindOrderQuery($id: Int!) {
    order: card(id: $id) {
      id
      name
      color
      price
      imageUrl
      type
    }
  }
`
const CREATE_CLIENT_INFO_MUTATION = gql`
  mutation CreateClientInfoMutation($input: CreateClientInfoInput!) {
    createClientInfo(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ order }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [company, setCompany] = useState('');
  const [googleReviewLink, setGoogleReviewLink] = useState('');
  // const [cardLogo, setCardLogo] = useState('');
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('')

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };


  const [createClientInfo, { loading, error }] = useMutation(
    CREATE_CLIENT_INFO_MUTATION,
    {
      onCompleted: () => {
        toast.success('Thanks For Ordering')
        navigate(routes.home())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const verifyEmail = async (e) => {
    e.preventDefault();
    if (file) {
      const storageRef = ref(storage, `google review gold card/${googleReviewLink}.jpg`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Track upload progress
          // You can use snapshot.bytesTransferred and snapshot.totalBytes
        },
        (error) => {
          console.error(error.message);
        },
        async () => {
          // Handle successful upload
          console.log("File uploaded successfully!");

          // Get the download URL
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("Download URL:", downloadURL);
            setUrl(downloadURL)
            // data['imageUrl'] = downloadURL
            // props.onSave(data, props?.card?.id)
          } catch (error) {
            console.error("Error getting download URL:", error.message);
          }
        }
      );
    } else {
      console.error("No file selected!");
    }
    const obj = {
      contact: phone,
      designation: designation,
      email: email,
      companyName: company,
      fullname: name,
      cardInfo: order,
      url,
      googleReviewLink

    }
    const input = {
      status: 'Pending',
      details: {
        order: obj
      }

    }
    createClientInfo({ variables: { input } })

  }


  return (
    <>
      <MetaTags title="Order" />
      <div className="grid mx-md:grid-cols-1  bg-black  lg:grid-cols-1 sm: text lg:w-auto"  >

        <div className="flex flex-col h-full bg-black lg:m-0">
          <h1 className="flex font-bold text-center text-slate-400 text-3xl mx-4 justify-center items-center mt-4 lg:m-0">
            Enter the details to be printed on the card
          </h1>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 mt-10 border-black space-x-4 max-md:grid-cols-1">

              <div className='max-sm:order-2'>
                <div className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 mt-12 h-72 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
                  <img src={order.imageUrl} alt="card-image" className="h-full " />
                </div>
                <div className="p-6">
                  <h5 className="text-center text-yellow-300 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                    {order.type} - {order.name}
                  </h5>
                </div>



              </div>


              <form onSubmit={verifyEmail} className='grid grid-cols-1'>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-center w-96 max-sm:w-80  outline-white bg-slate-400  hover:placeholder:shadow-white py-4 hover:placeholder:text-black hover:bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  className="text-center w-96 max-sm:w-80 outline-white bg-slate-400  hover:placeholder:shadow-white py-4 hover:placeholder:text-black hover:bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                  placeholder="Email"
                  value={email} onChange={(e) =>
                    setEmail(e.target.value)}
                  required
                />
                <input
                  className="text-center w-96 max-sm:w-80  outline-white bg-slate-400  hover:placeholder:shadow-white py-4 hover:placeholder:text-black hover:bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                  placeholder="Contact"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="text-center w-96 max-sm:w-80  outline-white bg-slate-400  hover:placeholder:shadow-white py-4 hover:placeholder:text-black hover:bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                  placeholder="Designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="text-center w-96 max-sm:w-80  outline-white bg-slate-400  hover:placeholder:shadow-white py-4 hover:placeholder:text-black hover:bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />

                {
                  order.type.includes('google') &&
                  <input
                    type="text"
                    className="text-center w-96 max-sm:w-80  outline-white bg-slate-400  hover:placeholder:shadow-white py-4 hover:placeholder:text-black hover:bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                    placeholder="Google Review Link"
                    value={googleReviewLink}
                    required

                    onChange={(e) => setGoogleReviewLink(e.target.value)}
                  />
                }
                {
                  order.type.includes('google gold') &&
                  <div className='text-center border-yellow-500 border'>
                    <ImageSelector id='logo' Label='Company Logo Image' allowMultiple={false} url={url} handleFileChange={handleFileChange} />

                  </div>
                }


                <div className="flex flex-col border-black">
                  <button
                    type="submit"
                    // onSubmit={handleSubmit}
                    className="text-center w-96 max-sm:w-80  outline-white  hover:font-bold  py-2 hover:placeholder:text-black bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </>
  )

}
