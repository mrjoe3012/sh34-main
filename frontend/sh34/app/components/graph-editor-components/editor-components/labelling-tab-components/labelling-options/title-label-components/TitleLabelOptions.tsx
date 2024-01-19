import { useEffect, useState } from "react"
import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericTextInputOption } from "../../../generic-components/GenericTextInputOption"
import { TitleLabelDefaultMode } from "./TitleLabelDefaultMode"
import { TitleLabelCustomMode } from "./TitleLabelCustomMode"
import { TwoTabSwitcher } from "../../../generic-components/GenericTwoTabSwitcher"

import configjson from "../../../../../../config.json"

export const TitleLabelOptions = () => {

    const [titleOptionMode, setTitleOptionMode] = useState(<TitleLabelDefaultMode />)

    const changeTitleText = (inputValue: string) => {
        configjson["labellingOptions"]["title"]["plotTitle"] = inputValue
        console.log("Changed title text to " + inputValue);
    }

    const switchToDefault = () => {
        configjson["labellingOptions"]["title"]["styling"]["currentStylingMode"] = "default"
    }

    const switchToCustom = () => {
        configjson["labellingOptions"]["title"]["styling"]["currentStylingMode"] = "custom"
    }

    // On Component Load, if Custom Mode is Selected, Switch to Custom Tab
    useEffect(()=> {
        if (configjson["labellingOptions"]["title"]["styling"]["currentStylingMode"]=="default") {
            setTitleOptionMode(<TitleLabelDefaultMode />)
        } else if (configjson["labellingOptions"]["title"]["styling"]["currentStylingMode"]=="custom") {
            setTitleOptionMode(<TitleLabelCustomMode />)
        }
    }, [])

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="Title Label Options" />
                <div className="mb-2"><GenericTextInputOption contentOnRender={configjson["labellingOptions"]["title"]["plotTitle"]} plotFunction={changeTitleText} placeholder="" labelName={"Text"} displayLabel={true} width="" textPos=""/></div>
                <div className="mx-3"><OptionComponentTitle optionName="Font Options" /></div>
                <TwoTabSwitcher
                                switchTabFunction={setTitleOptionMode}
                                firstTabContent={<TitleLabelDefaultMode />} 
                                secondTabContent={<TitleLabelCustomMode />}
                                switcherLabel1="Default"
                                switcherLabel2="Custom"
                                firstOptionFunction={switchToDefault}
                                secondOptionFunction={switchToCustom}
                                 />
                {titleOptionMode}
        </div>
    )
}