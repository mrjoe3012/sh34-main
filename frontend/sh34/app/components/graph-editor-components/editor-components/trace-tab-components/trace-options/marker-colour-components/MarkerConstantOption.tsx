import { GenericColourOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericColourOption"
import { TraceType } from "@app/modules/Config"

interface MarkerConstantOptionProps {
    trace: TraceType
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