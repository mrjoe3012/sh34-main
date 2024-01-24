import { useState, useEffect } from "react"
import { OptionComponentTitle } from "@app/components/graph-editor-components/editor-components/OptionComponentTitle"
import { GenericTextInputOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTextInputOption"
import { XAxisLabelDefaultMode } from "@app/components/graph-editor-components/editor-components/labelling-tab-components/labelling-options/xaxis-label-components/XAxisLabelDefaultMode"
import { XAxisLabelCustomMode } from "@app/components/graph-editor-components/editor-components/labelling-tab-components/labelling-options/xaxis-label-components/XAxisLabelCustomMode"
import { TwoTabSwitcher } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTwoTabSwitcher"

import { useConfig } from "@app/graph-editor/ConfigContext"

export const XAxisLabelOption = () => {

    const { config, setConfig } = useConfig();
    const [xaxisOptionMode, setXAxisOptionMode] = useState(<XAxisLabelDefaultMode />)

    const changeXAxisLabelText = (inputValue: string) => {
        // Enter logic for changing x axis label text

        
        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };

        newConfig.labellingOptions.xAxis.xAxisText = inputValue;
        
        setConfig(newConfig);

        console.log("Changed x axis label text to " + inputValue);
    }

    const switchToDefault = () => {
        const newConfig = { ...config };
        newConfig.labellingOptions.xAxis.styling.currentStylingMode = "default";
        setConfig(newConfig); // Update the config context
    }

    const switchToCustom = () => {
        const newConfig = { ...config };
        newConfig.labellingOptions.xAxis.styling.currentStylingMode = "custom";
        setConfig(newConfig); // Update the config context
    }

    // On Component Load, if Custom Mode is Selected, Switch to Custom Tab
    useEffect(()=> {
        if (config["labellingOptions"]["xAxis"]["styling"]["currentStylingMode"]=="default") {
            setXAxisOptionMode(<XAxisLabelDefaultMode />)
        } else if (config["labellingOptions"]["xAxis"]["styling"]["currentStylingMode"]=="custom") {
            setXAxisOptionMode(<XAxisLabelCustomMode />)
        }
    }, [])

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="X-Axis Label Options" />
                <div className="mb-2"><GenericTextInputOption contentOnRender={config["labellingOptions"]["xAxis"]["xAxisText"]} plotFunction={changeXAxisLabelText} placeholder="" labelName={"Text"} displayLabel={true} width="" textPos=""/></div>
                <div className="mx-3"><OptionComponentTitle optionName="Font Options" /></div>
                <TwoTabSwitcher switchTabFunction={setXAxisOptionMode}
                                firstTabContent={<XAxisLabelDefaultMode />}
                                secondTabContent={<XAxisLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"
                                firstOptionFunction={switchToDefault}
                                secondOptionFunction={switchToCustom} />
                {xaxisOptionMode}
        </div>
    )
}