import { useState, useEffect } from "react"
import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericTextInputOption } from "../../../generic-components/GenericTextInputOption"
import { XAxisLabelDefaultMode } from "./XAxisLabelDefaultMode"
import { XAxisLabelCustomMode } from "./XAxisLabelCustomMode"
import { TwoTabSwitcher } from "../../../generic-components/GenericTwoTabSwitcher"

import configjson from "../../../../../../config.json"

export const XAxisLabelOption = () => {

    const [xaxisOptionMode, setXAxisOptionMode] = useState(<XAxisLabelDefaultMode />)

    const changeXAxisLabelText = (inputValue: string) => {
        // Enter logic for changing x axis label text

        (configjson as any)["labellingOptions"]["xAxis"]["xAxisText"] = inputValue
        console.log("Changed x axis label text to " + inputValue);
    }

    const switchToDefault = () => {
        configjson["labellingOptions"]["xAxis"]["styling"]["currentStylingMode"] = "default"
    }

    const switchToCustom = () => {
        configjson["labellingOptions"]["xAxis"]["styling"]["currentStylingMode"] = "custom"
    }

    // On Component Load, if Custom Mode is Selected, Switch to Custom Tab
    useEffect(()=> {
        if (configjson["labellingOptions"]["xAxis"]["styling"]["currentStylingMode"]=="default") {
            setXAxisOptionMode(<XAxisLabelDefaultMode />)
        } else if (configjson["labellingOptions"]["xAxis"]["styling"]["currentStylingMode"]=="custom") {
            setXAxisOptionMode(<XAxisLabelCustomMode />)
        }
    }, [])

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="X-Axis Label Options" />
                <div className="mb-2"><GenericTextInputOption contentOnRender={(configjson as any)["labellingOptions"]["xAxis"]["xAxisText"]} plotFunction={changeXAxisLabelText} placeholder="" labelName={"Text"} displayLabel={true} width="" textPos=""/></div>
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