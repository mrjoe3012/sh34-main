import { useEffect, useState } from "react"
import $ from "jquery"
import { useTemplatePageContext } from "@app/template-page/TemplatePageContext"
import Plot from "react-plotly.js"


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
                <PlotPreview key={index} plotConfig={config} />
            ))}
        </div>
    );


}

const PlotPreview = ({ plotConfig }: { plotConfig: any }) => { // typescript workaround
    return (
        <div className="rounded-lg border-4 border-gray-400 bg-[#edeef2] my-2">
            <Plot data={plotConfig.data} layout={plotConfig.layout} />
        </div>
    );
};