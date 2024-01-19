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

        (configjson as any)["labellingOptions"]["yAxis"]["yAxisFontColourHex"] = "#" + inputValue
        console.log("Y-Axis Label Font Colour Changed to " + inputValue);
    }

    const changeYAxisLabelFontSize = (inputValue: string) => {
        // Enter logic here for changing of Y Axis Label Font Size

        (configjson as any)["labellingOptions"]["yAxis"]["yAxisFontSize"] = Number(inputValue)
        console.log("Y-Axis Label Font Size Changed to " + inputValue);
    }

    const changeYAxisLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the YAxis label typeface

        (configjson as any)["labellingOptions"]["yAxis"]["yAxisTypeface"] = inputValue
        console.log("YAxis Label Typeface changed to " + inputValue);  
    }

    return(
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption plotFunction={changeYAxisLabelFontSize} labelName={"Font Size"} displayLabel={true} />
            <GenericColourOption plotFunction={changeYAxisLabelFontColour} labelName="Colour" displayLabel={true} />
            <GenericTypefaceOption plotFunction={changeYAxisLabelTypeface} displayLabel={true}/>
        </div>
    )
}