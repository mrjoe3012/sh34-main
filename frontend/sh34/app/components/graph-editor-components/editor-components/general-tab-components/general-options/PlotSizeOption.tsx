import { OptionComponentTitle } from "../../OptionComponentTitle"

export const PlotSizeOption = () => {
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
                <OptionComponentTitle optionName="Plot Size" />

                <div className="flex flex-col gap-y-1 ml-3">

                    <div className="flex items-center gap-x-1">
                        <div className="w-[70px] min-w-[70px]">Width</div>
                        <div>
                            <input type="text" placeholder="px" className="text-right flex-grow w-[90px] font-medium placeholder-[#ACACAC] h-[35px] bg-[#DCDCDC] rounded-lg flex items-center px-2 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                        </div>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <div className="w-[70px] min-w-[70px]">Height</div>
                        <div>
                            <input type="text" placeholder="px" className="text-right flex-grow w-[90px] font-medium placeholder-[#ACACAC] h-[35px] bg-[#DCDCDC] rounded-lg flex items-center px-2 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}