import { OptionComponentTitle } from "./OptionComponentTitle"

export const PlotSizeOption = () => {
    return(
        <div className="mb-10">
                <OptionComponentTitle optionName="Plot Size" />

                <div className="flex flex-col gap-y-1  ml-2">

                    <div className="flex gap-x-2">
                        <div className="ml-1">
                            <input 
                            placeholder="" 
                            className=" font-medium placeholder-[#ACACAC] h-[40px] w-[90px] bg-[#DCDCDC] rounded-xl flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                        </div>
                        <div className="flex items-center "> Width </div>
                    </div>

                    <div className="flex  gap-x-2">
                        <div className="ml-1">
                            <input 
                            placeholder="" 
                            className=" font-medium placeholder-[#ACACAC] h-[40px] w-[90px] bg-[#DCDCDC] rounded-xl flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                        </div>
                        <div className="flex items-center"> Height </div>
                    </div>
                    
                </div>
        </div>
    )
}