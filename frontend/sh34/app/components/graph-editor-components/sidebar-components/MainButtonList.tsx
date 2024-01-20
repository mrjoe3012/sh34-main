'use client';
import { MainButton } from "./MainButton";
import $ from "jquery"
import { useEffect } from "react";
import { useConfig } from "@app/graph-editor/ConfigContext";

export const MainButtonList = () => {

    const {config} = useConfig()

    useEffect(()=>{

        console.log("here")
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
          console.log('Success:');
          $('#plot-container').html(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },[config])

    return (
        <div className='flex flex-col mt-auto mb-5'>
            <MainButton buttonName="Preview JSON" buttonColour="bg-[#91a2a8]" imgSrc="" onClick={() => {}}/>
            <MainButton buttonName="Finish" buttonColour="bg-[#346DFF]" imgSrc="" onClick={() => {}}/>
        </div>
    );
  };