'use client';
import { PlotOptionsContext } from "@app/graph-editor/PlotOptionsContext";
import { useEffect, useState } from "react";
import { GeneralTab } from "../editor-components/general-tab-components/GeneralTab";
import { Sidebar } from "../sidebar-components/Sidebar";
import { PlotDisplay } from "./PlotDisplay";
import { PlotOptions } from "./PlotOptions";
import { ClientHBManager } from "@app/modules/ClientHBManager";
import { usePathname } from "next/navigation";
import { KickoutPopup } from "@app/components/template-page-components/general-components/KickoutPopup";
import Cookies from 'js-cookie';

export function Body() {
  const pathName = usePathname();
  const lastKey = Cookies.get("key:"+pathName) !== undefined ? Cookies.get("key:"+pathName)!! : '';
  const [plotOptionsContent, setPlotOptionsContent] = useState(<GeneralTab  />);
  const [hb, setHb] = useState(new ClientHBManager(pathName, lastKey));
  const [kickout, setKickout] = useState(false);
  const [plotType, setPlotType] = useState("Bar");

  useEffect(() => {
    const heartbeat = async () => {
      if (!kickout) {
        const success = await hb.heartbeat();
        if (success) {
          Cookies.set("key:"+pathName, hb.getKey());
        }
        setKickout(!success);
      }
    };
    heartbeat();
    const intervalId = setInterval(heartbeat, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // Calling the Sidebar Component passes as a prop a function to change what the BodyContent component displays, Sidebar then passes it to its children, and so on.
  // Passing down the switchBodyContent function as a prop through many children components who don't use the prop is called "Prop-Drilling", not great.

  // PlotTypeContext.Provider is using React's Context System to pass the "PlotTypeContext" context to its children component tree.
  return (
    <PlotOptionsContext.Provider value={{plotType}}>
      {kickout && <KickoutPopup/>}
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