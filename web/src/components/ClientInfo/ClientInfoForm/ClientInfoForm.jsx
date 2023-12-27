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
import { useState } from 'react'

const ClientInfoForm = (props) => {

  const [data, setData] = useState(props.clientInfo.details)
  console.log(data)
  const onSubmit = () => {
    let d = {}
    d['client'] = 'u'
    d['userId'] = 1
    d['details'] = data

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

  return (
    <>





            <div className='p-3 font-semibold bg-slate-300 text-black '>
                <h2>Update Profile </h2>
            </div>
            <div className='text-black'>
                <div className='m-3 bg-gray-400 rounded'>
                    <div>
                        <h2 className='p-2 text-lg font-semibold border-b border-black'>Profile Details</h2>

                        <div className='grid grid-cols-2'>



                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Full Name</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Full Name'
                                    name='fullname'
                                    value={data.fullname}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Contact Number</h3>
                                <input
                                    className='w-3/4 rounded'
                                    type="text"
                                    placeholder='Enter Contact Number'
                                    name='contact'
                                    value={data.contact}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Alternate Contact Number</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Alternate Contact Number'
                                    name='alternateContact'
                                    value={data.alternateContact}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Company Name</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Company Name'
                                    name='companyName'
                                    value={data.companyName}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Designation</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Designation'
                                    name='designation'
                                    value={data.designation}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Email Address</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="email"
                                    placeholder='Enter'
                                    name='email'
                                    value={data.email}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Alternate Email Address</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="email"
                                    placeholder='Enter Email Address'
                                    name='alternativeEmail'
                                    value={data.alternativeEmail}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Website Link</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Website Link'
                                    name='websiteLink'
                                    value={data.websiteLink}

                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Your Office Address</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Your Address'
                                    name='adress'
                                    value={data.adress}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Pincode</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Pincode'
                                    name='pinCode'
                                    value={data.pinCode}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>About</h3>

                                <textarea value={data.about} name="about" id="" cols="59" rows="3" className='w-3/4 rounded ' placeholder='Enter ' onChange={handleInputChange} ></textarea>

                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Nature Of Buisness</h3>

                                <textarea value={data.natureOfBuisness} name="natureOfBuisness" id="" cols="59" rows="3" className='w-3/4 rounded ' placeholder='Enter Nature Of Buisness' onChange={handleInputChange} ></textarea>

                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Google Map Link</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Google Map Link'
                                    name='mapLink'
                                    value={data.mapLink}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Profile Image</h3>

                                <textarea  value={data.profileImage} name="profileImage" id="" cols="59" rows="3" className='w-3/4 text-center rounded ' placeholder='Choose Image' onChange={handleInputChange} ></textarea>

                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Banner Image</h3>

                                <textarea  value={data.bannerImage} name="bannerImage" id="" cols="59" rows="3" className='w-3/4 text-center rounded ' placeholder='Choose Image' onChange={handleInputChange} ></textarea>

                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Upi Payment Scanner</h3>

                                <textarea  value={data.scannerImage} name="scannerImage" id="" cols="59" rows="3" className='w-3/4 text-center rounded ' placeholder='Choose Image' onChange={handleInputChange} ></textarea>

                            </div>
                            {/* <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Gallery </h3>

                                <textarea  value={data.gallery} name="gallery" id="" cols="59" rows="3" className='w-3/4 text-center rounded ' placeholder='Choose Image' onChange={handleInputChange} ></textarea>

                            </div> */}
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Facebook</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Facebook Url'
                                    name='facebook'
                                    value={data.facebook}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Instagram</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Instagram Url'
                                    name='instagram'
                                    value={data.instagram}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Linkedin</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Linkedin Url'
                                    name='linkedin'
                                    value={data.linkedin}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Twitter</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Twitter Url'
                                    name='twitter'
                                    value={data.twitter}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Telegram</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Telegram Url'
                                    name='telegram'
                                    value={data.telegram}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Youtube</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Enter Youtube Url'
                                    name='youtube'
                                    value={data.youtube}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Updload Your Buisness Catalogue or Brochure (pdf)</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Choose File'
                                    name='brochure'
                                    value={data.brochure}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className='pt-6 font-semibold'>Updload images to create your Gallery (jpg.png)</h3>
                                <input
                                    className='w-3/4 rounded '
                                    type="text"
                                    placeholder='Choose File'
                                    name='brochure'
                                    value={data.brochure}

                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="p-3">
                <label>
                  <input
                    type="checkbox"
                    required
                    // checked={agreeToTerms}
                    // onChange={handleCheckboxChange}
                  />
                  {/* {' '} */}
                  I agree to the Terms and Conditions
                </label>
              </div>



                        </div>


                    </div>
                </div>
                <button className='pt-2 pb-2 ml-2 text-white bg-gray-800 pl-7 pr-7 rounded-2xl' onClick={onSubmit}>
                    Save & Update Profile
                </button>
            </div>

    </>
    // <div className="rw-form-wrapper">
    //   <Form onSubmit={onSubmit} error={props.error}>
    //     <FormError
    //       error={props.error}
    //       wrapperClassName="rw-form-error-wrapper"
    //       titleClassName="rw-form-error-title"
    //       listClassName="rw-form-error-list"
    //     />

    //     <Label
    //       name="client"
    //       className="rw-label"
    //       errorClassName="rw-label rw-label-error"
    //     >
    //       Client
    //     </Label>

    //     <TextField
    //       name="client"
    //       defaultValue={props.clientInfo?.client}
    //       className="rw-input"
    //       errorClassName="rw-input rw-input-error"
    //       validation={{ required: true }}
    //     />

    //     <FieldError name="client" className="rw-field-error" />

    //     <Label
    //       name="details"
    //       className="rw-label"
    //       errorClassName="rw-label rw-label-error"
    //     >
    //       Details
    //     </Label>

    //     <TextAreaField
    //       name="details"
    //       defaultValue={JSON.stringify(props.clientInfo?.details)}
    //       className="rw-input"
    //       errorClassName="rw-input rw-input-error"
    //       validation={{ valueAsJSON: true, required: true }}
    //     />

    //     <FieldError name="details" className="rw-field-error" />

    //     <Label
    //       name="extra"
    //       className="rw-label"
    //       errorClassName="rw-label rw-label-error"
    //     >
    //       Extra
    //     </Label>

    //     <TextAreaField
    //       name="extra"
    //       defaultValue={JSON.stringify(props.clientInfo?.extra)}
    //       className="rw-input"
    //       errorClassName="rw-input rw-input-error"
    //       validation={{ valueAsJSON: true }}
    //     />

    //     <FieldError name="extra" className="rw-field-error" />

    //     <Label
    //       name="userId"
    //       className="rw-label"
    //       errorClassName="rw-label rw-label-error"
    //     >
    //       User id
    //     </Label>

    //     <NumberField
    //       name="userId"
    //       defaultValue={props.clientInfo?.userId}
    //       className="rw-input"
    //       errorClassName="rw-input rw-input-error"
    //       validation={{ required: true }}
    //     />

    //     <FieldError name="userId" className="rw-field-error" />

    //     <div className="rw-button-group">
    //       <Submit disabled={props.loading} className="rw-button rw-button-blue">
    //         Save
    //       </Submit>
    //     </div>
    //   </Form>
    // </div>
  )
}

export default ClientInfoForm
