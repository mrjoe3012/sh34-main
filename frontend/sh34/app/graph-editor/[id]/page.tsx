import { Navbar } from '@app/components/navbar';
import React from "react";
import { Body } from '@app/components/graph-editor-components/body-components/Body';
import { ConfigProvider } from '../ConfigContext';
import { PlotData, loadPlots, loadTemplateFromPlot, loadTemplates } from '@app/modules/db';
import { WithId } from 'mongodb';
import { InvalidIdParam } from '@app/modules/InvalidIdParam';

export const dynamic = 'force-dynamic';

interface GraphEditorProps {
  params: {
    id: string;
  },
};

export default async function GraphEditorPage(props: GraphEditorProps) {
  return (
    <ConfigProvider id={Number.parseInt(props.params.id)}>
      <div className="text-black flex flex-col h-screen">
        <Navbar />
        <hr className='h-[1.5px] bg-[#D3D3D3]'></hr>
        <Body />
      </div>
    </ConfigProvider>
  );
} 
