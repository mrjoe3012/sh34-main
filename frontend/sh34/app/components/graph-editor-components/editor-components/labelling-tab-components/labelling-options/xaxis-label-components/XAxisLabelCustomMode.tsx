import { GenericSizeIncrementerOption } from "../../../generic-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../../generic-components/GenericColourOption"
import { GenericTypefaceOption } from "../../../generic-components/GenericTypefaceOption"

import configjson from "../../../../../../config.json"

export const XAxisLabelCustomMode = () => {

    const changeXAxisLabelFontColour = (inputValue: string) => {
        // Enter logic here for changing of X Axis Label Font Colour

        if (inputValue === "") {
            return
        }

        (configjson as any)["labellingOptions"]["xAxis"]["styling"]["customFontStyle"]["fontColour"] = "#" + inputValue
        console.log("X-Axis Label Font Colour Changed to " + inputValue);
    }

    const changeXAxisLabelFontSize = (inputValue: string) => {
        // Enter logic here for changing of X Axis Label Font size

        (configjson as any)["labellingOptions"]["xAxis"]["styling"]["customFontStyle"]["fontSize"] = Number(inputValue)
        console.log("X-Axis Label Font Size Changed to " + inputValue);
    }

    const changeXAxisLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the x axis label typeface

        (configjson as any)["labellingOptions"]["xAxis"]["styling"]["customFontStyle"]["typeface"] = inputValue
        console.log("X Axis Label Typeface changed to " + inputValue);  
    }

    return(
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption contentOnRender={configjson["labellingOptions"]["xAxis"]["styling"]["customFontStyle"]["fontSize"]} plotFunction={changeXAxisLabelFontSize} labelName={"Font Size"} displayLabel={true}/>
            <GenericColourOption contentOnRender={configjson["labellingOptions"]["xAxis"]["styling"]["customFontStyle"]["fontColour"].slice(1)} plotFunction={changeXAxisLabelFontColour} labelName="Colour" displayLabel={true}/>
            <GenericTypefaceOption contentOnRender={configjson["labellingOptions"]["xAxis"]["styling"]["customFontStyle"]["typeface"]} plotFunction={changeXAxisLabelTypeface} displayLabel={true}/>
        </div>
    )
}