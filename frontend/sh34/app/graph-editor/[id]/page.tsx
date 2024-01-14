import { Navbar } from '@app/components/navbar';
import React from "react";
import { PlotData, loadPlots, loadTemplateFromPlot } from '@app/modules/db';
import { InvalidIdParam } from '@app/modules/InvalidIdParam';
import { WithId } from 'mongodb';
import { ErrorComponent } from '@app/components/ErrorComponent';
import { Body } from '@app/components/graph-editor-components/body-components/Body';

async function tryRetrievePlot(id: string): Promise<WithId<PlotData>> {
  const idInt = Number.parseInt(id);
  const filter = {
    '_id' : idInt,
  };
  const plots = await loadPlots(filter);
  if (plots.length == 0) {
    throw new InvalidIdParam(`The ID param was invalid: ${id}`);
  }
  return plots[0];
}

interface GraphEditorProps {
  params: {
    id: string;
  };
};

export default async function Home(props: GraphEditorProps) {
  const id = props.params.id;
  var plot;
  try {
    plot = await tryRetrievePlot(id);
  } catch (error) {
    console.error(error);
    const code = 404;
    return <ErrorComponent statusCode={code}/>
  }
  const template = await loadTemplateFromPlot(plot);
  return (
    <div className="text-black flex flex-col h-screen">
      <Navbar />
      <hr className='h-[1.5px] bg-[#D3D3D3]'></hr>
      <Body plot={plot} templateId={template._id.toString()} />
    </div>
  );
} 
