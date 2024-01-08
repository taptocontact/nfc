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
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on username box on page load
  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({
      username: data.username,
      roles: data.roles,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }
  const verifyEmail = async (e) => {
    e.preventDefault();
    const serviceId = 'service_vzc2abk';
    const templateId = 'template_1wa6u3r';
    const publicKey = 'OhuqRRt8aE5Rt2Q8J';

    const templateParams = {
      from_name:'Tap To Contact' ,
    //   from_email: 'Tap To Contact',
      to_name:email ,
      phone: phone,
    };

    const obj = {
      contact:phone,
      designation:designation,
      email:email,
      companyName:company,
      fullname:name

    }
    const response = await signUp({
      username: email,
      roles: 'client',
      password: '123456',
      clientInfo:obj
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
    // emailjs.send(serviceId, templateId, templateParams, publicKey)
    //   .then((response) => {
    //     alert('Email sent successfully!', response);
    //     setName('');
    //     setEmail('');
    //     setPhone('');
    //     setDesignation('');
    //     setCompany('');

    //   })
    //   .catch((error) => {
    //     alert('Error sending email', error);
    //   });
  };

  return (
    <>
      <MetaTags title="Signup" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <div className="grid mx-md:grid-cols-1  bg-black h-screen lg:grid-cols-1 sm: text lg:w-auto"  >
      <div className='flex items-cente  m-0 justify-center '>
      {/* <img src={ttc} alt="" className='flex bg-contain  lg:h-72'/> */}
      </div>
        <div className="flex flex-col h-full bg-black lg:m-0">
          <h1 className="flex font-bold text-center text-slate-400 text-3xl mx-4 justify-center items-center mt-4 lg:m-0">
            Enter the details to be printed on the card
          </h1>

          <div className="flex justify-center items-center">
            <div className="flex flex-col mt-10 border-black">
            <form onSubmit={verifyEmail} className='grid mx-md:grid-cols-1'>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-center w-96 outline-white bg-slate-400  hover:placeholder:shadow-white py-4 hover:placeholder:text-black hover:bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                placeholder=" Full Name"
                required
              />
              <input
                type="email"
                className="text-center w-96 outline-white bg-slate-400  hover:placeholder:shadow-white py-4 hover:placeholder:text-black hover:bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                placeholder=" E-mail Address"
                value={email} onChange={(e) =>
                setEmail(e.target.value)}
                required
              />
              <input
                className="text-center w-96 outline-white bg-slate-400  hover:placeholder:shadow-white py-4 hover:placeholder:text-black hover:bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                placeholder=" Phone Number "
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="text"
                className="text-center w-96 outline-white bg-slate-400  hover:placeholder:shadow-white py-4 hover:placeholder:text-black hover:bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                placeholder=" Your Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
              <input
                type="text"
                className="text-center w-96 outline-white bg-slate-400  hover:placeholder:shadow-white py-4 hover:placeholder:text-black hover:bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                placeholder=" Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
                <div className="flex flex-col border-black">
                  <button
                    type="submit"
                    // onSubmit={handleSubmit}
                    className="text-center w-96 outline-white  hover:font-bold  py-2 hover:placeholder:text-black bg-[#FFB400] placeholder:text-white my-5 rounded-2xl"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Username
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />

                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />

                  <FieldError name="password" className="rw-field-error" />


                  <div className='text-black'>


                    <Label
                      name="roles"
                      className="rw-label"
                      errorClassName="rw-label rw-label-error"
                    >
                      Select the Roles
                    </Label>

                    <SelectField
                      name="roles"
                      validation={{
                        required: true,
                        validate: {
                          matchesInitialValue: (value) => {
                            return (
                              value !== 'Please select an option' || 'Select an Option'
                            )
                          },
                        },
                      }}
                    >
                      <option>Please select an option</option>
                      <option value={'admin'}>Admin</option>
                      <option value={'client'}>Client</option>


                    </SelectField>

                    <FieldError name="roles" className="rw-field-error" />
                  </div>

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main> */}
    </>
  )
}

export default SignupPage
