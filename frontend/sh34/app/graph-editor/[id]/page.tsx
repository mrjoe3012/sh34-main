  "use client"
  import { Navbar } from '@app/components/navbar';
  import React from "react";
  import { PlotData, loadPlots, loadTemplateFromPlot } from '@app/modules/db';
  import { InvalidIdParam } from '@app/modules/InvalidIdParam';
  import { WithId } from 'mongodb';
  import { ErrorComponent } from '@app/components/ErrorComponent';
  import { Body } from '@app/components/graph-editor-components/body-components/Body';
  import { useState, useEffect } from 'react';

  import { Config } from '../configjsoninterface';

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

  // Define the Type that the Config Context will be
  interface ConfigContextType {
    config: Config | null;
    setConfig: React.Dispatch<React.SetStateAction<Config | null>>;
  }

  // Create the ConfigContext
  const ConfigContext = React.createContext<ConfigContextType>({
    config: null,
    setConfig: () => {},
  });

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

    // Deal with loading the configjson into the context so all children of the graph editor page can use it
    const [config, setConfig] = useState<Config | null>(null);

    useEffect(()=> {
      // Currently importing configjson locally. Soon switch to importing the configjson for the plot loaded
      import("../../config.json")
        .then((importedConfig: { default: Config }) => {
          setConfig(importedConfig.default);
        })
        .catch((error)=> console.error("Failed to locally import config"))
    })

    return (
      <ConfigContext.Provider value={{config,setConfig}}>
        <div className="text-black flex flex-col h-screen">
          <Navbar />
          <hr className='h-[1.5px] bg-[#D3D3D3]'></hr>
          <Body plot={plot} templateId={template._id.toString()} />
        </div>
      </ConfigContext.Provider>

    );
  } 
