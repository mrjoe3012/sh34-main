import { Navbar } from '@app/components/navbar';
import React from "react";
import { Body } from '@app/components/graph-editor-components/body-components/Body';
import { ConfigProvider } from '../ConfigContext';
import { PlotData, loadPlots, loadTemplateFromPlot, loadTemplates } from '@app/modules/db';
import { WithId } from 'mongodb';
import { InvalidIdParam } from '@app/modules/InvalidIdParam';

async function tryRetrievePlot(id: string): Promise<WithId<PlotData>> {
  const idInt = Number.parseInt(id);
  const filter = {
    '_id' : idInt
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
  },
};

export default async function GraphEditorPage(props: GraphEditorProps) {
  const plot = await tryRetrievePlot(props.params.id);
  const template = await loadTemplateFromPlot(plot);
  return (
    <ConfigProvider plot={plot} template={template}>
      <div className="text-black flex flex-col h-screen">
        <Navbar />
        <hr className='h-[1.5px] bg-[#D3D3D3]'></hr>
        <Body />
      </div>
    </ConfigProvider>
  );
} 
