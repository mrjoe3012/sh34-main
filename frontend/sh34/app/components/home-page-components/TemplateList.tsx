import { TemplateListHeader } from "./TemplateListHeader";
import { AssetElement } from "./AssetElement";
import { loadTemplates } from "@app/modules/db";

export const TemplateList = async () => {
    const templates = await loadTemplates({});
    return(
        <div className='my-20'>
          <div className='flex my-3'>
              <h1 className='w-fit mr-5 text-2xl text-RES_ORANGE font-bold'>Templates</h1>
              <hr className='flex-grow h-1 m-auto'></hr>
          </div>
              <TemplateListHeader />
              {templates.map((template, idx) => {
                return <AssetElement key={idx} template={template} />
              })}
        </div>
      );
}