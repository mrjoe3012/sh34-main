import { GenericSizeIncrementerOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericColourOption"
import { GenericTypefaceOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTypefaceOption"

import { useConfig } from "@app/graph-editor/ConfigContext"

export const YAxisTickLabelCustomMode = () => {

    const { config, setConfig } = useConfig();

    const changeTickLabelFontColour = (inputValue: string) => {
        // Enter logic for changing the Y Axis tick label font colour here

        if (config === null) return;
        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };
        newConfig.labellingOptions.yAxis.tickLabels.styling.customFontStyle.fontColour = "#" + inputValue;
        setConfig(newConfig);
        console.log("Y Axis Tick Label Font Colour changed to " + inputValue); 
    }

    const changeTickLabelFontSize = (inputValue: string) => {
        // Enter logic for changing the Y Axis tick label font size

        if (config === null) return;
        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };
        newConfig.labellingOptions.yAxis.tickLabels.styling.customFontStyle.fontSize = Number(inputValue);
        setConfig(newConfig);
        console.log("Y Axis Tick Label Font Size changed to " + inputValue); 
    }

    const changeTickLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the Y Axis tick label typeface

        if (config === null) return;
        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };
        newConfig.labellingOptions.yAxis.tickLabels.styling.customFontStyle.typeface = inputValue;
        setConfig(newConfig);
        console.log("Y Axis Tick Label Typeface changed to " + inputValue);  
    }

    if (config === null) return <div></div>
    return (
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption contentOnRender={config["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontSize"]} plotFunction={changeTickLabelFontSize} labelName={"Font Size"} displayLabel={true}/>
            <GenericTypefaceOption contentOnRender={config["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["typeface"]} plotFunction={changeTickLabelTypeface} displayLabel={true}/>
            <GenericColourOption contentOnRender={config["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["customFontStyle"]["fontColour"].slice(1)} plotFunction={changeTickLabelFontColour} labelName="Colour" displayLabel={true}/>
        </div>
    )
}