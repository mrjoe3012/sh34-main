
interface BodyContentProps {
    pageSelected: JSX.Element;
}

export const BodyContent = (props: BodyContentProps) => {
    return(
        <div className='basis-[85%] bg-[#F6F8FC] p-16 flex justify-center overflow-auto'>
            {props.pageSelected}
        </div>
    )
}