import { TemplateListHeader } from "./TemplateListHeader";
import { AssetElement } from "./AssetElement";

export const TemplateList = () => {
    return(
        <div className='my-20'>
          <div className='flex my-3'>
              <h1 className='w-fit mr-5 text-2xl text-RES_ORANGE font-bold'>Templates</h1>
              <hr className='flex-grow h-1 m-auto'></hr>
          </div>
              <TemplateListHeader />
              <AssetElement />
              <AssetElement />
              <AssetElement />
              <AssetElement />
        </div>
      );
}