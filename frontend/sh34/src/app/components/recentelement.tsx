import Image from 'next/image';
import UKflag from "./../images/UKflag.png"
import Alogo from "./../images/Alogo.png"
import Link from 'next/link';

export const RecentElement = () =>{
    return(
      <Link href="/pages/template-page">
        <div className='container rounded-xl border-4 border-[#434343] w-44 2xl:w-52 min-w-[150px] xl:h-[165px] 2xl:h-[200px] bg-slate-200 p-1.5  shadow-lg' > {/* background as the image on the wireframe */}
              
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
                  <h1 className='font-semibold text-xl 2xl:text-2xl'>Asset Name</h1>
                </div>
    
                <div className="text-sm">
                  <div className='relative self-center justify-self-center mt-1 mb-1'>
                      <Image src={UKflag} alt="test" className="w-12 h-6 2xl:w-14 2xl:h-8 self-center object-cover rounded"/>
                  </div>
                    <div>
                        <p className="font-medium 2xl:text-lg">Last Modified</p>
                        <p className="2xl:text-base">15/02/2023</p>
                    </div>
                </div>
    
              </div>
            </div>
      </Link>
    )
  }