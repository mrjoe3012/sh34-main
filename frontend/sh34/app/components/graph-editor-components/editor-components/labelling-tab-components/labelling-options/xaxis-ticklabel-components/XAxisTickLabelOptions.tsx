import { useState, useEffect } from "react"
import { OptionComponentTitle } from "@app/components/graph-editor-components/editor-components/OptionComponentTitle"
import { XAxisTickLabelDefaultMode } from "@app/components/graph-editor-components/editor-components/labelling-tab-components/labelling-options/xaxis-ticklabel-components/XAxisTickLabelDefaultMode"
import { XAxisTickLabelCustomMode } from "@app/components/graph-editor-components/editor-components/labelling-tab-components/labelling-options/xaxis-ticklabel-components/XAxisTickLabelCustomMode"
import { TwoTabSwitcher } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTwoTabSwitcher"
import { XAxisTickLabelPositionOption } from "@app/components/graph-editor-components/editor-components/labelling-tab-components/labelling-options/xaxis-ticklabel-components/XAxisTickLabelPositionOption"
import { GenericAngleOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericAngleOption"

import { useConfig } from "@app/graph-editor/ConfigContext"

export const XAxisTickLabelOption = () => {

    const { config, setConfig } = useConfig();
    const [xAxisTickLabelOptionMode, setXAxisTickLabelOptionMode] = useState(<XAxisTickLabelDefaultMode />)
    const [tabOnRender, setTabOnRender] = useState(-1);

    const switchToDefault = () => {
        if (config === null) return;
        const newConfig = { ...config };
        newConfig.labellingOptions.xAxis.tickLabels.styling.currentStylingMode = "default";
        setConfig(newConfig); // Update the config context
    }

    const switchToCustom = () => {
        if (config === null) return;
        const newConfig = { ...config };
        newConfig.labellingOptions.xAxis.tickLabels.styling.currentStylingMode = "custom";
        setConfig(newConfig); // Update the config context
    }

    const changeXAxisTickAngle = (inputValue: string) => {
        if (config === null) return;
        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };

        newConfig.labellingOptions.xAxis.tickLabels.tickAngle = Number(inputValue);

        setConfig(newConfig);
    }

    // On Component Load, if Custom Mode is Selected, Switch to Custom Tab
    useEffect(()=> {
        if (config === null) return;
        if (config["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["currentStylingMode"]=="default") {
            setXAxisTickLabelOptionMode(<XAxisTickLabelDefaultMode />)
            setTabOnRender(0);
        } else if (config["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["currentStylingMode"]=="custom") {
            setXAxisTickLabelOptionMode(<XAxisTickLabelCustomMode />)
            setTabOnRender(1);
        }
    }, [])

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="X-Axis Tick Label Options" />
            <div className="flex flex-col gap-y-1">
                < GenericAngleOption plotFunction={changeXAxisTickAngle} />
                <XAxisTickLabelPositionOption />
            </div>
            <TwoTabSwitcher switchTabFunction={setXAxisTickLabelOptionMode}
                                firstTabContent={<XAxisTickLabelDefaultMode />}
                                secondTabContent={<XAxisTickLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"
                                firstOptionFunction={switchToDefault}
                                secondOptionFunction={switchToCustom}
                                tabOnRender={tabOnRender}/>
            {xAxisTickLabelOptionMode}
        </div>
    )
}