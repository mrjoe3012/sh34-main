import { OptionComponentTitle } from "./OptionComponentTitle"
import Image from 'next/image';
import uptriangle from '@app/images/uptriangle.png'
import downtriangle from '@app/images/downtriangle.png'

export const FontSizeOption = () => {
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            < OptionComponentTitle optionName="Default Font Size" />
            <div className="ml-3 flex items-center gap-x-1">
                    <input 
                        maxLength={7}
                        placeholder="" 
                        className=" font-medium placeholder-[#ACACAC] h-[35px] w-[100px] bg-[#DCDCDC] rounded-xl flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                    <div className='flex flex-col gap-y-1'>
                        <button className="bg-[#DCDCDC] border-[2px] border-[#B3B3B3] p-1 rounded"><Image src={uptriangle} alt="uparrow" className='w-3 h-2 opacity-[65%]'></Image></button>
                        <button className="bg-[#DCDCDC] border-[2px] border-[#B3B3B3] p-1 rounded"><Image src={downtriangle} alt="uparrow" className='w-3 h-2 opacity-[65%]'></Image></button>
                    </div>
            </div>
        </div>
    )
}