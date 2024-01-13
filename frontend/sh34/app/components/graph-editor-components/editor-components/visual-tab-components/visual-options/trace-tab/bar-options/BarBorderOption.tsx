import { OptionComponentTitle } from "../../../../OptionComponentTitle"
import { GenericColourOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericColourOption";
import { GenericSizeIncrementerOption } from "@app/components/graph-editor-components/editor-components/generic-labelling-components/GenericSizeIncrementerOption";

export const BarBorderOption = () => {

    const changeBarBorderColour = (inputValue: string) => {
        // Enter logic here for changing of Bar Border Colour
        console.log("Bar Border Colour Changed to " + inputValue);
    }

    return (
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            <OptionComponentTitle optionName="Bar Border Settings" />
            <div className="flex flex-col gap-y-1">
                < GenericColourOption plotFunction={changeBarBorderColour} labelName="Colour" displayLabel={true} />
                < GenericSizeIncrementerOption labelName="Width" displayLabel={true} />
            </div>
        </div>
    )
}