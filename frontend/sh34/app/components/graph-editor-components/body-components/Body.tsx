'use client';
import { PlotOptionsContext } from "@app/graph-editor/PlotOptionsContext";
import { useState } from "react";
import { GeneralTab } from "../editor-components/general-tab-components/GeneralTab";
import { Sidebar } from "../sidebar-components/Sidebar";
import { PlotDisplay } from "./PlotDisplay";
import { PlotOptions } from "./PlotOptions";
import { WithId } from "mongodb";
import { PlotData } from "@app/modules/db";

interface GraphEditorBodyProps {
  plot: WithId<PlotData>;
  templateId: string;
};

export function Body(props: GraphEditorBodyProps) {

  const plot = props.plot;
  const templateId = props.templateId;
  const [selectedIndicator, setSelectedIndicator] = useState("");
  const [selectedPlotType, setSelectedPlotType] = useState(plot.JSONFile["graph-type"]);
  const [plotOptionsContent, setPlotOptionsContent] = useState(<GeneralTab plot={plot} selectedIndicator={selectedIndicator} setSelectedPlotType={setSelectedPlotType} setSelectedIndicator={setSelectedIndicator} />);

  const [plotType, setPlotType] = useState(plot.JSONFile["graph-type"]);
  const [indicator, setIndicator] = useState("");

  // Calling the Sidebar Component passes as a prop a function to change what the BodyContent component displays, Sidebar then passes it to its children, and so on.
  // Passing down the switchBodyContent function as a prop through many children components who don't use the prop is called "Prop-Drilling", not great.

  // PlotTypeContext.Provider is using React's Context System to pass the "PlotTypeContext" context to its children component tree.
  return (
    <PlotOptionsContext.Provider value={{plotType, setPlotType, indicator, setIndicator, plot, templateId}}>
      <div className="font-league bg-white flex flex-row flex-1 overflow-auto">
          <Sidebar plot={plot} selectedPlotType={selectedPlotType} setSelectedPlotType={setSelectedPlotType} switchPageFunc={setPlotOptionsContent} selectedIndicator={selectedIndicator} setSelectedIndicator={setSelectedIndicator} />
          <div className='flex flex-row flex-1 overflow-auto'>
            <PlotOptions pageSelected={plotOptionsContent} />
            <PlotDisplay />
          </div>
      </div>
    </PlotOptionsContext.Provider>

  );
}