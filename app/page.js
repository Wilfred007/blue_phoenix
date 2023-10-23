import Image from 'next/image'

export default function Home() {
   
  return (
    <>
      <div className="bg-gradient-to-r from-black ">
        <Image
          src="/ban.jpg"
          alt="Banner"
          height={800}
          width={1200}
          className="mix-blend-overlay"
        />
      </div>
      <div className="p-10 -mt-[215px]">
        <h1 className="text-[30px] font-bold text-white">We Nourish Talent</h1>
        <p className="text-gray-200 mb-5 text-sm sm:w-1/2">
          We provide comprehensive Human Resource Services with deep commitment
          to helping organizations succeed by optimizing thier human capital.
        </p>
      </div>
      <section>
        <div className="flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center text-gray-800">
              Stay ahead, choose us
            </h2>
            <p className="max-w-s text-center text-gray-700 md:text-left">
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
                    TALENT MANAGEMENT
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">TALENT MANAGEMENT</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
