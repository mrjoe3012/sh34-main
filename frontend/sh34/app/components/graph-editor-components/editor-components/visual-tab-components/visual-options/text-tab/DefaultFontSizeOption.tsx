import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericSizeIncrementerOption } from "../../../generic-labelling-components/GenericSizeIncrementerOption";

export const FontSizeOption = () => {
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            < OptionComponentTitle optionName="Default Font Size" />
            < GenericSizeIncrementerOption labelName={""} displayLabel={false} />
        </div>
    )
}