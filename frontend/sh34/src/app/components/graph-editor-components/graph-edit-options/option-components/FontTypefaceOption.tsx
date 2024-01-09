import { OptionComponentTitle } from "./OptionComponentTitle"

export const FontTypefaceOption = () => {
    
    return(
        <div>
            < OptionComponentTitle optionName="Typeface" />
            <div className="ml-3">
                    <select 
                        placeholder="" 
                        className=" font-medium placeholder-[#ACACAC] h-[40px] w-[150px] bg-[#DCDCDC] rounded-xl flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                </div>
        </div>
    )
}