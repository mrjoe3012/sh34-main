
interface PlotOptionsProps {
    pageSelected: JSX.Element;
}

export const PlotOptions = (props: PlotOptionsProps) => {
    return(
        <div className='basis-[18%] bg-[#F6F8FC] p-16 flex justify-center overflow-auto'>
            {props.pageSelected}
        </div>
    )
}