interface GenericTextInputOptionProps {
    placeholder: string,
    labelName: string,
    displayLabel: boolean,
    plotFunction: (inputValue: string) => void,
}

export const GenericTextInputOption = (props : GenericTextInputOptionProps) => {

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        props.plotFunction(e.currentTarget.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") {
            props.plotFunction(e.currentTarget.value)
        }
    };

    return (
        <div className="flex items-center gap-x-1 ml-3 mr-3 ">
            <div className="w-[70px] min-w-[70px] ">{props.labelName}</div>
            <div>
                <input onBlur={handleBlur} onKeyDown={handleKeyDown} type="text" placeholder={props.placeholder} className="flex-grow font-medium placeholder-[#ACACAC] h-[35px] w-full bg-[#DCDCDC] rounded-lg flex items-center pl-4 border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none" />
            </div>
        </div>
    )
}