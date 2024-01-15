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
                        plot={plot}
                    />)
                })}
            </div>
        </div>
      )


  };