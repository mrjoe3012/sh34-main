import { PlotElement } from "./PlotElement"
import { NewPlotButton } from "./NewPlotButton";
import { useTemplatePageContext } from "@app/template-page/TemplatePageContext";

export const StructurePage = () => {
    const {plots} = useTemplatePageContext();
    return (

        <div className="mb-10">

            <div className="mb-5 flex justify-between">
                <NewPlotButton />
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