import { MainButtonList } from "./MainButtonList";
import { TabList } from "./TabList";
import { ReturnButton } from "./ReturnButton";
import { PlotTitle } from "./PlotTitle";
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
        <ReturnButton /> 
        <hr></hr>
        <PlotTitle />
        <hr></hr>
        <TabList setSelectedPlotType={props.setSelectedPlotType} switchPageFunc={props.switchPageFunc} setSelectedIndicator={props.setSelectedIndicator} />
        <MainButtonList selectedPlotType={props.selectedPlotType} selectedIndicator={props.selectedIndicator} />
      </div>
  );
};