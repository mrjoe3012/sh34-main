import { GenericSizeIncrementerOption } from "../../../generic-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../../generic-components/GenericColourOption"
import { GenericTypefaceOption } from "../../../generic-components/GenericTypefaceOption"

import configjson from "../../../../../../config.json"

export const YAxisLabelCustomMode = () => {

    const changeYAxisLabelFontColour = (inputValue: string) => {
        // Enter logic here for changing of Y Axis Label Font Colour

        if (inputValue == "") {
            return
        }

        (configjson as any)["labellingOptions"]["yAxis"]["styling"]["customFontStyle"]["fontColour"] = "#" + inputValue
        console.log("Y-Axis Label Font Colour Changed to " + inputValue);
    }

    const changeYAxisLabelFontSize = (inputValue: string) => {
        // Enter logic here for changing of Y Axis Label Font Size

        (configjson as any)["labellingOptions"]["yAxis"]["styling"]["customFontStyle"]["fontSize"] = Number(inputValue)
        console.log("Y-Axis Label Font Size Changed to " + inputValue);
    }

    const changeYAxisLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the YAxis label typeface

        (configjson as any)["labellingOptions"]["yAxis"]["styling"]["customFontStyle"]["typeface"] = inputValue
        console.log("YAxis Label Typeface changed to " + inputValue);  
    }

    return(
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption contentOnRender={configjson["labellingOptions"]["yAxis"]["styling"]["customFontStyle"]["fontSize"]} plotFunction={changeYAxisLabelFontSize} labelName={"Font Size"} displayLabel={true} />
            <GenericColourOption contentOnRender={configjson["labellingOptions"]["yAxis"]["styling"]["customFontStyle"]["fontColour"].slice(1)} plotFunction={changeYAxisLabelFontColour} labelName="Colour" displayLabel={true} />
            <GenericTypefaceOption contentOnRender={configjson["labellingOptions"]["yAxis"]["styling"]["customFontStyle"]["typeface"]} plotFunction={changeYAxisLabelTypeface} displayLabel={true}/>
        </div>
    )
}