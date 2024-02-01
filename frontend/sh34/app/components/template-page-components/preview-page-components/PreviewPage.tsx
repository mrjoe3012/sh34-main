
import { useEffect, useState } from "react"
import { useTemplatePageContext } from "@app/template-page/TemplatePageContext"
import Plot from "react-plotly.js"
import dynamic from 'next/dynamic';
import ReactLoading from "react-loading"


export const PreviewPage = () => {

    const {plots} = useTemplatePageContext();
    const [plotConfigs, setPlotConfigs] = useState([]);

    useEffect(() => {

        const configFilesArray = plots.map(item => item.config_file);
        fetch('/api/load-plot-previews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(configFilesArray),
        })
        .then(response => response.json())
        .then(jsonList => {
            const configs = jsonList.map((jsonStr: string) => JSON.parse(jsonStr));
            setPlotConfigs(configs);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    }, []); // Empty dependency array for the effect to run once after the initial render

    return (
        <div className="flex flex-col justify-content items-center">
            {plotConfigs.map((config, index) => (
                <>
                <PlotPreview key={index} plotConfig={config} index={index} />
                <hr className="w-[75%]"></hr>
                </>
            ))}
        </div>
    );


}

const PlotPreview = ({ plotConfig, index }: { plotConfig: any, index: number }) => {
    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });
    const borderColor = plotConfig.layout.paper_bgcolor;

    // Function to handle plot initialization
    const handlePlotInitialized = () => {
        setIsLoading(false); // Set loading to false when the plot is initialized
    };

    return (
        <div className="flex flex-row gap-x-3 my-4">
            <div className="text-4xl pt-3 font-semibold">{index+1}</div>
            <div className={`p-3 rounded-lg border-[8px] border-gray-400 my-2`} style={{ backgroundColor: borderColor }}>
                {isLoading && <ReactLoading type="spin" color="black" height={30} width={30} />} {/* Show loading message */}
                <Plot
                    data={plotConfig.data}
                    layout={plotConfig.layout}
                    onInitialized={handlePlotInitialized}
                    style={{ display: isLoading ? 'none' : 'block' }} // Hide the plot until it's loaded
                />
            </div>
        </div>
    );
};
