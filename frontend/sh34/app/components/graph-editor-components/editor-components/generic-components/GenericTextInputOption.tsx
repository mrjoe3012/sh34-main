
interface GenericTextInputOptionProps {
    placeholder: string,
    labelName: string,
    displayLabel: boolean,
    width: string,
    textPos: string,
    plotFunction: (inputValue: string) => void,
    contentOnRender: string,
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
        <div className="flex items-center gap-x-1 ml-3 mr-3">
            <div className="w-[70px] min-w-[70px] text-right pr-2">{props.labelName}</div>
            <input defaultValue={props.contentOnRender} onBlur={handleBlur} onKeyDown={handleKeyDown} type="text" placeholder={props.placeholder} className={`${props.width} ${props.textPos} px-4 font-medium placeholder-[#ACACAC] h-[35px] bg-[#DCDCDC] rounded-lg flex items-center  border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none`} />
        </div>
    )
}