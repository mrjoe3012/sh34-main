
import { useEffect, useState } from "react"
import { useTemplatePageContext } from "@app/template-page/TemplatePageContext"
import Plot from "react-plotly.js"
import dynamic from 'next/dynamic';
import ReactLoading from "react-loading"


export const PreviewPage = () => {

    const {plots} = useTemplatePageContext();
    const [plotConfigs, setPlotConfigs] = useState([]);
    const [loading, setLoading] = useState(true);

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


    const handlePlotLoad = () => {
        setLoading(false);
        console.log("YIPPPEEEEE ")
        console.log(loading)
    }

    return (
        <div className="flex flex-col justify-content items-center">
            {loading && <ReactLoading type="spin" color="black" height={30} width={30} />}
            {plotConfigs.map((config, index) => (
                <PlotPreview key={index} plotConfig={config} onPlotLoad={handlePlotLoad} />
            ))}
        </div>
    );


}

const PlotPreview = ({ plotConfig, onPlotLoad }: { plotConfig: any, onPlotLoad: ()=>void }) => { // typescript workaround

    const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

    return (
        <div className="flex flex-row gap-x-3 pb-5">
            <div className="self-center text-4xl">1</div>
            <div className="p-3 rounded-lg border-[5px] border-gray-400 my-2">
                <Plot data={plotConfig.data} layout={plotConfig.layout} onInitialized={onPlotLoad}/>
            </div>
        </div>

    );
};