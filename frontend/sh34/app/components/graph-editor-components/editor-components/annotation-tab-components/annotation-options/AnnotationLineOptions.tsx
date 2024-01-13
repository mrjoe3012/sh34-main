import { GenericSizeIncrementerOption } from "../../generic-labelling-components/GenericSizeIncrementerOption"
import { GenericColourOption } from "../../generic-labelling-components/GenericColourOption"

export const AnnotationLineOptions = () => {

    const changeAnnotationLineColour = (inputValue: string) => {
        // Enter logic for changing the annotation line colour
        console.log("Annotation Line Colour changed to " + inputValue); 
    }

    return(
        <div className="flex flex-col gap-y-1">
            <GenericSizeIncrementerOption labelName="Line Width" displayLabel={true} />
            <GenericColourOption plotFunction={changeAnnotationLineColour} labelName="Colour" displayLabel={true} />
            <GenericSizeIncrementerOption labelName="X-Offset" displayLabel={true} />
            <GenericSizeIncrementerOption labelName="Y-Offset" displayLabel={true} />

        </div>
    )
}