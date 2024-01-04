"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Navbar } from '../../components/navbar';

export default function TemplateEditor() {
    return (
      <div className="text-black min-w-[1200px] h-screen">
        <div className='bg-white'>
          <Navbar />
          <Body />
        </div>
      </div>
    );
  }

function Header(){
    return(
      <h1 className="text-4xl text-RES_ORANGE font-bold">Template Editor</h1>
    );
}

function TemplateInfo() {
  return(
    <div className="flex text-2xl text-[#575757] font-semibold">
      <div className='mr-3'> ID </div>
      <div> | </div>
      <div className='ml-3'> Template Name </div>
    </div>
  );
}

function TemplatePageSwitcher() {
  return(
    <div className='flex flex-row bg-[#EAEAEA] w-[350px] h-[60px] items-center justify-center rounded-xl'>
      <div className='mr-2 text-2xl w-[45%]  text-center'> Info </div>
      <div className='bg-[#D5D5D5] w-1 h-[80%] self-center'></div>
      <div className='ml-2 text-2xl w-[50%] text-center'>Structure</div>
    </div>
  );
}

function TemplateOptionButton() {
  return (
    <div className={`text-center text-xl font-medium text-white h-[60px] w-[150px] bg-blue-500 rounded-xl flex justify-center items-center border-[2px] border-slate-700`}>
      <p> Save </p>
    </div>
  );
}
  
function Body() {

  const [bodyContent,setBodyContent] = useState(<div> N/A </div>);

  // Calling the Sidebar Component passes as a prop a function to change what the BodyContent component displays, Sidebar then passes it to its children, and so on.
  // Passing down the switchBodyContent function as a prop through many children components who don't use the prop is called "Prop-Drilling", not great.
  return (
    <div className="bg-white overflow-auto mx-10">

      <div className='flex justify-between w-full'>
        <Header />
        <TemplateInfo />
      </div>

      <div className='my-10 mx-10 flex justify-between'>
        <TemplatePageSwitcher />
        <div className='flex gap-3'> 
          <TemplateOptionButton />
          <TemplateOptionButton />
        </div>
      </div>

    </div>
  );
}