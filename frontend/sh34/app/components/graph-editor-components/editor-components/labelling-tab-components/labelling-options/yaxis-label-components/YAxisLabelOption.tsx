import { useState } from "react"

import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericTextInputOption } from "../../../generic-labelling-components/GenericTextInputOption"
import { YAxisLabelDefaultMode } from "./YAxisLabelDefaultMode"
import { YAxisLabelCustomMode } from "./YAxisLabelCustomMode"

import { TwoTabSwitcher } from "../../../GenericTwoTabSwitcher"

export const YAxisLabelOption = () => {

    const [xaxisOptionMode, setXAxisOptionMode] = useState(<YAxisLabelDefaultMode />)

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="Y-Axis Label Options" />
                <div className="mb-2"><GenericTextInputOption placeholder="" labelName={"Text"} displayLabel={true} /></div>
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