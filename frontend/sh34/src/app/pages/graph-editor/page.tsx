"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Navbar } from '../../components/navbar';
import { Sidebar } from '../../components/graph-editor-components/sidebar-components/Sidebar';
import { PlotOptions } from '@/app/components/graph-editor-components/body-components/PlotOptions';
import { PlotDisplay } from '@/app/components/graph-editor-components/body-components/PlotDisplay';
import { GeneralGraphOptions } from '@/app/components/graph-editor-components/graph-edit-options/general-tab-components/GeneralGraphOptions';

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

  const [plotOptionsContent,setPlotOptionsContent] = useState(<GeneralGraphOptions />);

  // Calling the Sidebar Component passes as a prop a function to change what the BodyContent component displays, Sidebar then passes it to its children, and so on.
  // Passing down the switchBodyContent function as a prop through many children components who don't use the prop is called "Prop-Drilling", not great.
  return (
    <div className="font-league bg-white flex flex-row flex-1 overflow-auto">
        <Sidebar switchPageFunc={setPlotOptionsContent}/>
        <div className='flex flex-row flex-1 overflow-auto'>
          <PlotOptions pageSelected={plotOptionsContent} />
          <PlotDisplay />
        </div>
    </div>
  );
}