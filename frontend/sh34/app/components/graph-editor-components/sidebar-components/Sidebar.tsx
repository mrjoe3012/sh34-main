import { SidebarMainButtons } from "./SidebarMainButtons";
import { SidebarOptionsList } from "./SidebarOptionsList";
import { SidebarReturn } from "./SidebarReturn";
import { SidebarTemplateHeader } from "./SidebarTemplateHeader";
import { SetStateAction, useState } from "react";

interface SidebarProps {
  switchPageFunc: (someComponent: JSX.Element) => void;
  setSelectedIndicator: React.Dispatch<SetStateAction<string>>;
  setSelectedPlotType: React.Dispatch<SetStateAction<string>>;
  selectedIndicator: string; 
  selectedPlotType: string;
}


export const Sidebar = (props: SidebarProps) => {
  // contains the currently selected graph indicator
  return (
      <div className='basis-[15%] flex flex-col bg-white border-r-2 min-w-[250px]'>
        <SidebarReturn /> 
        <hr></hr>
        <SidebarTemplateHeader />
        <hr></hr>
        <SidebarOptionsList setSelectedPlotType={props.setSelectedPlotType} switchPageFunc={props.switchPageFunc} setSelectedIndicator={props.setSelectedIndicator} />
        <SidebarMainButtons selectedPlotType={props.selectedPlotType} selectedIndicator={props.selectedIndicator} />
      </div>
  );
};