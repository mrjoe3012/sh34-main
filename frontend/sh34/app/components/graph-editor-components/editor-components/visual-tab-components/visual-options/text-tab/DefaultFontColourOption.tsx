import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericColourOption } from "../../../generic-labelling-components/GenericColourOption"

export const FontColourOption = () => {

    const changeDefaultFontColour = (inputValue: string) => {
        // Enter logic here for changing of Plot's Default Font Colour
        console.log("Default Font Colour Changed to " + inputValue);
    }
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="Default Font Colour" />
            <GenericColourOption plotFunction={changeDefaultFontColour} labelName="" displayLabel={false}/>
        </div>
    )
}