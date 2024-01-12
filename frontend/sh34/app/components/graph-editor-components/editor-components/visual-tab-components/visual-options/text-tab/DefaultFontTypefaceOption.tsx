import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericTypefaceOption } from "../../../generic-labelling-components/GenericTypefaceOption"

export const FontTypefaceOption = () => {
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            < OptionComponentTitle optionName="Default Typeface" />
            < GenericTypefaceOption displayLabel={false}/>
        </div>
    )
}