'use client';
import { PlotOptions } from "../../body-components/PlotOptions";
import { OptionComponentTitle } from "./OptionComponentTitle"
import { useState, useEffect } from "react";

interface PlotTypeOptionProps {
    setSelectedPlotType: React.Dispatch<React.SetStateAction<string>>;
}

export const PlotTypeOption = (props: PlotTypeOptionProps) => {

    // define allowed plot types and 
    // load them dynamically
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
    const [checked, setChecked] = useState([true, false, false]);
    // boolean array defining whether or not radios are checked

    // initialise selected plot type
    useEffect(() => {
        props.setSelectedPlotType("bar")
    }, []);

    const onRadioChanged = (plotOption: {id: string, name: string}) => {
        props.setSelectedPlotType(plotOption.id);
        let c = [...checked];
        for (let i = 0; i < plotTypes.length; i++) {
            c[i] = plotTypes[i].id == plotOption.id;
        }
        setChecked(c);
    };

    return(
    <div> 

        < OptionComponentTitle optionName="Plot Type" />

        <div className="ml-3">

            {plotTypes.map((plotOption, index) => {
                return (
                    <div key={index}>
                        <input checked={checked[index]} className="mr-2" type="radio" name={plotOption.id} id={"plot-type-option-" + plotOption.id} value={plotOption.id} onChange={() => {onRadioChanged(plotOption)}}/>
                        <label htmlFor={"plot-type-option-" + plotOption.id}>{plotOption.name}</label>
                    </div>
                );
            })}

        </div>
        
    </div>
    )
}