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

            <div className='flex flex-col gap-y-5 items-center'>
                
                {/* <PlotElement backgroundColour="bg-[#7FC6A4]"  />
                <PlotElement backgroundColour="bg-[#56BBF5]"  />
                <PlotElement backgroundColour="bg-[#E76F51]"  />
                <PlotElement backgroundColour="bg-[#7FC6A4]"  />
                <PlotElement backgroundColour="bg-[#7FC6A4]"  />
                <PlotElement backgroundColour="bg-[#56BBF5]"  />
                <PlotElement backgroundColour="bg-[#E76F51]"  /> */}
                <PlotElement backgroundColour="border-[#7FC6A4]"  />
                <PlotElement backgroundColour="border-[#56BBF5]"  />
                <PlotElement backgroundColour="border-[#E76F51]"  />
                <PlotElement backgroundColour="border-[#7FC6A4]"  />
                <PlotElement backgroundColour="border-[#7FC6A4]"  />
                <PlotElement backgroundColour="border-[#E76F51]"  />
                <PlotElement backgroundColour="border-[#56BBF5]"  />

            </div>
        </div>
      )


  };