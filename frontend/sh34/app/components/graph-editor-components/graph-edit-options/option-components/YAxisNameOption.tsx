import { OptionComponentTitle } from "./OptionComponentTitle"

export const YAxisNameOption = () => {
    return(
        <div> 
                <OptionComponentTitle optionName="Y-Axis Label" />
                <div className="ml-3 mr-3">
                <input 
                        placeholder="" 
                        className=" font-medium placeholder-[#ACACAC] h-[35px] w-[85%] bg-[#DCDCDC] rounded-xl flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                </div>
        </div>
    )
}