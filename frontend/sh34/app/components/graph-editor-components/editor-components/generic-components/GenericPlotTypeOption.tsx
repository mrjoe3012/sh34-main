import { OptionComponentTitle } from "../OptionComponentTitle";

export const GenericPlotTypeOption = () => {

    const plotTypes = [
        {
            id: "bar",
            name: "Bar",
        },
        {
            id: "scatter",
            name: "Scatter",
        },
        {
            id: "line",
            name: "Line",
        }
    ];

    return(
        <div className="ml-3">

            {plotTypes.map((plotOption, index) => {
                return (
                    <div key={index}>
                        <input className="mr-2" type="radio" name={plotOption.id} id={"plot-type-option-" + plotOption.id} value={plotOption.id} />
                        <label className="select-none" htmlFor={"plot-type-option-" + plotOption.id}>{plotOption.name}</label>
                    </div>
                );
            })}

        </div>
    )

}