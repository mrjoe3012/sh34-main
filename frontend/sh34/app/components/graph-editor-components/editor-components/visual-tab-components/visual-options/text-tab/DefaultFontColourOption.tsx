import { OptionComponentTitle } from "../../../OptionComponentTitle"

export const FontColourOption = () => {
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="Default Font Colour" />
            <div className="flex items-center ml-3">
                <div className="mr-1">
                    <input 
                        maxLength={7}
                        placeholder="#" 
                        className=" font-medium placeholder-[#ACACAC] h-[35px] w-[100px] bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
                </div>
                <div className="w-8 h-8 bg-red-500 rounded-md flex border-black border-2"> </div>
            </div>
        </div>
    )
}