import { useEffect, useState, ChangeEvent, useContext } from "react"

interface GenericIndicatorOptionProps {
    labelName: string,
    displayLabel: boolean,
    contentOnRender: string,
    plotFunction: (inputValue: string) => void;
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

    
    const handleIndicatorChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        props.plotFunction(newValue); // Call the plotFunction with the new indicator value
    };

    return (
        <div className="flex items-center gap-x-1 ml-3 mr-3">
            {props.displayLabel && <div className="w-[70px] min-w-[70px] text-right pr-2"> {props.labelName} </div>}
            <select
                value={props.contentOnRender.split('/').pop()}
                className="w-full px-4 font-medium placeholder-[#ACACAC] h-[35px] bg-[#DCDCDC] rounded-lg flex items-center border-2 border-[#B3B3B3] focus:ring-2 focus:ring-RES_ORANGE focus:outline-none focus:border-none"
                name="plot-indicator"
                id="plot-indicator"
                onChange={handleIndicatorChange} // Add onChange event here
            >
                {indicators}
            </select>
        </div>
    );
}
