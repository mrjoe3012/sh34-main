'use client';

import { PageTitle } from '@app/components/template-page-components/general-components/PageTitle';
import { TemplateInfo } from '@app/components/template-page-components/general-components/TemplateInfo';
import { TemplatePageSwitcher } from '@app/components/template-page-components/general-components/TemplatePageSwitcher';
import { TemplateSaveButton } from '@app/components/template-page-components/general-components/TemplateSaveButton';
import { TemplateExportButton } from '@app/components/template-page-components/general-components/TemplateExportButton';
import { StructurePage } from '@app/components/template-page-components/structure-page-components/StructurePage';
import { useState } from 'react';
import { WithId } from 'mongodb';
import { TemplateData, PlotData } from '@app/modules/db';

interface BodyProps {
  template: WithId<TemplateData>;
  plots: WithId<PlotData>[];
};

export function Body(props: BodyProps) {

  const [bodyContent,setBodyContent] = useState(<StructurePage plots={props.plots} />);

  return (
    <div className="overflow-auto mx-10">
      <div className='flex justify-between w-full'>
        <PageTitle />
        <TemplateInfo />
      </div>

      <div className='mx-10'> 

        <div className='mt-10 mb-5 flex justify-between'>
          <TemplatePageSwitcher switchTabFunction={setBodyContent} plots={props.plots} template={props.template}/>
          <div className='flex gap-3'> 
            <TemplateSaveButton />
            <TemplateExportButton />
          </div>
        </div>
        <hr className='h-[10px] mb-3'></hr>
        <div className='mx-4'>
          {bodyContent}
        </div>

      </div>
    </div>
  );
}
