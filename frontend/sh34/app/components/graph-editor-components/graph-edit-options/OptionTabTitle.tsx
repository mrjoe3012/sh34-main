interface OptionTabTitleProps {
    titleName: string;
}

export const OptionTabTitle = (props: OptionTabTitleProps) => {
    return (
        <div className="flex items-center mb-5 gap-x-1">
            <div className="text-xl"> {props.titleName} </div>
            <div className="flex-grow bg-[#DCDCDC] w-1 h-1 rounded-xl"></div>
        </div>
    )
}