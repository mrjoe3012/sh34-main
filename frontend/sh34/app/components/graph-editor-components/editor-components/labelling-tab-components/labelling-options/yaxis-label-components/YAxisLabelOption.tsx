import { useState, useEffect } from "react"
import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericTextInputOption } from "../../../generic-components/GenericTextInputOption"
import { YAxisLabelDefaultMode } from "./YAxisLabelDefaultMode"
import { YAxisLabelCustomMode } from "./YAxisLabelCustomMode"
import { TwoTabSwitcher } from "../../../generic-components/GenericTwoTabSwitcher"

import configjson from "../../../../../../config.json"

export const YAxisLabelOption = () => {

    const [yAxisOptionMode, setYAxisOptionMode] = useState(<YAxisLabelDefaultMode />)

    const changeYAxisLabelText = (inputValue: string) => {
        // Enter logic here for changing of Y Axis Label Text

        (configjson as any)["labellingOptions"]["yAxis"]["yAxisText"] = inputValue
        console.log("Y-Axis Label Text Changed to " + inputValue);
    }

    const switchToDefault = () => {
        configjson["labellingOptions"]["yAxis"]["styling"]["currentStylingMode"] = "default"
    }

    const switchToCustom = () => {
        configjson["labellingOptions"]["yAxis"]["styling"]["currentStylingMode"] = "custom"
    }

    // On Component Load, if Custom Mode is Selected, Switch to Custom Tab
    useEffect(()=> {
        if (configjson["labellingOptions"]["yAxis"]["styling"]["currentStylingMode"]=="default") {
            setYAxisOptionMode(<YAxisLabelDefaultMode />)
        } else if (configjson["labellingOptions"]["yAxis"]["styling"]["currentStylingMode"]=="custom") {
            setYAxisOptionMode(<YAxisLabelCustomMode />)
        }
    }, [])

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="Y-Axis Label Options" />
                <div className="mb-2"><GenericTextInputOption contentOnRender={(configjson as any)["labellingOptions"]["yAxis"]["yAxisText"]} plotFunction={changeYAxisLabelText} placeholder="" labelName={"Text"} displayLabel={true} width="" textPos=""/></div>
                <div className="mx-3"><OptionComponentTitle optionName="Font Options" /></div>
                <TwoTabSwitcher switchTabFunction={setYAxisOptionMode}
                                firstTabContent={<YAxisLabelDefaultMode />}
                                secondTabContent={<YAxisLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"
                                firstOptionFunction={switchToDefault}
                                secondOptionFunction={switchToCustom} />
                {yAxisOptionMode}
        </div>
    )
}