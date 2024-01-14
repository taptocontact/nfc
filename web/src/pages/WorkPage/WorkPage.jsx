import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WorkPage = () => {
  return (
    <>
      <h1 className="mb-6 mt-6 text-center text-3xl font-bold max-md:m-1">
        How It Works - TapToContact
      </h1>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <section className="mx-auto mt-8 max-w-3xl rounded-lg bg-white p-8 shadow-md">
          <Step
            title="Step 1: Sign Up"
            image="images/sign-up-image.png"
            description="Getting started with TapToContact is easy. Enter your details. Once registered, you'll have access to the full suite of TapToContact features.

"
          />

          <Step
            title="Step 2: Create Your Digital Business Card"
            image="images/create-card-image.png"
            description="After signing up, Make it uniquely yours, reflecting your brand identity.

"
          />
          <Step
            title="Step 3: Personalize with Media and Links

"
            image="images/sign-up-image.png"
            description="Take your digital business card to the next level by adding multimedia elements. Include your company logo, a professional photo, and links to your social media profiles or website. This personal touch enhances your card and makes it more engaging for recipients.

"
          />

          <Step
            title="Step 4: Share with a Tap or QR Code"
            image="images/create-card-image.png"
            description="The beauty of TapToContact lies in its simplicity. Share your digital business card effortlessly by tapping your device with others using TapToContact. Alternatively, generate a QR code that others can scan to instantly receive your contact information. Networking has never been this easy.

"
          />
          <Step
            title="Step :5 Track and Analyze"
            image="images/create-card-image.png"
            description="Gain insights into your networking efforts with our analytics dashboard. Track interactions, measure engagement, and understand how well your digital business card is performing. This valuable data empowers you to refine your networking strategy for optimal results."
          />
          {/* <Step
            title="Step 6: Upgrade for Premium Features"
            image="images/create-card-image.png"
            description="While our free plan offers essential features, take your networking game to the next level with our premium plans. Unlock advanced customization options, access enhanced analytics, and enjoy additional benefits designed to elevate your professional presence."
          /> */}

          {/* Repeat similar steps for other sections */}
          <h1 className="text-center text-3xl font-bold">
            Start Tapping into a New Era of Networking with TapToContact!
          </h1>
          <Link to={routes.products()}

            className="mt-4 inline-block rounded-full bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-800
            max-md:flex max-md:justify-center"
          >
            Get Started
          </Link>
        </section>
      </div>
    </>
  )
}
const Step = ({ title, image, description }) => {
  return (
    <div className="mb-8 rounded-lg bg-gray-200 p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-900">{title}</h2>
      {/* <img src={image} alt="Step Image" className="mb-4 w-full" /> */}
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

export default WorkPage
