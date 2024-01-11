import { OptionComponentTitle } from "./OptionComponentTitle"

export const FontTypefaceOption = () => {
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            < OptionComponentTitle optionName="Default Typeface" />
            <div className="ml-3">
                    <select 
                        placeholder="" 
                        className=" font-medium placeholder-[#ACACAC] h-[35px] w-[150px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                </div>
        </div>
    )
}