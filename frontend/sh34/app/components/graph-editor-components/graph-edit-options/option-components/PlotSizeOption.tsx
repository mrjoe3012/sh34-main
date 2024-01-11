import { OptionComponentTitle } from "./OptionComponentTitle"

export const PlotSizeOption = () => {
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
                <OptionComponentTitle optionName="Plot Size" />

                <div className="flex flex-col gap-y-1 ml-3">

                    <div className="flex gap-x-2">
                        <input placeholder="" className=" font-medium placeholder-[#ACACAC] h-[35px] w-[90px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                        <div className="flex items-center "> Width </div>
                    </div>

                    <div className="flex gap-x-2">
                        <input placeholder="" className=" font-medium placeholder-[#ACACAC] h-[35px] w-[90px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                        <div className="flex items-center"> Height </div>
                    </div>
                    
                </div>
        </div>
    )
}