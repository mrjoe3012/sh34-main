  "use client"
  import { Navbar } from '@app/components/navbar';
  import React from "react";
  import { Body } from '@app/components/graph-editor-components/body-components/Body';
  import { useState, useEffect } from 'react';

  import { Config } from '../configjsoninterface';

  // Define the Type that the Config Context will be
  export interface ConfigContextType {
    config: Config | null;
    setConfig: React.Dispatch<React.SetStateAction<Config | null>>;
  }

  // Create the ConfigContext
  export const ConfigContext = React.createContext<ConfigContextType>({
    config: null,
    setConfig: () => {},
  });

  export default function Home() {

    // Deal with loading the configjson into the context so all children of the graph editor page can use it
    const [config, setConfig] = useState<Config | null>(null);

    useEffect(()=> {
      // Currently importing configjson locally. Soon switch to importing the configjson for the plot loaded
      import("../../config.json")
        .then((importedConfig: { default: Config }) => {
          setConfig(importedConfig.default);
        })
        .catch((error)=> console.error("Failed to locally import config"))
    },[])

    

    return (
      <ConfigContext.Provider value={{config,setConfig}}>
        <div className="text-black flex flex-col h-screen">
          <Navbar />
          <hr className='h-[1.5px] bg-[#D3D3D3]'></hr>
          {config ? <Body /> : <div>Loading</div>}
        </div>
      </ConfigContext.Provider>

    );
  } 
