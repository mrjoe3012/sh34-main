
interface PlotOptionsProps {
    pageSelected: JSX.Element;
}

export const PlotOptions = (props: PlotOptionsProps) => {
    return(
        <div className='basis-[85%] bg-[#F6F8FC] bg-red-500 bg-green-500 p-16 flex justify-center overflow-auto'>
            {props.pageSelected}
        </div>
    )
}