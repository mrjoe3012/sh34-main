"use client";

import Link from 'next/link';
import { Navbar } from '@app/components/navbar';
import { Sidebar } from '@app/components/graph-editor-components/sidebar-components/Sidebar';
import { PlotOptions } from '@app/components/graph-editor-components/body-components/PlotOptions';
import { PlotDisplay } from '@app/components/graph-editor-components/body-components/PlotDisplay';
import { GeneralTab } from '@app/components/graph-editor-components/editor-components/general-tab-components/GeneralTab';
import React, { useState } from "react";
import { PlotTypeContext } from './PlotTypeContext';

export default function Home() {
    return (
      <div className="text-black flex flex-col h-screen">
        <Navbar />
        <hr className='h-[1.5px] bg-[#D3D3D3]'></hr>
        <Body />
      </div>
    );
} 


function Body() {

  const [selectedIndicator, setSelectedIndicator] = useState("");
  const [selectedPlotType, setSelectedPlotType] = useState("");
  const [plotOptionsContent,setPlotOptionsContent] = useState(<GeneralTab setSelectedPlotType={setSelectedPlotType} setSelectedIndicator={setSelectedIndicator} />);

  const [plotType, setPlotType] = useState("");

  // Calling the Sidebar Component passes as a prop a function to change what the BodyContent component displays, Sidebar then passes it to its children, and so on.
  // Passing down the switchBodyContent function as a prop through many children components who don't use the prop is called "Prop-Drilling", not great.

  // PlotTypeContext.Provider is using React's Context System to pass the "PlotTypeContext" context to its children component tree.
  return (
    <PlotTypeContext.Provider value={{plotType, setPlotType}}>
      <div className="font-league bg-white flex flex-row flex-1 overflow-auto">
          <Sidebar selectedPlotType={selectedPlotType} setSelectedPlotType={setSelectedPlotType} switchPageFunc={setPlotOptionsContent} selectedIndicator={selectedIndicator} setSelectedIndicator={setSelectedIndicator} />
          <div className='flex flex-row flex-1 overflow-auto'>
            <PlotOptions pageSelected={plotOptionsContent} />
            <PlotDisplay />
          </div>
      </div>
    </PlotTypeContext.Provider>

  );
}