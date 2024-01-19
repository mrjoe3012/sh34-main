import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericColourOption } from "../../../generic-components/GenericColourOption"

import configjson from "../../../../../../config.json"

export const PlotMarginOption = () => {

    const changePlotMarginColour = (inputValue: string) => {
        // Enter logic here for changing of Plot Margin Colour

        (configjson as any)["visualOptions"]["colour"]["plotMarginColourHex"] = "#" + inputValue
        console.log("Plot Margin Colour Changed to " + inputValue);
    }
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Plot Margin Colour" />
            <GenericColourOption contentOnRender={configjson["visualOptions"]["colour"]["plotMarginColourHex"].slice(1)} plotFunction={changePlotMarginColour} labelName="" displayLabel={false} />
        </div>
    )
}