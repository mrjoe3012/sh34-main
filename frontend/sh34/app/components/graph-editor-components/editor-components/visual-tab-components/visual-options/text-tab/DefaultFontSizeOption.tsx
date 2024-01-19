import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericSizeIncrementerOption } from "../../../generic-components/GenericSizeIncrementerOption";

import configjson from "../../../../../../config.json"

export const FontSizeOption = () => {

    const changeDefaultFontSize = (inputValue: string) => {
        // Enter logic here for changing of default font size

        (configjson as any)["visualOptions"]["text"]["defaultFontSize"] = Number(inputValue)
        console.log("Changed Default Font Size to " + inputValue)
    }
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            < OptionComponentTitle optionName="Default Font Size" />
            < GenericSizeIncrementerOption plotFunction={changeDefaultFontSize} labelName={""} displayLabel={false} />
        </div>
    )
}