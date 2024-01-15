interface OptionComponentTitleProps {
    optionName: string;
}

export const OptionComponentTitle = (props: OptionComponentTitleProps) => {
    return (
        <div className="flex items-center gap-x-1 mb-1">
            <div className="bg-[#d6d6d6] h-[2px] rounded-xl basis-[5%]"></div>
            <div className="text-md text-[#191a36]"> {props.optionName} </div>
            <div className="flex-grow bg-[#d6d6d6] h-[2px] rounded-xl"></div>
        </div>
    )
}