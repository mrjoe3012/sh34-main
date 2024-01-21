'use client';
import { MainButton } from "./MainButton";
import $ from "jquery"
import { useEffect } from "react";
import { useConfig } from "@app/graph-editor/ConfigContext";

export const MainButtonList = () => {

    const {config} = useConfig()

    useEffect(()=>{

        // fetch the plot and display it
        fetch('/api/plotfromconfig', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(config),
        })
        .then(response => response.text())
        .then(data => {
          $('#plot-container').html(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },[config])

    // Currently just output the config to the console
    const viewConfigJSON = () => {
      console.log(config);
    } 

    return (
        <div className='flex flex-col mt-auto mb-5'>
            <MainButton buttonName="View Config" buttonColour="bg-[#91a2a8]" imgSrc="" onClick={viewConfigJSON}/>
            <MainButton buttonName="Finish" buttonColour="bg-[#346DFF]" imgSrc="" onClick={() => {}}/>
        </div>
    );
  };