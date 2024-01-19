'use client';
import { MainButton } from "./MainButton";
import $ from "jquery"
import configjson from "../../../config.json"

interface MainButtonListProps {
    selectedIndicator: string;
    selectedPlotType: string;
}

export const MainButtonList = (props: MainButtonListProps) => {
    const onRefreshClicked = async () => {
        // fetch the plot and display it
        fetch('/api/plotfromconfig', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(configjson),
          })
          .then(response => response.text())
          .then(data => {
            console.log('Success:');
            $('#plot-container').html(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    };

    return (
        <div className='flex flex-col mt-auto mb-5'>
            <MainButton buttonName="Preview JSON" buttonColour="bg-[#91a2a8]" imgSrc="" onClick={() => {}}/>
            <MainButton buttonName="Refresh" buttonColour="bg-[#21c912]" imgSrc="" onClick={onRefreshClicked}/>
            <MainButton buttonName="Finish" buttonColour="bg-[#346DFF]" imgSrc="" onClick={() => {}}/>
        </div>
    );
  };