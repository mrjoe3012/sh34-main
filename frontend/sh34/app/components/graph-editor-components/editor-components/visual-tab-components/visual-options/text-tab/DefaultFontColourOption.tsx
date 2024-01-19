import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericColourOption } from "../../../generic-components/GenericColourOption"

import configjson from "../../../../../../config.json"

export const FontColourOption = () => {

    const changeDefaultFontColour = (inputValue: string) => {
        // Enter logic here for changing of Plot's Default Font Colour

        (configjson as any)["visualOptions"]["text"]["defaultFontColourHex"] = "#" + inputValue
        console.log("Default Font Colour Changed to " + inputValue);
    }
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="Default Font Colour" />
            <GenericColourOption contentOnRender={configjson["visualOptions"]["text"]["defaultFontColourHex"].slice(1)} plotFunction={changeDefaultFontColour} labelName="" displayLabel={false}/>
        </div>
    )
}