import { useEffect, useState } from "react"
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

        (configjson as any)["labellingOptions"]["title"]["styling"]["customFontStyle"]["fontColour"] = "#" + inputValue
        console.log("Title Font Colour Changed to " + inputValue);
    }

    const changeTitleLabelFontSize = (inputValue: string) => {
        // Enter logic here for changing of title font size

        (configjson as any)["labellingOptions"]["title"]["styling"]["customFontStyle"]["fontSize"] = Number(inputValue)
        console.log("Title Font Size Changed to " + inputValue);
    }

    const changeTitleLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the title label typeface

        (configjson as any)["labellingOptions"]["title"]["styling"]["customFontStyle"]["typeface"] = inputValue
        console.log("Title Label Typeface changed to " + inputValue);  
    }

    return (
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption contentOnRender={configjson["labellingOptions"]["title"]["styling"]["customFontStyle"]["fontSize"]} plotFunction={changeTitleLabelFontSize} labelName={"Font Size"} displayLabel={true} />
            <GenericColourOption contentOnRender={configjson["labellingOptions"]["title"]["styling"]["customFontStyle"]["fontColour"].slice(1)} plotFunction={changeTitleLabelFontColour} labelName="Colour" displayLabel={true}/>
            <GenericTypefaceOption contentOnRender={configjson["labellingOptions"]["title"]["styling"]["customFontStyle"]["typeface"]} plotFunction={changeTitleLabelTypeface} displayLabel={true}/>
        </div>
    )
}