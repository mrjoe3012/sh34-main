import { PlotElement } from "./PlotElement"
import { PlotSearchInput } from "./PlotSearchInput";
import { NewPlotButton } from "./NewPlotButton";


export const StructurePage = () => {
    // Arbitrary number for now. When integrated wtih backend. Find number of plots for this template.
    const numPlots = 10;   

    return (

        <div className="">

            <div className="mb-5 flex justify-between">
                <NewPlotButton />
                <PlotSearchInput />
            </div>

            <div className='flex flex-col gap-y-8 items-center'>
                
                <PlotElement backgroundColour="border-[#7FC6A4] border-[7px]"  />
                <PlotElement backgroundColour="border-[#56BBF5] border-[7px]"  />
                <PlotElement backgroundColour="border-[#E76F51] border-[7px]"  />
                <PlotElement backgroundColour="border-[#7FC6A4] border-[7px]"  />
                <PlotElement backgroundColour="border-[#7FC6A4] border-[7px]"  />
                <PlotElement backgroundColour="border-[#E76F51] border-[7px]"  />
                <PlotElement backgroundColour="border-[#56BBF5] border-[7px]"  />

            </div>
        </div>
      )


  };