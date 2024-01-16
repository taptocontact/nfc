import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import JoditEditor from 'jodit-react';
import { useState } from 'react'
import { storage } from "src/Utils/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ImageSelector from 'src/components/ImageSelector/ImageSelector';
import { toast } from '@redwoodjs/web/dist/toast';

const ClientInfoForm = (props) => {



  const [data, setData] = useState(props.clientInfo.details)
  const [content, setContent] = useState('');
  console.log(props.clientInfo.client)

  console.log(data)
  const onSubmit = () => {
    if (file1) {
      const storageRef = ref(storage, `portfolio/${props.clientInfo.client}/profileImage.jpg`);
      const uploadTask = uploadBytesResumable(storageRef, file1);

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
            setUrl1(downloadURL)
            // data['imageUrl'] = downloadURL
            // props.onSave(data, props?.card?.id)
          } catch (error) {
            console.error("Error getting download URL:", error.message);
          }
        }
      );
    } else {
      toast.error("No file selected!");
    }
    let d = {}
    // d['client'] = 'u'
    // d['userId'] = 1
    d['details'] = {...data,'profileImage':url1}

    props.onSave(d, props?.clientInfo?.id)
  }
  const handleInputChange = (event) => {
    // setFullName(event.target.value);'
    let name = event.target.name
    let value = event.target.value

    let obj = {
      ...data,
      [name]: value

    }
    setData(obj)
  };
  const handleTextAreaChange = (name, value) => {
    let obj = {
      ...data,
      [name]: value

    }
    setData(obj)
  }

  const [file1, setFile1] = useState(null);
  const [url1, setUrl1] = useState('')

  const handleFileChange1 = (e) => {
    if (e.target.files[0]) {
      setFile1(e.target.files[0]);
    }
  };

  let field = [
    {
      heading: 'Name',
      name: 'name',
      type: 'text',
      value: data.name,
      placeholder: 'Enter Your Name'
    },
    {
      heading: 'Contact Number',
      name: 'contact',
      type: 'text',
      value: data.contact,
      placeholder: 'Enter Contact Number'
    },
    {
      heading: 'Alternate Contact Number',
      name: 'alternateContact',
      type: 'text',
      value: data.alternateContact,
      placeholder: 'Enter Alternate Contact Number'
    },
    {
      heading: 'Company Name',
      name: 'companyName',
      type: 'text',
      value: data.companyName,
      placeholder: 'Enter Company Name'
    },
    {
      heading: 'Designation',
      name: 'designation',
      type: 'text',
      value: data.designation,
      placeholder: 'Enter Designation'
    },
    {
      heading: 'Email Address',
      name: 'email',
      type: 'email',
      value: data.email,
      placeholder: 'Enter Email Address'
    },
    {
      heading: 'Alternate Email Address',
      name: 'alternativeEmail',
      type: 'email',
      value: data.alternativeEmail,
      placeholder: 'Enter Alternate Email Address'
    },
    {
      heading: 'Website Link',
      name: 'websiteLink',
      type: 'text',
      value: data.websiteLink,
      placeholder: 'Enter Website Link'
    },
    {
      heading: 'Your Office Address',
      name: 'address',
      type: 'text',
      value: data.address,
      placeholder: 'Enter Your Address'
    },
    {
      heading: 'Pincode',
      name: 'pinCode',
      type: 'text',
      value: data.pinCode,
      placeholder: 'Enter Pincode'
    },

    {
      heading: 'Nature Of Business',
      name: 'natureOfBusiness',
      type: 'textarea',
      value: data.natureOfBusiness,
      placeholder: 'Enter Nature Of Business'
    },
    {
      heading: 'Google Map Link',
      name: 'mapLink',
      type: 'text',
      value: data.mapLink,
      placeholder: 'Enter Google Map Link'
    },

    {
      heading: 'Facebook',
      name: 'facebook',
      type: 'text',
      value: data.facebook,
      placeholder: 'Enter Facebook Url'
    },
    {
      heading: 'Instagram',
      name: 'instagram',
      type: 'text',
      value: data.instagram,
      placeholder: 'Enter Instagram Url'
    },
    {
      heading: 'Linkedin',
      name: 'linkedin',
      type: 'text',
      value: data.linkedin,
      placeholder: 'Enter Linkedin Url'
    },
    {
      heading: 'Twitter',
      name: 'twitter',
      type: 'text',
      value: data.twitter,
      placeholder: 'Enter Twitter Url'
    },
    {
      heading: 'Telegram',
      name: 'telegram',
      type: 'text',
      value: data.telegram,
      placeholder: 'Enter Telegram Url'
    },
    {
      heading: 'Youtube',
      name: 'youtube',
      type: 'text',
      value: data.youtube,
      placeholder: 'Enter Youtube Url'
    }
  ];

  let textAreaField = [
    {
      heading: 'About',
      name: 'about',
      type: 'textarea',
      value: data.about,
      placeholder: 'Enter About'
    },
  ]

  let imagePickerField = [
    {
      heading: 'Profile Image',
      name: 'profileImage',
      type: 'textarea',
      value: data.profileImage,
      placeholder: 'Choose Image'
    },
    {
      heading: 'Banner Image',
      name: 'bannerImage',
      type: 'textarea',
      value: data.bannerImage,
      placeholder: 'Choose Image'
    },
    {
      heading: 'Upi Payment Scanner',
      name: 'scannerImage',
      type: 'textarea',
      value: data.scannerImage,
      placeholder: 'Choose Image'
    },
  ]
  return (
    <>





      <div className='p-3 font-semibold bg-[#111827] text-center text-gray-100 text-2xl uppercase'>
        <h2>Update Profile</h2>
      </div>

      <div className='text-gray-800'>
        <div className='m-3 bg-gray-200 rounded'>
          <div>
            <h2 className='p-2 text-xl font-semibold border-b border-gray-400'>Profile Details</h2>

            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-4'>

              {field.map((item) => (
                < div className={`p-3 mb-4`} >
                  <label htmlFor={item.name} className='block text-gray-700 font-semibold'>{item.heading}</label>
                  <input
                    id={item.name}
                    className='w-full h-10 text-lg rounded border border-gray-400 px-3 mt-1 focus:outline-none focus:border-indigo-500'
                    type="text"
                    placeholder={item.placeholder}
                    name={item.name}
                    value={item.value}
                    onChange={handleInputChange}
                  />
                </div>

              ))}
              {
                textAreaField.map((item) => (
                  < div className="p-3 mb-4 md:col-span-2" >
                    <h3 className='block text-gray-700 font-semibold'>{item.heading}</h3>
                    <JoditEditor
                      value={item.value}
                      onChange={newContent => handleTextAreaChange(item.name, newContent)}
                    />

                  </div>
                ))
              }

              {/* <div className="p-3 mb-4">
                <h3 className='block text-gray-700 font-semibold'>Upload Your Business Catalogue or Brochure (pdf)</h3>
                <input
                  className='w-full h-10 text-lg rounded border border-gray-400 px-3 mt-1 focus:outline-none focus:border-indigo-500'
                  type="text"
                  placeholder='Choose File'
                  name='brochure'
                  value={data.brochure}
                  onChange={handleInputChange}
                />
              </div>

              <div className="p-3 mb-4">
                <h3 className='block text-gray-700 font-semibold'>Upload images to create your Gallery (jpg.png)</h3>
                <input
                  className='w-full h-10 text-lg rounded border border-gray-400 px-3 mt-1 focus:outline-none focus:border-indigo-500'
                  type="text"
                  placeholder='Choose File'
                  name='gallery'
                  value={data.gallery}
                  onChange={handleInputChange}
                />
              </div> */}

              <div className=' p-3 mb-4'>
                <ImageSelector id='logo' label='Profile Image' allowMultiple={false} url={url1} handleFileChange={handleFileChange1} />

              </div>
              {/* <div className=' p-3 mb-4'>
                <ImageSelector id='logo' label='Card Image' allowMultiple={false} url={url} handleFileChange={handleFileChange} />

              </div> */}




            </div>

            <div className="p-3">
              <label className='flex items-center'>
                <input
                  type="checkbox"
                  required
                  className='mr-2'
                />
                <span className='text-lg text-gray-700'>
                  I agree to the Terms and Conditions
                </span>
              </label>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='m-4 py-2 px-6  text-white bg-[#111827] rounded-full hover:bg-[#161f31] focus:outline-none focus:shadow-outline-indigo' onClick={onSubmit}>
              Save & Update Profile
            </button>
          </div>
        </div>
      </div >
    </>

  )
}

export default ClientInfoForm
