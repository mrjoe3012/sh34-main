
interface OptionsListOptionProps {
    optionName: string;
}

export const ListOption = (props: OptionsListOptionProps) => {
    return (
    <div className='p-2 pl-10'> {props.optionName} </div>
    );
};