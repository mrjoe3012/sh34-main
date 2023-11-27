import { SidebarMainButtons } from "./SidebarMainButtons";
import { SidebarOptionsList } from "./SidebarOptionsList";
import { SidebarReturn } from "./SidebarReturn";
import { SidebarTemplateHeader } from "./SidebarTemplateHeader";

export const Sidebar = () => {
    return (
        <div className='basis-[15%] flex flex-col bg-[#F6F8FC]'>

          <SidebarReturn /> 
          <hr></hr>
          <SidebarTemplateHeader />
          <hr></hr>
          <SidebarOptionsList />
          <SidebarMainButtons />

        </div>
    );
  };