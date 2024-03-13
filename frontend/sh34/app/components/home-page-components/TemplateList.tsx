"use client";
import { TemplateListHeader } from "./TemplateListHeader";
import { AssetElement } from "./AssetElement";
import { useHomePageContext } from "@app/home/HomePageContext";
import ReactLoading from "react-loading"

export const TemplateList = () => {
  const {templates, setTemplates} = useHomePageContext();

  return(
    <div className='my-20 flex flex-col'>

      <div className='flex my-3'>
          <h1 className='w-fit mr-5 text-2xl text-RES_ORANGE font-bold'>Templates</h1>
          <hr className='flex-grow h-1 m-auto'></hr>
      </div>
          <TemplateListHeader />
          {templates.length ==0 ? (
                    // Display Loading text if plots are not initialized.

                    <div className="self-center mt-10"> <ReactLoading type="spin" color="black" height={30} width={30}/> </div>
                ) : (
                    // Render PlotElement components if plots are initialized.
                    templates.map((template, idx) => {
                        return (
                            <AssetElement
                              key={idx}
                              template={template}
                            />
                        )
                    })
                )}


    </div>
  );
}