import { GenericTwoButtonOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTwoButtonOption";

import configjson from "../../../../../../config.json"

export const XAxisTickLabelPositionOption = () => {

    const changePositionBottom = (inputValue: string) => {
        // Enter logic here for toggling tick labels to the bottom

        (configjson as any)["labellingOptions"]["xAxis"]["tickLabels"]["tickPosition"] = inputValue.toLowerCase()
        console.log("Toggled tick label position to " + inputValue.toLowerCase());
    }

    const changePositionTop = (inputValue: string) => {
        // Enter logic here for toggling tick labels to the top

        (configjson as any)["labellingOptions"]["xAxis"]["tickLabels"]["tickPosition"] = inputValue.toLowerCase()
        console.log("Toggled tick label position to " +  inputValue.toLowerCase());
    }

    return(
        <div className="mx-3 flex gap-x-1 items-center">
            <div className="w-[70px] min-w-[70px] pr-2 text-right"> Position </div>
            <GenericTwoButtonOption firstOptionLabel="Bottom" secondOptionLabel="Top" firstOptionFunction={changePositionBottom} secondOptionFunction={changePositionTop} />
        </div>
    )
}