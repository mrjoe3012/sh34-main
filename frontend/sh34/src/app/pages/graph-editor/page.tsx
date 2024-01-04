"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Navbar } from '../../components/navbar';
import { Sidebar } from '../../components/graph-editor-components/Sidebar';
import { BodyContent } from '@/app/components/graph-editor-components/BodyContent';

export default function Home() {
    return (
      <div className="text-black flex flex-col h-screen">
        <Navbar />
        <hr className='h-[1.5px]'></hr>
        <Body />
      </div>
    );
  } 
  
function Body() {

  const [bodyContent,setBodyContent] = useState(<div> N/A </div>);

  // Calling the Sidebar Component passes as a prop a function to change what the BodyContent component displays, Sidebar then passes it to its children, and so on.
  // Passing down the switchBodyContent function as a prop through many children components who don't use the prop is called "Prop-Drilling", not great.
  return (
    <div className="bg-white flex flex-row flex-1 overflow-auto">
        <Sidebar switchPageFunc={setBodyContent}/>
        <BodyContent pageSelected={bodyContent} />
    </div>
  );
}