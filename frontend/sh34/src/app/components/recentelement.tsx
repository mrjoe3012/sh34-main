import Image from 'next/image';
import UKflag from "./../images/UKflag.png"
import Alogo from "./../images/Alogo.png"

export const RecentElement = () =>{
    return(
      <div className='container rounded-xl border-4 border-[#434343] w-44 min-w-[150px] h-[165px] bg-slate-200 p-1.5' > {/* background as the image on the wireframe */}
            
            <div className="grid grid-flow-col pb-2 pt-1">
              <div className='relative self-center justify-self-center'>
                  <Image src={Alogo} alt="test" className="w-12 h-6 self-center object-cover rounded"/>
              </div>
              <div className='self-center justify-self-center'>
                  <h1 className='text-sm font-bold whitespace-nowrap overflow-hidden relative right-1'>COMPANY</h1> {/* TODO: Country is Hard Coded Currently. Will Need to be Changed */}
              </div>
            </div>
  
            <hr className="h-0.5 border-none bg-[#454545]"></hr>
  
            <div className='m-1'>
              <div className='text-left'>
                <h1 className='font-semibold text-xl'>Asset Name</h1>
              </div>
  
              <div className="text-sm">
                <div className='relative self-center justify-self-center mt-1 mb-1'>
                    <Image src={UKflag} alt="test" className="w-12 h-6 self-center object-cover rounded"/>
                </div>
                  <div>
                      <p className="font-medium">Last Modified</p>
                      <p>15/02/2023</p>
                  </div>
              </div>
  
            </div>
          </div>
    )
  }