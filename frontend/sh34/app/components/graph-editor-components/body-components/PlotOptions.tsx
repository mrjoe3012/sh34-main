import React, {useContext} from "react";

interface PlotOptionsProps {
    pageSelected: JSX.Element;
}

const PlotTypeContext = React.createContext(null)

export const PlotOptions = (props: PlotOptionsProps) => {
    return(
        <div className='basis-[20%] bg-[#F6F8FC] px-2 py-4 flex overflow-auto border-r-2 min-w-[280px]'>
            {props.pageSelected}
        </div>
    )
}