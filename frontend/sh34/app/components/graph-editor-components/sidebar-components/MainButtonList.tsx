'use client';
import { MainButton } from "./MainButton";
import $ from "jquery"
import configjson from "../../../config.json"
import { useContext, useEffect } from "react";
import { ConfigContext } from "@app/graph-editor/[id]/page";

export const MainButtonList = () => {

    const {config} = useContext(ConfigContext)

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