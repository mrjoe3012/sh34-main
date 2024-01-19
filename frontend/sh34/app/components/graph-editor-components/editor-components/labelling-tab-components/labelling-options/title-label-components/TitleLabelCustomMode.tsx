import { GenericSizeIncrementerOption } from "../../../generic-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../../generic-components/GenericColourOption"
import { GenericTypefaceOption } from "../../../generic-components/GenericTypefaceOption"

import configjson from "../../../../../../config.json"

export const TitleLabelCustomMode = () => {

    const changeTitleLabelFontColour = (inputValue: string) => {
        // Enter logic here for changing of title font colour

        if (inputValue === "") {
            return
        }

        (configjson as any)["labellingOptions"]["title"]["titleFontColourHex"] = "#" + inputValue
        console.log("Title Font Colour Changed to " + inputValue);
    }

    const changeTitleLabelFontSize = (inputValue: string) => {
        // Enter logic here for changing of title font size

        (configjson as any)["labellingOptions"]["title"]["titleFontSize"] = Number(inputValue)
        console.log("Title Font Size Changed to " + inputValue);
    }

    const changeTitleLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the title label typeface

        (configjson as any)["labellingOptions"]["title"]["titleTypeface"] = inputValue
        console.log("Title Label Typeface changed to " + inputValue);  
    }

    return (
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption contentOnRender={configjson["labellingOptions"]["xAxis"]["xAxisFontSize"]} plotFunction={changeTitleLabelFontSize} labelName={"Font Size"} displayLabel={true} />
            <GenericColourOption contentOnRender={configjson["labellingOptions"]["title"]["titleFontColourHex"].slice(1)} plotFunction={changeTitleLabelFontColour} labelName="Colour" displayLabel={true}/>
            <GenericTypefaceOption contentOnRender={configjson["labellingOptions"]["title"]["titleTypeface"]} plotFunction={changeTitleLabelTypeface} displayLabel={true}/>
        </div>
    )
}