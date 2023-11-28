import { SidebarMainButtons } from "./SidebarMainButtons";
import { SidebarOptionsList } from "./SidebarOptionsList";
import { SidebarReturn } from "./SidebarReturn";
import { SidebarTemplateHeader } from "./SidebarTemplateHeader";

interface SidebarProps {
  switchPageFunc: (someComponent: JSX.Element) => void;
}


export const Sidebar = (props: SidebarProps) => {
    return (
        <div className='basis-[15%] flex flex-col bg-white border-r-2'>
          <SidebarReturn /> 
          <hr></hr>
          <SidebarTemplateHeader />
          <hr></hr>
          <SidebarOptionsList switchPageFunc={props.switchPageFunc} />
          <SidebarMainButtons />
        </div>
    );
  };