import { GenericTwoButtonOption } from "@app/components/graph-editor-components/editor-components/generic-components/GenericTwoButtonOption";
import { useConfig } from "@app/graph-editor/ConfigContext";


export const YAxisTickLabelPositionOption = () => {

    const { config, setConfig } = useConfig();
    
    const changePosition = (inputValue: string) => {
        // Ensure the necessary nested properties exist in the config object
        // Create a deep copy of config
        if (config === null) return;
        const newConfig = { ...config };

        // Update the specific value
        newConfig.labellingOptions.yAxis.tickLabels.tickPosition = inputValue.toLowerCase();

        // Use setConfig to update the context
        setConfig(newConfig);

        console.log("Toggled tick label position to " + inputValue.toLowerCase());
    };

    return(
        <div className="mx-3 flex gap-x-1 items-center">
            <div className="w-[70px] min-w-[70px] pr-2 text-right"> Position </div>
            <GenericTwoButtonOption firstOptionLabel="Left" secondOptionLabel="Right" firstOptionFunction={changePosition} secondOptionFunction={changePosition} />
        </div>
    )
}