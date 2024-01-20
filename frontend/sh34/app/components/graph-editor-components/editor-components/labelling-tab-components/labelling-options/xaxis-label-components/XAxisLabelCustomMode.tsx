import { GenericSizeIncrementerOption } from "../../../generic-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../../generic-components/GenericColourOption"
import { GenericTypefaceOption } from "../../../generic-components/GenericTypefaceOption"

import { useConfig } from "@app/graph-editor/ConfigContext"

export const XAxisLabelCustomMode = () => {

    const { config, setConfig } = useConfig();

    const changeXAxisLabelFontColour = (inputValue: string) => {
        // Enter logic here for changing of X Axis Label Font Colour

        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };

        newConfig.labellingOptions.xAxis.styling.customFontStyle.fontColour = "#" + inputValue;
        
        setConfig(newConfig);
        console.log("X-Axis Label Font Colour Changed to " + inputValue);
    }

    const changeXAxisLabelFontSize = (inputValue: string) => {
        // Enter logic here for changing of X Axis Label Font size

        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };

        newConfig.labellingOptions.xAxis.styling.customFontStyle.fontSize = Number(inputValue);
        
        setConfig(newConfig);
        console.log("X-Axis Label Font Size Changed to " + inputValue);
    }

    const changeXAxisLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the x axis label typeface

        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };

        newConfig.labellingOptions.xAxis.styling.customFontStyle.typeface = inputValue;
        
        setConfig(newConfig);
        console.log("X Axis Label Typeface changed to " + inputValue);  
    }

    return(
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption contentOnRender={config["labellingOptions"]["xAxis"]["styling"]["customFontStyle"]["fontSize"]} plotFunction={changeXAxisLabelFontSize} labelName={"Font Size"} displayLabel={true}/>
            <GenericColourOption contentOnRender={config["labellingOptions"]["xAxis"]["styling"]["customFontStyle"]["fontColour"].slice(1)} plotFunction={changeXAxisLabelFontColour} labelName="Colour" displayLabel={true}/>
            <GenericTypefaceOption contentOnRender={config["labellingOptions"]["xAxis"]["styling"]["customFontStyle"]["typeface"]} plotFunction={changeXAxisLabelTypeface} displayLabel={true}/>
        </div>
    )
}