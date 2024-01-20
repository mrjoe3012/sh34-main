import { GenericColourOption } from "../../../generic-components/GenericColourOption"

interface MarkerConstantOptionProps {
    trace: {
        id: number,
        name: string,
        plotType: string,
        plotIndicator: string,
        markerColour: string,
        orientation: string
    }
    plotFunction: (inputValue: string) => void;
}

export const MarkerConstantOption = (props: MarkerConstantOptionProps) => {
    
    return(
        < GenericColourOption
            labelName="Colour"
            displayLabel={true}
            plotFunction={props.plotFunction}
            contentOnRender={props.trace.markerColour.slice(1)}
        />
    )
}