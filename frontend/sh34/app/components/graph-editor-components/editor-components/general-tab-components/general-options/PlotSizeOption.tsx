import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericTextInputOption } from "../../generic-components/GenericTextInputOption"
import { useConfig } from "@app/graph-editor/ConfigContext"

export const PlotSizeOption = () => {

    const {config,setConfig} = useConfig()

    const changePlotWidth = (inputValue: string) => {
        // Enter logic here for changing of Plot Width
        if (config === null)
            return;
        const newConfig = {
            ...config,
            generalOptions: {
                ...config.generalOptions,
                plotWidth: inputValue
            }
        };
    
        setConfig(newConfig);
 
        console.log("Plot Width Changed to " + inputValue);
    }

    const changePlotHeight = (inputValue: string) => {
        // Enter logic here for changing of Plot Width
        if (config === null)
            return;
        const newConfig = {
            ...config,
            generalOptions: {
                ...config.generalOptions,
                plotHeight: inputValue
            }
        };
    
        // Set the new config object into the state
        setConfig(newConfig);
 
        console.log("Plot Height Changed to " + inputValue);
    }
    if (config === null)
        return <div></div>
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
                <OptionComponentTitle optionName="Plot Size" />

                <div className="flex flex-col gap-y-1 ">
                    
                    < GenericTextInputOption contentOnRender={config["generalOptions"]["plotWidth"]} placeholder="px" labelName="Width" displayLabel={true} width="w-[30%]" textPos="text-right" plotFunction={changePlotWidth} />
                    < GenericTextInputOption contentOnRender={config["generalOptions"]["plotHeight"]} placeholder="px" labelName="Height" displayLabel={true} width="w-[30%]" textPos="text-right" plotFunction={changePlotHeight} />

                </div>
        </div>
    )
}