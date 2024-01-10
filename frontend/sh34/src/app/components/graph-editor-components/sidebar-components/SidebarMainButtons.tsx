import { MainButton } from "./SidebarMainButton";

interface SidebarMainButtonsProps {
    selectedIndicator: string;
}

export const SidebarMainButtons = (props: SidebarMainButtonsProps) => {
    const onRefreshClicked = () => {
        // fetch the plot and display it
    };

    return (
        <div className='flex flex-col mt-auto mb-5'>
            <MainButton buttonName="Preview JSON" buttonColour="bg-[#91a2a8]" imgSrc="" onClick={() => {}}/>
            <MainButton buttonName="Refresh" buttonColour="bg-[#21c912]" imgSrc="" onClick={onRefreshClicked}/>
            <MainButton buttonName="Finish" buttonColour="bg-[#346DFF]" imgSrc="" onClick={() => {}}/>
        </div>
    );
  };