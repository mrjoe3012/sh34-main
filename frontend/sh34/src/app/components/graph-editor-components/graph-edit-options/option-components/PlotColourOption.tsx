import { OptionComponentTitle } from "./OptionComponentTitle"

export const PlotColourOption = () => {
    
    return(
        <div className="mb-5" >
            <OptionComponentTitle optionName="Plot Colour" />
            <div className="flex items-center ml-3">
                <div className="w-8 h-8 bg-red-500 rounded-3xl flex border-black border-2"> </div>
                <div className="ml-1">
                    <input 
                        maxLength={7}
                        placeholder="#" 
                        className=" font-medium placeholder-[#ACACAC] h-[40px] w-[100px] bg-[#DCDCDC] rounded-xl flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                </div>
            </div>
        </div>
    )
}