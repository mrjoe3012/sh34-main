
interface OptionsListOptionProps {
    optionName: string;
    switchPageFunc: (someComponent: JSX.Element) => void;
}

export const ListOption = (props: OptionsListOptionProps) => {
    return (
        <div>
            <button className='p-2 pl-10' onClick={() => props.switchPageFunc(<div>{props.optionName}</div>)}> {props.optionName} </button>
        </div>
    );
};