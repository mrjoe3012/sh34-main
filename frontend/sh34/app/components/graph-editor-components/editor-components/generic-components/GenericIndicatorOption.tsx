import { useEffect, useState, ChangeEvent, useContext } from "react"
import { PlotOptionsContext } from "@app/graph-editor/PlotOptionsContext";

interface GenericIndicatorOptionProps {
    labelName: string,
    displayLabel: boolean,
    contentOnRender: string | undefined,
}


export const GenericIndicatorOption = (props : GenericIndicatorOptionProps) => {
    const [indicators, setIndicators] = useState([]);

    // dynamically load indicators
    useEffect(() => {
        fetch('/api/load-indicators')
            .then((response) => response.json())
            .then(data => {
                const options = data.map((x : string, i: number) => {
                    return <option key={i} value={x}>{x}</option>;
                });
                setIndicators(options);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    console.log(indicators)

    return (
        <div className="flex items-center gap-x-1 ml-3 mr-3">
            {props.displayLabel && <div className="w-[70px] min-w-[70px] text-right pr-2"> {props.labelName} </div>}
            <select value={props.contentOnRender} className="w-[80%] ml-3 border-2 border-[#B3B3B3] rounded bg-[#DCDCDC]" name="plot-indicator" id="plot-indicator" > 
                { indicators }
            </select>
        </div>
    );
}
