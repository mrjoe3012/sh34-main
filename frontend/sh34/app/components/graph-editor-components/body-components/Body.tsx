'use client';
import { PlotOptionsContext } from "@app/graph-editor/PlotOptionsContext";
import { useState } from "react";
import { GeneralTab } from "../editor-components/general-tab-components/GeneralTab";
import { Sidebar } from "../sidebar-components/Sidebar";
import { PlotDisplay } from "./PlotDisplay";
import { PlotOptions } from "./PlotOptions";
import { WithId } from "mongodb";
import { PlotData } from "@app/modules/db";

export function Body() {

  const [plotOptionsContent, setPlotOptionsContent] = useState(<GeneralTab  />);

  const [plotType, setPlotType] = useState("Bar");

  // Calling the Sidebar Component passes as a prop a function to change what the BodyContent component displays, Sidebar then passes it to its children, and so on.
  // Passing down the switchBodyContent function as a prop through many children components who don't use the prop is called "Prop-Drilling", not great.

  // PlotTypeContext.Provider is using React's Context System to pass the "PlotTypeContext" context to its children component tree.
  return (
    <PlotOptionsContext.Provider value={{plotType}}>
      <div className="font-league bg-white flex flex-row flex-1 overflow-auto">
          <Sidebar switchPageFunc={setPlotOptionsContent} />
          <div className='flex flex-row flex-1 overflow-auto'>
            <PlotOptions pageSelected={plotOptionsContent} />
            <PlotDisplay />
          </div>
      </div>
    </PlotOptionsContext.Provider>

  );
}