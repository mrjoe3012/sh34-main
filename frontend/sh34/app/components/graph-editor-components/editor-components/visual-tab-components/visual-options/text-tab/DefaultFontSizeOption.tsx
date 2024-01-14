import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericSizeIncrementerOption } from "../../../generic-labelling-components/GenericSizeIncrementerOption";

export const FontSizeOption = () => {

    const changeDefaultFontSize = (inputValue: string) => {
        // Enter logic here for changing of default font size
        console.log("Changed Default Font Size to " + inputValue)
    }
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            < OptionComponentTitle optionName="Default Font Size" />
            < GenericSizeIncrementerOption plotFunction={changeDefaultFontSize} labelName={""} displayLabel={false} />
        </div>
    )
}