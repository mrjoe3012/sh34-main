import { MainButton } from "./SidebarMainButton";

export const SidebarMainButtons = () => {
    return (
        <div className='flex flex-col mt-auto mb-5'>
            <MainButton buttonName="Refresh Plot" buttonColour="#346DFF" imgSrc=""/>
            <MainButton buttonName="Finish" buttonColour="#346DFF" imgSrc=""/>
        </div>
    );
  };