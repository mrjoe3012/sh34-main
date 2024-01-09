import { OptionComponentTitle } from "./OptionComponentTitle"
import Image from 'next/image';
import uptriangle from './../../../../images/uptriangle.png'
import downtriangle from './../../../../images/downtriangle.png'

export const FontSizeOption = () => {
    
    return(
        <div className="mb-5 ">
            < OptionComponentTitle optionName="Font Size" />
            <div className="ml-3 flex items-center gap-x-1">
                    <input 
                        maxLength={7}
                        placeholder="" 
                        className=" font-medium placeholder-[#ACACAC] h-[40px] w-[100px] bg-[#DCDCDC] rounded-xl flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                    <div className='flex flex-col gap-y-1'>
                        <Image src={uptriangle} alt="uparrow" className='w-4 h-3'></Image>
                        <Image src={downtriangle} alt="uparrow" className='w-4 h-3'></Image>
                    </div>
            </div>
        </div>
    )
}