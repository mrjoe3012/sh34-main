import Image from 'next/image';

import ScatterGraph from "@app/images/scatter-graph.svg"
import LineGraph from "@app/images/line-graph.svg"
import MultiGraph from "@app/images/multi-graph.svg"
import PieChart from "@app/images/pie-chart.svg"
import TrashIcon from "@app/images/trash-icon.svg"
import UpArrow from "@app/images/up-arrow.svg"
import DownArrow from "@app/images/down-arrow.svg"
import BarGraph from "@app/images/bar-graph.svg"
import EditIcon from "@app/images/edit-icon.svg"
import Link from 'next/link';
import Eye from "@app/images/eye.png"
import { PlotData } from '@app/modules/db';
import { WithId } from 'mongodb';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

import { TemplateData } from "@app/modules/db";
import { Dispatch, SetStateAction } from 'react';

interface PlotElementProps {
  plot: WithId<PlotData>;
  plots: WithId<PlotData>[]
  setPlots: Dispatch<SetStateAction<WithId<PlotData>[]>>;
}

export const PlotElement = (props: PlotElementProps) => {
  const initialPlotlyJSON = {
    data: [], // Assuming data is an array.
    layout: {}, // Assuming layout is an object.
  };

  const plot = props.plot;
  const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });
  const [displayPreview, setDisplayPreview] = useState(false);
  const [plotlyJSON, setPlotlyJSON] = useState(initialPlotlyJSON);

  let Images;
  if (plot.config_file.traces.length === 1) {
    switch(plot.config_file.traces[0].plotType) {
      case 'Bar':
        Images = BarGraph;
        break;
      case 'Pie':
        Images = PieChart;
        break;
      case 'Line':
        Images = LineGraph;
        break;
      case 'Scatter':
          Images = ScatterGraph;
          break;
      default:
        Images = BarGraph;
    }
  } else {
      Images = MultiGraph;
    }
  useEffect(()=>{
    fetch('/api/get-plot-json', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.plot.config_file),
  })
  .then(response => response.json())
  .then(plotlyJSONResponse => {
      setPlotlyJSON(plotlyJSONResponse);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  },[])

  const handlePreviewClicked = () => {
    setDisplayPreview(!displayPreview)
  }

  const handlePlotUpClick = () => {
    let newPlots = [...props.plots]
    let currentOrder = props.plot.order

    if (currentOrder==1) {
      // Can't move up a plot that is at the very start
      console.log("Cannot move this plot upwards.")
      return
    }

    let currentPlot = newPlots.find(el => el.order === currentOrder)
    let plotBefore = newPlots.find(el => el.order == currentOrder-1)

    if (currentPlot) {
      currentPlot.order -= 1;
    }
    if (plotBefore) {
      plotBefore.order += 1;
    }

    props.setPlots(newPlots)

  }

  const handlePlotDownClick = () => {
    let newPlots = [...props.plots]
    let currentOrder = props.plot.order

    if (currentOrder==props.plots.length) {
      // Can't move down a plot that is at the very end
      console.log("Cannot move this plot downwards.")
      return
    }

    let currentPlot = newPlots.find(el => el.order === currentOrder)
    let plotAfter = newPlots.find(el => el.order == currentOrder+1)

    if (currentPlot) {
      currentPlot.order += 1;
    }
    if (plotAfter) {
      plotAfter.order -= 1;
    }

    props.setPlots(newPlots)

  }

  return(
      <div className='text-black ' >

        {/* The plot box div */}
        <div className='flex drop-shadow-lg'>

                    {/* The movement control and delete div */}
          <div className='flex flex-col justify-center items-center '>
              <button><Image onClick={handlePlotUpClick} src={UpArrow} alt='UpArrow' className='w-10 h-10'/></button>
              <button><Image onClick={handlePlotDownClick} src={DownArrow} alt='DownArrow' className='w-10 h-10'/></button>
          </div>

          <div className={`flex justify-between items-center w-[750px] h-[100px] border-gray-400 bg-[#edeef2] p-3 rounded-lg border-4 px-4`}>
              <div className='flex gap-x-5 items-center'>
                <p className='text-3xl basis-[10%]'> {plot.order.toString() + "."} </p>
                <Image src={Images} alt='Graph' className='w-10 h-10 basis-[15%]'/>
              </div>
              <h1 className='text-2xl h-fit font-medium basis-[50%] truncate'> {plot.config_file.labellingOptions.title.plotTitle} </h1>
              <div className='flex gap-x-10'>
                <button onClick={handlePreviewClicked}><Image src={Eye} alt='Preview' className='w-8 h-8' style={{ opacity: !displayPreview ? '0.5' : '1' }}/></button>
                <Link className='w-8 h-8' href={`/graph-editor/${plot._id}`}>
                  <Image src={EditIcon} alt="EditIcon" className='w-8 h-8'/>
                </Link>
                <Image src={TrashIcon} alt='TrashIcon' className='w-8 h-8'/>
              </div>
          </div>
        </div>

        {displayPreview && <div className='h-10 bg-gray-400 w-1 ml-auto mr-auto'></div>}
        <div className={`${displayPreview ? 'border-4 border-gray-400 rounded-lg' : '' }`}>

                {displayPreview &&
                  <Plot
                  data={plotlyJSON.data}
                  layout={plotlyJSON.layout}
                  style={{ transform: 'scale(0.85)' }}
                  />
                }
          </div>
      </div>
    )
};