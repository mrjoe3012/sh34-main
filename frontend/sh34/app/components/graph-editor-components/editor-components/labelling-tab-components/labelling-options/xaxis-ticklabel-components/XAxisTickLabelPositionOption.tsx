import { GenericTwoButtonOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTwoButtonOption";
import { useConfig } from "@app/graph-editor/ConfigContext";

export const XAxisTickLabelPositionOption = () => {

    const { config, setConfig } = useConfig();

    const changePositionBottom = (inputValue: string) => {
        // Enter logic here for toggling tick labels to the bottom

        if (config === null) return;
        const newConfig = { ...config };
        newConfig.labellingOptions.xAxis.tickLabels.tickPosition = inputValue.toLowerCase()
        setConfig(newConfig); // Update the config context

        console.log("Toggled tick label position to " + inputValue.toLowerCase());
    }

    const changePositionTop = (inputValue: string) => {
        // Enter logic here for toggling tick labels to the top
        if (config === null) return;
        const newConfig = { ...config };
        newConfig.labellingOptions.xAxis.tickLabels.tickPosition = inputValue.toLowerCase()
        setConfig(newConfig); // Update the config context

        console.log("Toggled tick label position to " +  inputValue.toLowerCase());
    }

    return(
        <div className="mx-3 flex gap-x-1 items-center">
            <div className="w-[70px] min-w-[70px] pr-2 text-right"> Position </div>
            <GenericTwoButtonOption firstOptionLabel="Bottom" secondOptionLabel="Top" firstOptionFunction={changePositionBottom} secondOptionFunction={changePositionTop} />
        </div>
    )
}