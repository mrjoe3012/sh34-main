import { GenericSizeIncrementerOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericColourOption"
import { GenericTypefaceOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTypefaceOption"

import { useConfig } from "@app/graph-editor/ConfigContext"

export const YAxisLabelCustomMode = () => {

    const { config, setConfig } = useConfig();
    const changeYAxisLabelFontColour = (inputValue: string) => {
        // Enter logic here for changing of Y Axis Label Font Colour

        if (config === null) return;
        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };

        newConfig.labellingOptions.yAxis.styling.customFontStyle.fontColour = "#" + inputValue;
        
        setConfig(newConfig);
        console.log("Y-Axis Label Font Colour Changed to " + inputValue);
    }

    const changeYAxisLabelFontSize = (inputValue: string) => {
        // Enter logic here for changing of Y Axis Label Font Size

        if (config === null) return;
        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };

        newConfig.labellingOptions.yAxis.styling.customFontStyle.fontSize = Number(inputValue);
        
        setConfig(newConfig);
        console.log("Y-Axis Label Font Size Changed to " + inputValue);
    }

    const changeYAxisLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the YAxis label typeface

        if (config === null) return;
        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };

        newConfig.labellingOptions.yAxis.styling.customFontStyle.typeface = inputValue;
        
        setConfig(newConfig);
        console.log("YAxis Label Typeface changed to " + inputValue);  
    }
    if (config === null) return <div></div>
    return(
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption contentOnRender={config["labellingOptions"]["yAxis"]["styling"]["customFontStyle"]["fontSize"]} plotFunction={changeYAxisLabelFontSize} labelName={"Font Size"} displayLabel={true} />
            <GenericTypefaceOption contentOnRender={config["labellingOptions"]["yAxis"]["styling"]["customFontStyle"]["typeface"]} plotFunction={changeYAxisLabelTypeface} displayLabel={true}/>
            <GenericColourOption contentOnRender={config["labellingOptions"]["yAxis"]["styling"]["customFontStyle"]["fontColour"].slice(1)} plotFunction={changeYAxisLabelFontColour} labelName="Colour" displayLabel={true} />
        </div>
    )
}