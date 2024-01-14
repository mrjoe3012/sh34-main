import { useState } from "react"

import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericTextInputOption } from "../../../generic-labelling-components/GenericTextInputOption"
import { XAxisLabelDefaultMode } from "./XAxisLabelDefaultMode"
import { XAxisLabelCustomMode } from "./XAxisLabelCustomMode"

import { TwoTabSwitcher } from "../../../GenericTwoTabSwitcher"

export const XAxisLabelOption = () => {

    const [xaxisOptionMode, setXAxisOptionMode] = useState(<XAxisLabelDefaultMode />)

    const changeXAxisLabelText = (inputValue: string) => {
        // Enter logic for changing x axis label text
        console.log("Changed x axis label text to " + inputValue);
    }

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="X-Axis Label Options" />
                <div className="mb-2"><GenericTextInputOption plotFunction={changeXAxisLabelText} placeholder="" labelName={"Text"} displayLabel={true} /></div>
                <div className="mx-3"><OptionComponentTitle optionName="Font Options" /></div>
                <TwoTabSwitcher switchTabFunction={setXAxisOptionMode}
                                firstTabContent={<XAxisLabelDefaultMode />}
                                secondTabContent={<XAxisLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom" />
                {xaxisOptionMode}
        </div>
    )
}