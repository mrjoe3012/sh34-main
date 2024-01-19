import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericTextInputOption } from "../../generic-components/GenericTextInputOption"

import configjson from "../../../../../config.json"

export const PlotSizeOption = () => {

    const changePlotWidth = (inputValue: string) => {
        // Enter logic here for changing of Plot Width

        configjson["generalOptions"]["plotWidth"] = inputValue
        console.log("Plot Width Changed to " + inputValue);
    }

    const changePlotHeight = (inputValue: string) => {
        // Enter logic here for changing of Plot Height

        configjson["generalOptions"]["plotHeight"] = inputValue
        console.log("Plot Height Changed to " + inputValue);
    }

    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
                <OptionComponentTitle optionName="Plot Size" />

                <div className="flex flex-col gap-y-1 ">
                    
                    < GenericTextInputOption contentOnRender={configjson["generalOptions"]["plotWidth"]} placeholder="px" labelName="Width" displayLabel={true} width="w-[30%]" textPos="text-right" plotFunction={changePlotWidth} />
                    < GenericTextInputOption contentOnRender={configjson["generalOptions"]["plotHeight"]} placeholder="px" labelName="Height" displayLabel={true} width="w-[30%]" textPos="text-right" plotFunction={changePlotHeight} />

                </div>
        </div>
    )
}