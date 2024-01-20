import { useState, useEffect } from "react"
import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { YAxisTickLabelDefaultMode } from "./YAxisTickLabelDefaultMode"
import { YAxisTickLabelCustomMode } from "./YAxisTickLabelCustomMode"
import { TwoTabSwitcher } from "../../../generic-components/GenericTwoTabSwitcher"
import { YAxisTickLabelPositionOption } from "./YAxisTickLabelPositionOption"
import { GenericAngleOption } from "../../../generic-components/GenericAngleOption"

import { useConfig } from "@app/graph-editor/ConfigContext"

export const YAxisTickLabelOption = () => {

    const { config, setConfig } = useConfig();
    const [yAxisTickLabelOptionMode, setYAxisTickLabelOptionMode] = useState(<YAxisTickLabelDefaultMode />)

    const switchToDefault = () => {
        const newConfig = { ...config };
        newConfig.labellingOptions.yAxis.tickLabels.styling.currentStylingMode = "default";
        setConfig(newConfig); // Update the config context
    }

    const switchToCustom = () => {
        const newConfig = { ...config };
        newConfig.labellingOptions.yAxis.tickLabels.styling.currentStylingMode = "custom";
        setConfig(newConfig); // Update the config context
    }

    const changeYAxisTickAngle = (inputValue: string) => {
        if (inputValue === "") {
            return
        }

        const newConfig = { ...config };

        newConfig.labellingOptions.yAxis.tickLabels.tickAngle = Number(inputValue);
        
        setConfig(newConfig);
    }
    // On Component Load, if Custom Mode is Selected, Switch to Custom Tab
    useEffect(()=> {
        if (config["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["currentStylingMode"]=="default") {
            setYAxisTickLabelOptionMode(<YAxisTickLabelDefaultMode />)
        } else if (config["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["currentStylingMode"]=="custom") {
            setYAxisTickLabelOptionMode(<YAxisTickLabelCustomMode />)
        }
    }, [])

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Y-Axis Tick Label Options" />
            <div className="flex flex-col gap-y-1">
                < GenericAngleOption plotFunction={changeYAxisTickAngle} />
                <YAxisTickLabelPositionOption />
            </div>
            <TwoTabSwitcher switchTabFunction={setYAxisTickLabelOptionMode}
                                firstTabContent={<YAxisTickLabelDefaultMode />} 
                                secondTabContent={<YAxisTickLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"
                                firstOptionFunction={switchToDefault}
                                secondOptionFunction={switchToCustom}
                                />
            {yAxisTickLabelOptionMode}
        </div>
    )
}