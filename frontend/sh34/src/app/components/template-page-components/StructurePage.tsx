import { PlotElement } from "./PlotElement"


export const StructurePage = () => {
    // Arbitrary number for now. When integrated wtih backend. Find number of plots for this template.
    const numPlots = 10;   

    return (

        <div className="">

            <div className="mb-5 flex justify-between">
                <div className={`text-center text-xl font-medium text-white h-[60px] w-[170px] bg-[#44C125] rounded-xl flex justify-center items-center border-[2px] border-slate-700`}>
                    <p> New Plot </p>
                </div>
                <div className={`text-center text-xl font-medium text-[#8E8E8E] h-[60px] w-[200px] bg-[#EAEAEA] rounded-xl flex justify-center items-center border-[2px] `}>
                    <p> Look for a Plot </p>
                </div>
            </div>

            <div className='flex flex-col gap-y-5 items-center'>
                {[...Array(numPlots)].map((e, i) => <PlotElement key={i} />)}
            </div>

        </div>
      )


  };