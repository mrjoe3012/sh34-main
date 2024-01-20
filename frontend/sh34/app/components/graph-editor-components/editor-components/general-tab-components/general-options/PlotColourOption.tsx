import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericColourOption } from "../../generic-components/GenericColourOption"
import { useConfig } from "@app/graph-editor/ConfigContext"

export const PlotColourOption = () => {

    const {config,setConfig} = useConfig()

    const changePlotBackgroundColour = (inputValue: string) => {
        // Enter logic here for changing of Plot Background Colour

        const newConfig = {
            ...config,
            visualOptions: {
                ...config.visualOptions,
                colour: {
                    ...config.visualOptions.colour,
                    plotBackgroundColourHex: "#" + inputValue
                }
            }
        };

        // Set the new config object into the state
        setConfig(newConfig);

        console.log("Plot Background Colour Changed to " + inputValue);
    }
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Plot Background Colour" />
            <GenericColourOption contentOnRender={config["visualOptions"]["colour"]["plotBackgroundColourHex"].slice(1)} plotFunction={changePlotBackgroundColour} labelName="" displayLabel={false} />
        </div>
    )
}