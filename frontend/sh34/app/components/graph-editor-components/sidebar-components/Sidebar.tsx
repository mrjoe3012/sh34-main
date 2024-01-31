import { MainButtonList } from "./MainButtonList";
import { TabList } from "./TabList";
import { ReturnButton } from "./ReturnButton";
import { PlotTitle } from "./PlotTitle";

interface SidebarProps {
  switchPageFunc: (someComponent: JSX.Element) => void;
}


export const Sidebar = (props: SidebarProps) => {
  // contains the currently selected graph indicator
  return (
      <div className='basis-[12%] lg:basis-[15%] flex flex-col bg-white border-r-2 min-w-[200px]'>
        <ReturnButton /> 
        <hr></hr>
        <PlotTitle />
        <hr></hr>
        <TabList switchPageFunc={props.switchPageFunc} />
        <MainButtonList />
      </div>
  );
};