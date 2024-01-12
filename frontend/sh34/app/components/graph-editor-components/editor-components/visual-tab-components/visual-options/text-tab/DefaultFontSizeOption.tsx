import { OptionComponentTitle } from "../../../OptionComponentTitle"
import Image from 'next/image';
import uptriangle from '@app/images/uptriangle.png'
import downtriangle from '@app/images/downtriangle.png'

export const FontSizeOption = () => {
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            < OptionComponentTitle optionName="Default Font Size" />
            <div className="ml-3 flex items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                    <div className="flex items-center gap-x-1">
                        <input maxLength={7} placeholder="px" className="text-right font-medium placeholder-[#ACACAC] h-[35px] w-[100px] bg-[#DCDCDC] rounded-lg flex items-center px-2 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                        <div className='flex flex-col h-[35px]'>
                            <button className="bg-[#DCDCDC] border-[2px] border-[#B3B3B3] rounded mb-auto w-4 h-4 flex justify-center items-center"><Image src={uptriangle} alt="uparrow" className='w-2 h-1 opacity-[65%]'></Image></button>
                            <button  className="bg-[#DCDCDC] border-[2px] border-[#B3B3B3] rounded w-4 h-4 flex justify-center items-center"><Image src={downtriangle} alt="uparrow" className='w-2 h-1 opacity-[65%]'></Image></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}