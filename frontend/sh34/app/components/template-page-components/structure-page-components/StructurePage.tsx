import { PlotElement } from "./PlotElement"
import { NewPlotButton } from "./NewPlotButton";
import { useTemplatePageContext } from "@app/template-page/TemplatePageContext";

export const StructurePage = () => {
    const {plots, setPlots} = useTemplatePageContext();

    const sortedPlots = [...plots].sort((a, b) => a.order - b.order);

    return (

        <div className="mb-10">

            <div className="mb-5 flex justify-between">
                <NewPlotButton />
            </div>

            <div className='flex flex-col gap-y-8 items-center'>
                {sortedPlots.map((plot) =>{
                    return (<PlotElement
                        key={plot._id}
                        plot={plot}
                        plots={plots}
                        setPlots={setPlots}
                    />)
                })}
            </div>
        </div>
      )


  };