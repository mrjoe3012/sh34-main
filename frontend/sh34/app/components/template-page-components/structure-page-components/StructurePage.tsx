import { PlotElement } from "./PlotElement"
import { PlotSearchInput } from "./PlotSearchInput";
import { NewPlotButton } from "./NewPlotButton";
import { TemplateData, PlotData } from "@app/modules/db";
import { WithId } from "mongodb";

interface StructurePageProps {
    plots: WithId<PlotData>[];
};

export const StructurePage = (props: StructurePageProps) => {
    const plots = props.plots;
    const green = "#7FC6A4";
    const orange = "#7FC6A4";
    const blue = "#7FC6A4";
    const type2Colour: {[key: string]: string} = {
        'bar' : blue,
        'pie' : green,
        'line' : orange,
        'scatter' : orange
    };
    const makeStyle = (colour: string): string => {
        const style = `border-[${colour}] border-[7px]`;
        return style;
    };
    return (

        <div className="">

            <div className="mb-5 flex justify-between">
                <NewPlotButton />
                <PlotSearchInput />
            </div>

            <div className='flex flex-col gap-y-8 items-center'>
                {plots.map((plot, idx) =>{
                    return (<PlotElement
                        key={idx}
                        backgroundColour={makeStyle(type2Colour[plot.JSONFile["graph-type"]])}
                        plot={plot}
                    />)
                })}
            </div>
        </div>
      )


  };