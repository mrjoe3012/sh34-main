import { useState, useEffect } from "react"
import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { XAxisTickLabelDefaultMode } from "./XAxisTickLabelDefaultMode"
import { XAxisTickLabelCustomMode } from "./XAxisTickLabelCustomMode"
import { TwoTabSwitcher } from "../../../generic-components/GenericTwoTabSwitcher"
import { XAxisTickLabelAngleOption } from "./XAxisTickLabelAngleOption"
import { XAxisTickLabelPositionOption } from "./XAxisTickLabelPositionOption"

import configjson from "../../../../../../config.json"


export const XAxisTickLabelOption = () => {

    const [xAxisTickLabelOptionMode, setXAxisTickLabelOptionMode] = useState(<XAxisTickLabelDefaultMode />)

    const switchToDefault = () => {
        configjson["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["currentStylingMode"] = "default"
    }

    const switchToCustom = () => {
        configjson["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["currentStylingMode"] = "custom"
    }

    // On Component Load, if Custom Mode is Selected, Switch to Custom Tab
    useEffect(()=> {
        if (configjson["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["currentStylingMode"]=="default") {
            setXAxisTickLabelOptionMode(<XAxisTickLabelDefaultMode />)
        } else if (configjson["labellingOptions"]["xAxis"]["tickLabels"]["styling"]["currentStylingMode"]=="custom") {
            setXAxisTickLabelOptionMode(<XAxisTickLabelCustomMode />)
        }
    }, [])

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
            <OptionComponentTitle optionName="X-Axis Tick Label Options" />
            <div className="flex flex-col gap-y-1">
                <XAxisTickLabelAngleOption />
                <XAxisTickLabelPositionOption />
            </div>
            <TwoTabSwitcher switchTabFunction={setXAxisTickLabelOptionMode}
                                firstTabContent={<XAxisTickLabelDefaultMode />} 
                                secondTabContent={<XAxisTickLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"
                                firstOptionFunction={switchToDefault}
                                secondOptionFunction={switchToCustom}/>
            {xAxisTickLabelOptionMode}
        </div>
    )
}