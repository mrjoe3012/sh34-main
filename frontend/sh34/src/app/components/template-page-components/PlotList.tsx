import { PlotElement } from "./PlotElement"

export const StructurePage = () => {
    // Arbitrary number for now. When integrated wtih backend. Find number of plots for this template.
    const numPlots = 10;   

    return (
        <div className='flex flex-col gap-y-5'>
            {[...Array(numPlots)].map((e, i) => <PlotElement key={i} />)}
        </div>
      )


  };