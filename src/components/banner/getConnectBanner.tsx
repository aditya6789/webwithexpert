

import ContainerWrapper from '../containerWrapper'
import { Button } from '@nextui-org/react'

const GetConnectBanner = () => {
  return (
    <section className="bg-[#0a62e3] mt-10 rounded-t-[100px] sm:rounded-t-[200px] lg:rounded-t-[300px] pb-20">
    <div className="flex flex-col lg:flex-row justify-between items-center px-5 sm:px-10 lg:px-[200px]">
      <div className="w-full lg:w-1/2">
        <video
          playsInline
          autoPlay
          muted
          loop
          className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] shadow-2xl rounded-2xl lg:rounded-3xl my-5 sm:my-10"
        >
          <source
            src="https://components.brixagency.com/src/brix-agency-design-agency.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <ContainerWrapper>
        <div className="w-full lg:w-1/2 lg:ml-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-5 lg:mt-0">
            Ready to create an amazing website for your company?
          </h1>
          <p className="text-md sm:text-lg font-medium text-white mt-3 sm:mt-5">
            Our amazing team of designers & developers is ready to help you
            take your website to the next level. Send us a message today!
          </p>
          <Button className="bg-white shadow-lg px-8 sm:px-10 py-5 sm:py-7 font-medium text-md sm:text-lg mt-5 lg:mt-10">
            Get in Touch
          </Button>
        </div>
      </ContainerWrapper>
    </div>
  </section>
  )
}

export default GetConnectBanner