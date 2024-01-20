"use client"
import { Navbar } from '@app/components/navbar';
import React from "react";
import { Body } from '@app/components/graph-editor-components/body-components/Body';
import { ConfigProvider } from '../ConfigContext';
  



export default function Home() {

  return (
    <ConfigProvider>
      <div className="text-black flex flex-col h-screen">
        <Navbar />
        <hr className='h-[1.5px] bg-[#D3D3D3]'></hr>
        <Body />
      </div>
    </ConfigProvider>

  );
} 
