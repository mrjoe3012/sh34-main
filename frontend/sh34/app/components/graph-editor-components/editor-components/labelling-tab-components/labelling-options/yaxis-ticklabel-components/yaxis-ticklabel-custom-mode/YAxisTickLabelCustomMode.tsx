import { GenericSizeIncrementerOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericColourOption"
import { GenericTypefaceOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTypefaceOption"
import { YAxisTickLabelAngleOption } from "./YAxisTickLabelAngleOption"
import { YAxisTickLabelPositionOption } from "./YAxisTickLabelPositionOption"

import configjson from "../../../../../../../config.json"

export const YAxisTickLabelCustomMode = () => {

    const changeTickLabelFontColour = (inputValue: string) => {
        // Enter logic for changing the Y Axis tick label font colour here

        (configjson as any)["labellingOptions"]["yAxis"]["tickLabels"]["tickFontColourHex"] = "#" + inputValue
        console.log("Y Axis Tick Label Font Colour changed to " + inputValue); 
    }

    const changeTickLabelFontSize = (inputValue: string) => {
        // Enter logic for changing the Y Axis tick label font size

        (configjson as any)["labellingOptions"]["yAxis"]["tickLabels"]["tickFontSize"] = Number(inputValue)
        console.log("Y Axis Tick Label Font Size changed to " + inputValue); 
    }

    const changeTickLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the Y Axis tick label typeface

        configjson["labellingOptions"]["yAxis"]["tickLabels"]["tickTypeface"] = inputValue
        console.log("Y Axis Tick Label Typeface changed to " + inputValue);  
    }

    return (
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption contentOnRender={(configjson as any)["labellingOptions"]["xAxis"]["tickLabels"]["tickFontSize"]} plotFunction={changeTickLabelFontSize} labelName={"Font Size"} displayLabel={true}/>
            <GenericColourOption contentOnRender={(configjson as any)["labellingOptions"]["xAxis"]["tickLabels"]["tickFontColourHex"].slice(1)} plotFunction={changeTickLabelFontColour} labelName="Colour" displayLabel={true}/>
            <GenericTypefaceOption contentOnRender={(configjson as any)["labellingOptions"]["xAxis"]["tickLabels"]["tickTypeface"]} plotFunction={changeTickLabelTypeface} displayLabel={true}/>
            <YAxisTickLabelAngleOption />
            <YAxisTickLabelPositionOption />
        </div>
    )
}