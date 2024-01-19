import { useState, useEffect } from "react"
import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { YAxisTickLabelDefaultMode } from "./YAxisTickLabelDefaultMode"
import { YAxisTickLabelCustomMode } from "./YAxisTickLabelCustomMode"
import { TwoTabSwitcher } from "../../../generic-components/GenericTwoTabSwitcher"
import { YAxisTickLabelAngleOption } from "./YAxisTickLabelAngleOption"
import { YAxisTickLabelPositionOption } from "./YAxisTickLabelPositionOption"

import configjson from "../../../../../../config.json"

export const YAxisTickLabelOption = () => {

    const [yAxisTickLabelOptionMode, setYAxisTickLabelOptionMode] = useState(<YAxisTickLabelDefaultMode />)

    const switchToDefault = () => {
        configjson["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["currentStylingMode"] = "default"
    }

    const switchToCustom = () => {
        configjson["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["currentStylingMode"] = "custom"
    }

    // On Component Load, if Custom Mode is Selected, Switch to Custom Tab
    useEffect(()=> {
        if (configjson["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["currentStylingMode"]=="default") {
            setYAxisTickLabelOptionMode(<YAxisTickLabelDefaultMode />)
        } else if (configjson["labellingOptions"]["yAxis"]["tickLabels"]["styling"]["currentStylingMode"]=="custom") {
            setYAxisTickLabelOptionMode(<YAxisTickLabelCustomMode />)
        }
    }, [])

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Y-Axis Tick Label Options" />
            <div className="flex flex-col gap-y-1">
                <YAxisTickLabelAngleOption />
                <YAxisTickLabelPositionOption />
            </div>
            <TwoTabSwitcher switchTabFunction={setYAxisTickLabelOptionMode}
                                firstTabContent={<YAxisTickLabelDefaultMode />} 
                                secondTabContent={<YAxisTickLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"
                                firstOptionFunction={switchToDefault}
                                secondOptionFunction={switchToCustom}/>
            {yAxisTickLabelOptionMode}
        </div>
    )
}