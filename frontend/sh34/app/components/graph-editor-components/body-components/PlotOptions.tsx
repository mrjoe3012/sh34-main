import React from "react";

interface PlotOptionsProps {
    pageSelected: JSX.Element;
}

export const PlotOptions = (props: PlotOptionsProps) => {
    return(
        <div className='xl:w-[450px] w-[350px] bg-[#F6F8FC] px-2 py-4 flex overflow-auto border-r-2 min-w-[200px] h-full z-10'>
            {props.pageSelected}
        </div>
    )
}