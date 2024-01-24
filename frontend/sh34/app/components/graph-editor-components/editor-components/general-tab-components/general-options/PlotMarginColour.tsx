import { OptionComponentTitle } from "../../OptionComponentTitle"
import { GenericColourOption } from "../../generic-components/GenericColourOption"
import { useConfig } from "@app/graph-editor/ConfigContext"

export const PlotMarginOption = () => {

    const {config,setConfig} = useConfig()

    const changePlotMarginColour = (inputValue: string) => {
        // Enter logic here for changing of Plot Margin Colour

        const newConfig = {
            ...config,
            visualOptions: {
                ...config.visualOptions,
                colour: {
                    ...config.visualOptions.colour,
                    plotMarginColourHex: "#" + inputValue
                }
            }
        };

        setConfig(newConfig)

        console.log("Plot Margin Colour Changed to " + inputValue);
    }
    
    return(
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Plot Margin Colour" />
            <GenericColourOption contentOnRender={config["visualOptions"]["colour"]["plotMarginColourHex"].slice(1)} plotFunction={changePlotMarginColour} labelName="" displayLabel={false} />
        </div>
    )
}