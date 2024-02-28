import { useState, useEffect } from "react"
import { OptionComponentTitle } from "@app/components/graph-editor-components/editor-components/OptionComponentTitle"
import { GenericTextInputOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTextInputOption"
import { YAxisLabelDefaultMode } from "@app/components/graph-editor-components/editor-components/labelling-tab-components/labelling-options/yaxis-label-components/YAxisLabelDefaultMode"
import { YAxisLabelCustomMode } from "@app/components/graph-editor-components/editor-components/labelling-tab-components/labelling-options/yaxis-label-components/YAxisLabelCustomMode"
import { TwoTabSwitcher } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTwoTabSwitcher"

import { useConfig } from "@app/graph-editor/ConfigContext"

export const YAxisLabelOption = () => {

    const { config, setConfig } = useConfig();
    const [yAxisOptionMode, setYAxisOptionMode] = useState(<YAxisLabelDefaultMode />)
    const [tabOnRender, setTabOnRender] = useState(-1);

    const changeYAxisLabelText = (inputValue: string) => {
        // Enter logic here for changing of Y Axis Label Text

        if (config === null) return;
        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };

        newConfig.labellingOptions.yAxis.yAxisText = inputValue;

        setConfig(newConfig);
        console.log("Y-Axis Label Text Changed to " + inputValue);
    }

    const switchToDefault = () => {
        if (config === null) return;
        const newConfig = { ...config };
        newConfig.labellingOptions.yAxis.styling.currentStylingMode = "default";
        setConfig(newConfig); // Update the config context
    }

    const switchToCustom = () => {
        if (config === null) return;
        const newConfig = { ...config };
        newConfig.labellingOptions.yAxis.styling.currentStylingMode = "custom";
        setConfig(newConfig); // Update the config context
    }

    // On Component Load, if Custom Mode is Selected, Switch to Custom Tab
    useEffect(()=> {
        if (config === null) return;
        if (config["labellingOptions"]["yAxis"]["styling"]["currentStylingMode"]=="default") {
            setYAxisOptionMode(<YAxisLabelDefaultMode />)
            setTabOnRender(0)
        } else if (config["labellingOptions"]["yAxis"]["styling"]["currentStylingMode"]=="custom") {
            setYAxisOptionMode(<YAxisLabelCustomMode />)
            setTabOnRender(1)
        }
    }, [])

    if (config === null) return <div></div>
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
                <OptionComponentTitle optionName="Y-Axis Label Options" />
                <div className="mb-2"><GenericTextInputOption contentOnRender={config["labellingOptions"]["yAxis"]["yAxisText"]} plotFunction={changeYAxisLabelText} placeholder="" labelName={"Text"} displayLabel={true} width="" textPos=""/></div>
                <div className="mx-3"><OptionComponentTitle optionName="Font Options" /></div>
                <TwoTabSwitcher switchTabFunction={setYAxisOptionMode}
                                firstTabContent={<YAxisLabelDefaultMode />}
                                secondTabContent={<YAxisLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"
                                firstOptionFunction={switchToDefault}
                                secondOptionFunction={switchToCustom}
                                tabOnRender={tabOnRender}
                                />
                {yAxisOptionMode}
        </div>
    )
}