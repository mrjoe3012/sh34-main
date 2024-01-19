import { useState } from "react"
import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericTextInputOption } from "../../../generic-components/GenericTextInputOption"
import { YAxisLabelDefaultMode } from "./YAxisLabelDefaultMode"
import { YAxisLabelCustomMode } from "./YAxisLabelCustomMode"
import { TwoTabSwitcher } from "../../../generic-components/GenericTwoTabSwitcher"

import configjson from "../../../../../../config.json"

export const YAxisLabelOption = () => {

    const [xaxisOptionMode, setXAxisOptionMode] = useState(<YAxisLabelDefaultMode />)

    const changeYAxisLabelText = (inputValue: string) => {
        // Enter logic here for changing of Y Axis Label Text

        (configjson as any)["labellingOptions"]["yAxis"]["yAxisText"] = inputValue
        console.log("Y-Axis Label Text Changed to " + inputValue);
    }


    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="Y-Axis Label Options" />
                <div className="mb-2"><GenericTextInputOption plotFunction={changeYAxisLabelText} placeholder="" labelName={"Text"} displayLabel={true} width="" textPos=""/></div>
                <div className="mx-3"><OptionComponentTitle optionName="Font Options" /></div>
                <TwoTabSwitcher switchTabFunction={setXAxisOptionMode}
                                firstTabContent={<YAxisLabelDefaultMode />}
                                secondTabContent={<YAxisLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom" />
                {xaxisOptionMode}
        </div>
    )
}