import { OptionComponentTitle } from "../../../OptionComponentTitle"
import { GenericColourOption } from "../../../generic-components/GenericColourOption"
import { ConfigContext } from "@app/graph-editor/[id]/page"
import { useContext } from "react"

export const PlotColourOption = () => {

    const {config,setConfig} = useContext(ConfigContext)

    const changePlotBackgroundColour = (inputValue: string) => {
        // Enter logic here for changing of Plot Background Colour

        if (config==null){return}

        // Create a new config object by deeply copying the old config
        // and updating the plotBackgroundColourHex property
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
            <GenericColourOption contentOnRender={config!["visualOptions"]["colour"]["plotBackgroundColourHex"].slice(1)} plotFunction={changePlotBackgroundColour} labelName="" displayLabel={false} />
        </div>
    )
}