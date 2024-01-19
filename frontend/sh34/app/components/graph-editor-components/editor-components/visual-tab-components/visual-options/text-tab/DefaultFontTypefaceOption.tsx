import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericTypefaceOption } from "../../../generic-components/GenericTypefaceOption"

import configjson from "../../../../../../config.json"

export const FontTypefaceOption = () => {

    const changeDefaultFontTypeface = (inputValue: string) => {
        // Enter logic for changing the default font typeface

        (configjson as any)["visualOptions"]["text"]["defaultTypeface"] = inputValue
        console.log("Default Font Typeface changed to " + inputValue);  
    }
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            < OptionComponentTitle optionName="Default Typeface" />
            < GenericTypefaceOption plotFunction={changeDefaultFontTypeface} displayLabel={false}/>
        </div>
    )
}