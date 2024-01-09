'use client';
import { useEffect, useState } from "react"

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
        <div className="mb-10">
            <p className="text-xl">Plot Indicator</p>
            <select className="width: [80%]" name="plot-indicator" id="plot-indicator"> 
                { indicators }
            </select>
        </div>
    );
}
