import { PlotElement } from "./PlotElement"
import { PlotSearchInput } from "./PlotSearchInput";
import { NewPlotButton } from "./NewPlotButton";
import { useTemplatePageContext } from "@app/template-page/TemplatePageContext";
import ReactLoading from "react-loading"

export const StructurePage = () => {
    const {plots, setPlots} = useTemplatePageContext();

    const sortedPlots = [...plots].sort((a, b) => a.order - b.order);

    return (

        <div className="mb-10">

            <div className="mb-5 flex justify-between">
                <NewPlotButton />
                <PlotSearchInput />
            </div>

            <div className='flex flex-col gap-y-8 items-center'>

            {sortedPlots.length ==0 ? (
                    // Display Loading text if plots are not initialized.
                    <ReactLoading type="spin" color="black" height={30} width={30}/>
                ) : (
                    // Render PlotElement components if plots are initialized.
                    sortedPlots.map((plot) => {
                        return (
                            <PlotElement
                                key={plot._id}
                                plot={plot}
                                plots={plots}
                                setPlots={setPlots}
                            />
                        )
                    })
                )}
            </div>
        </div>
      )


  };