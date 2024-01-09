interface OptionComponentTitleProps {
    optionName: string;
}

export const OptionComponentTitle = (props: OptionComponentTitleProps) => {
    return (
        <div className="flex items-center gap-x-1">
            <div className="bg-[#DCDCDC] h-[3px] rounded-xl basis-[5%]"></div>
            <div className="text-lg "> {props.optionName} </div>
            <div className="flex-grow bg-[#DCDCDC] h-[3px] rounded-xl"></div>
        </div>
    )
}