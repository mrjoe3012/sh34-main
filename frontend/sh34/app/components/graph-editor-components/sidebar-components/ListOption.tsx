
interface OptionsListOptionProps {
    optionName: string;
    pageToSwitchTo: JSX.Element;
    switchPageFunc: (someComponent: JSX.Element) => void;
}

export const ListOption = (props: OptionsListOptionProps) => {
    return (
        <div>
            <button className='p-2 pl-10 text-xl' onClick={() => props.switchPageFunc(props.pageToSwitchTo)}> {props.optionName} </button>
        </div>
    );
};