import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericCheckboxOption } from "../../generic-components/GenericCheckboxOption"

import configjson from "../../../../../config.json"

export const AxisLineOption = () => {

    const changeXAxisLines = (inputValue: boolean) => {
        // Enter logic here for toggling x-axis lines

        configjson["generalOptions"]["displayXAxisLines"] = inputValue
        console.log(configjson)
        console.log("Toggled x-axis lines to " + inputValue);
    }

    const changeYAxisLines = (inputValue: boolean) => {
        // Enter logic here for toggling y-axis lines
        
        configjson["generalOptions"]["displayYAxisLines"] = inputValue
        console.log(configjson)
        console.log("Toggled y-axis lines to " + inputValue);
    }

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="Axis Lines" />
                <div className="ml-3">
                    < GenericCheckboxOption isCheckedOnRender={configjson["generalOptions"]["displayXAxisLines"]} plotFunction={changeXAxisLines} labelName="X-Axis" displayLabel={true} />
                    < GenericCheckboxOption isCheckedOnRender={configjson["generalOptions"]["displayYAxisLines"]} plotFunction={changeYAxisLines} labelName="Y-Axis" displayLabel={true} />
                </div>
        </div>
    )
}