import Image from 'next/image'
import { sliderData } from './components/sliderData';
import Slider from './components/Slider';
;

export default function Home() {


   
  return (
    <>
      <div className="bg-gradient-to-r from-black to-gray-600 ">
        <Image
          src="/ban.jpg"
          alt="Banner"
          height={800}
          width={1200}
          className="mix-blend-overlay"
        />
      </div>
      <div className="p-10 -mt-[130px] md:-mt-[280px]">
        <h1 className="text-[20px] font-bold text-white sm:text-[80px]">
          We Nourish Talent
        </h1>
        <p className="text-white mb-5 text-xs sm:w-1/2 md:text-xl">
          We provide comprehensive Human Resource Services with deep commitment
          to helping organizations succeed by optimizing thier human capital.
        </p>
      </div>
      <section>
        <div className="flex flex-col px-4 mx-auto mt-3 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-xl sm:text-3xl sm:font-extrabold font-extrabold text-center text-gray-800">
              Stay Ahead, Choose Us
            </h2>
            <p className="max-w-s text-center text-gray-700 md:text-left mx-10">
              We offer a wide range of Human Resource Solutions designed to
              streamline processes, enhance employment engagement and drive
              overall business success.
            </p>
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-blue-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-900">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Talent Management
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Talent Management
                </h3>
                <p className="text-gray-500 mx-10">
                  We assist in identifying and recruiting top talent that aligns
                  with specific organizational cultures and visions. This
                  includes job posting, resume screening, interviewing, and
                  candidate selection.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-blue-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-900">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Human Resource Consulting
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Human Resource Consulting
                </h3>
                <p className="text-gray-500 mx-10">
                  Our team of experienced HR professionals can provide expert
                  guidance on a wide range of HR issues, from compliance and
                  policies to employee relations and performance management.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-blue-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-900">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Employee Training and Development
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Employee Training and Development
                </h3>
                <p className="text-gray-500 mx-10">
                  We offer customized training programs to help individuals in
                  workspaces continually develop their skills, fostering a
                  culture of growth and innovation.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-blue-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-900">
                    04
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Human Resource Technology Solutions
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Human Resource Technology Solutions
                </h3>
                <p className="text-gray-500 mx-10">
                  We help to implement and integrate advanced HR software and
                  systems to streamline processes and provide actionable
                  insights for decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='mt-5'>
      <Slider slides={sliderData} />
      </div>
    </>
  );
}
