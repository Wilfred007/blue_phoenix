import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-black to-gray-600 ">
        <Image
          src="/About.jpg"
          alt="About"
          height={800}
          width={1200}
          className="mix-blend-overlay"
        />
      </div>
      <div className="p-10 -mt-[130px] md:-mt-[280px]">
        <h1 className="text-[20px] font-bold text-white sm:text-[80px]">
          About Us
        </h1>
        <p className="text-white mb-5 text-xs sm:w-1/2 md:text-xl">
          ...We advise management on the administration of their human resource
          policies and procedures.
        </p>
      </div>
      <div className="flex flex-col space-y-12 md:w-1/2 mt-10">
        <p className="max-w-s text-center text-base text-gray-700 md:text-left mx-10">
          Blue phoenix Consulting was established with the desire to provide
          professional human resource consulting services to organizations of
          all sizes. We advise management on the administration of their human
          resource policies and procedures. We serve as internal consultants by
          analyzing a company’s current HR programs and recommending solutions.
          Developing, revising, and implementing HR policies and procedures. We
          carry out soft skill trainings We offer recruitment services
        </p>
      </div>
      <div className="mt-10">
        <div className="flex flex-col sm:flex-row">
          <div className=''>
            <button className="h-[300px] W-[50%] hover:bg-purple-800 hover:text-white ease-in duration-500 p-10 outline outline-offset-0 outline-1 sm:ml-5">
              <h1 className="font-bold text-2xl mb-5">OUR VISION</h1>
              To be a Human Resource company of repute presenting a skilled
              workforce in Nigeria and beyond.
            </button>
          </div>
          <button className="h-[300px] w-1/1.5 hover:bg-blue-800 hover:text-white ease-in duration-500 p-10 outline outline-offset-0 outline-1 sm:mr-5">
            <h1 className="font-bold text-2xl mb-5">OUR MISSION</h1>
            To ensure every applicant is nurtured and presented ready for
            employment and while in a workplace they are provided with the right
            training and development to ensure strategic goals are met and the
            work environment is characterized by fair treatment of staff, open
            communications, personal accountability, trust and mutual respect.
          </button>
        </div>
      </div>
    </div>
  );
}

export default page