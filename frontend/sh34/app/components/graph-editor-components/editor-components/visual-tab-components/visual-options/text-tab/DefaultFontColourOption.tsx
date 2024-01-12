import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericFontColourOption } from "../../../generic-labelling-components/GenericFontColourOption"

export const FontColourOption = () => {
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="Default Font Colour" />
            <GenericFontColourOption displayLabel={false}/>
        </div>
    )
}