import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericCheckboxOption } from "../../generic-labelling-components/GenericCheckboxOption"

export const AxisLineOption = () => {

    const changeXAxisLines = () => {
        
    }

    const changeYAxisLines = () => {

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