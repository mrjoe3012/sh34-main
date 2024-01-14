interface GenericCheckboxOptionProps {
    labelName: string,
    displayLabel: boolean,
    plotFunction: (inputValue: string) => void,
}

export const GenericCheckboxOption = (props: GenericCheckboxOptionProps) => {
    return(
        <div>
            <input className="mr-2" type="checkbox" value={props.labelName} id={props.labelName}></input>
            {props.displayLabel && <label htmlFor={props.labelName}>{props.labelName}</label>}
        </div>
    )
}