'use client';
import { MainButton } from "./MainButton";
import $ from "jquery"

interface MainButtonListProps {
    selectedIndicator: string;
    selectedPlotType: string;
}

export const MainButtonList = (props: MainButtonListProps) => {
    const onRefreshClicked = async () => {
        // fetch the plot and display it
        try {
            const response = await fetch('/api/generate-plot?' + 'indicator=' + props.selectedIndicator + '&graph_type=' + props.selectedPlotType);
            const result = await response.text();
            $('#plot-container').html(result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='flex flex-col mt-auto mb-5'>
            <MainButton buttonName="Preview JSON" buttonColour="bg-[#91a2a8]" imgSrc="" onClick={() => {}}/>
            <MainButton buttonName="Refresh" buttonColour="bg-[#21c912]" imgSrc="" onClick={onRefreshClicked}/>
            <MainButton buttonName="Finish" buttonColour="bg-[#346DFF]" imgSrc="" onClick={() => {}}/>
        </div>
    );
  };