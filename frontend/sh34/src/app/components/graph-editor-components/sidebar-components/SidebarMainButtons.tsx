import { MainButton } from "./SidebarMainButton";

export const SidebarMainButtons = () => {
    return (
        <div className='flex flex-col mt-auto mb-5'>
            <MainButton buttonName="Preview JSON" buttonColour="bg-[#91a2a8]" imgSrc=""/>
            <MainButton buttonName="Refresh" buttonColour="bg-[#21c912]" imgSrc=""/>
            <MainButton buttonName="Finish" buttonColour="bg-[#346DFF]" imgSrc=""/>
        </div>
    );
  };