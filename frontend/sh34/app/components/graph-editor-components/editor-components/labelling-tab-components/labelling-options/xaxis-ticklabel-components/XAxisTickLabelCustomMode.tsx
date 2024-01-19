import { GenericSizeIncrementerOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericColourOption"
import { GenericTypefaceOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTypefaceOption"

import configjson from "../../../../../../config.json"

export const XAxisTickLabelCustomMode = () => {

    const changeTickLabelFontColour = (inputValue: string) => {
        // Enter logic for changing the X-Axis tick label font colour here

        (configjson as any)["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontColour"] = "#" + inputValue
        console.log("X-Axis Tick Label Font Colour changed to " + inputValue); 
    }

    const changeTickLabelFontSize = (inputValue: string) => {
        // Enter logic for changing the X-Axis tick label font size

        (configjson as any)["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontSize"] = Number(inputValue)
        console.log("X-Axis Tick Label Font Size changed to " + inputValue); 
    }

    const changeTickLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the X-Axis tick label typeface

        configjson["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["typeface"] = inputValue
        console.log("X-Axis Tick Label Typeface changed to " + inputValue);  
    }

    return (
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption contentOnRender={(configjson as any)["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontSize"]} plotFunction={changeTickLabelFontSize} labelName={"Font Size"} displayLabel={true}/>
            <GenericColourOption contentOnRender={(configjson as any)["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontColour"].slice(1)} plotFunction={changeTickLabelFontColour} labelName="Colour" displayLabel={true}/>
            <GenericTypefaceOption contentOnRender={(configjson as any)["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["typeface"]} plotFunction={changeTickLabelTypeface} displayLabel={true}/>
        </div>
    )
}