'use client';
import { useEffect, useState, ChangeEvent, useContext } from "react"
import { OptionComponentTitle } from "../../OptionComponentTitle";
import $ from 'jquery';
import { PlotData } from "@app/modules/db";
import { WithId } from "mongodb";
import { PlotOptionsContext } from "@app/graph-editor/PlotOptionsContext";

interface IndicatorOptionProps {
    selectedIndicator: string,
    setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
    plot: WithId<PlotData>;
}

export const IndicatorOption = (props: IndicatorOptionProps) => {
    const [indicators, setIndicators] = useState([]);
    const {indicator, setIndicator} = useContext(PlotOptionsContext);
    // dynamically load indicators
    useEffect(() => {
        fetch('/api/load-indicators')
            .then((response) => response.json())
            .then(data => {
                const options = data.map((x : string, i: number) => {
                    return <option key={x} value={i}>{x}</option>;
                });
                setIndicators(options);
                if (indicator.length == 0) {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i] == props.plot.JSONFile.indicator) {
                            props.setSelectedIndicator(i.toString());
                            setIndicator(i.toString());
                        }
                    }
                }
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);
    // handle changing of selected indicator
    const onIndicatorChange = (event: ChangeEvent<HTMLSelectElement>) => {
        props.setSelectedIndicator(event.target.value);
        setIndicator(event.target.value);
    };
    return (
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            < OptionComponentTitle optionName="Plot Indicator" />
            <select value={indicator} className="w-[80%] ml-3 border-2 border-[#B3B3B3] rounded bg-[#DCDCDC]" name="plot-indicator" id="plot-indicator" onChange={onIndicatorChange}> 
                { indicators }
            </select>
        </div>
    );
}
