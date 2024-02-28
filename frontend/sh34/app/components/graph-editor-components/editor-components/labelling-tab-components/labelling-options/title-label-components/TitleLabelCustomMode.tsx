import { GenericSizeIncrementerOption } from "../../../generic-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../../generic-components/GenericColourOption"
import { GenericTypefaceOption } from "../../../generic-components/GenericTypefaceOption"

import { useConfig } from "@app/graph-editor/ConfigContext"

export const TitleLabelCustomMode = () => {

    const { config, setConfig } = useConfig();

    const changeTitleLabelFontColour = (inputValue: string) => {
        // Enter logic here for changing of title font colour
        if (config === null)
            return;
        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };

        newConfig.labellingOptions.title.styling.customFontStyle.fontColour = "#" + inputValue;
        
        setConfig(newConfig);
        
        console.log("Title Font Colour Changed to " + inputValue);
    }

    const changeTitleLabelFontSize = (inputValue: string) => {
        // Enter logic here for changing of title font size
        if (inputValue === "" || config === null) {
            return
        }

        const newConfig = { ...config };
0
        newConfig.labellingOptions.title.styling.customFontStyle.fontSize = Number(inputValue);
        
        setConfig(newConfig);
        console.log("Title Font Size Changed to " + inputValue);
    }

    const changeTitleLabelTypeface = (inputValue: string) => {
        // Enter logic for changing the title label typeface

        if (inputValue === "" || config === null) {
            return
        }

        const newConfig = { ...config };

        newConfig.labellingOptions.title.styling.customFontStyle.typeface = inputValue;
        
        setConfig(newConfig);
        console.log("Title Label Typeface changed to " + inputValue);  
    }
    if (config === null)
        return <div></div>
    return (
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption contentOnRender={config["labellingOptions"]["title"]["styling"]["customFontStyle"]["fontSize"]} plotFunction={changeTitleLabelFontSize} labelName={"Font Size"} displayLabel={true} />
            <GenericTypefaceOption contentOnRender={config["labellingOptions"]["title"]["styling"]["customFontStyle"]["typeface"]} plotFunction={changeTitleLabelTypeface} displayLabel={true}/>
            <GenericColourOption contentOnRender={config["labellingOptions"]["title"]["styling"]["customFontStyle"]["fontColour"].slice(1)} plotFunction={changeTitleLabelFontColour} labelName="Colour" displayLabel={true}/>
        </div>
    )
}