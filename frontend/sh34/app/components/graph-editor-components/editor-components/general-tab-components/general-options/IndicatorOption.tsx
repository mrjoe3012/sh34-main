'use client';
import { useEffect, useState, ChangeEvent } from "react"
import { OptionComponentTitle } from "../../OptionComponentTitle";
import $ from 'jquery';

interface IndicatorOptionProps {
    setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
}

export const IndicatorOption = (props: IndicatorOptionProps) => {
    const [indicators, setIndicators] = useState([]);
    // dynamically load indicators
    useEffect(() => {
        fetch('/api/load-indicators')
            .then((response) => response.json())
            .then(data => {
                data = data.map((x : string, i: number) => {
                    return <option key={x} value={i}>{x}</option>;
                });
                setIndicators(data);
                props.setSelectedIndicator("0");
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);
    // handle changing of selected indicator
    const onIndicatorChange = (event: ChangeEvent<HTMLSelectElement>) => {
        props.setSelectedIndicator(event.target.value);
    };
    return (
        <div className="bg-[#e6e7eb] py-3 rounded-md">
            < OptionComponentTitle optionName="Plot Indicator" />
            <select className="w-[80%] ml-3 border-2 border-[#B3B3B3] rounded bg-[#DCDCDC]" name="plot-indicator" id="plot-indicator" onChange={onIndicatorChange}> 
                { indicators }
            </select>
        </div>
    );
}
