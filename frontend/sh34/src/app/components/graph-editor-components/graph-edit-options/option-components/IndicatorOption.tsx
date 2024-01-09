'use client';
import { useEffect, useState } from "react"
import { OptionComponentTitle } from "./OptionComponentTitle";

export const IndicatorOption = () => {
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
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div>
            < OptionComponentTitle optionName="Plot Indicator" />
            <select className="w-[80%] ml-3" name="plot-indicator" id="plot-indicator"> 
                { indicators }
            </select>
        </div>
    );
}
