import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericCheckboxOption } from "../../generic-components/GenericCheckboxOption"

export const AxisLineOption = () => {

    const changeXAxisLines = (inputValue: string) => {
        // Enter logic here for toggling x-axis lines
        console.log("Toggled x-axis lines to " + inputValue);
    }

    const changeYAxisLines = (inputValue: string) => {
        // Enter logic here for toggling y-axis lines
        console.log("Toggled y-axis lines to " + inputValue);
    }

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md"> 
                <OptionComponentTitle optionName="Axis Lines" />
                <div className="ml-3">
                    < GenericCheckboxOption plotFunction={changeXAxisLines} labelName="X-Axis" displayLabel={true} />
                    < GenericCheckboxOption plotFunction={changeYAxisLines} labelName="Y-Axis" displayLabel={true} />
                </div>
        </div>
    )
}