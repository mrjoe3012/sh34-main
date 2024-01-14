import Link from 'next/link';
import { useState } from 'react';
import { Navbar } from '@app/components/navbar';

import { StructurePage } from '@app/components/template-page-components/structure-page-components/StructurePage';
import { InfoPage } from '@app/components/template-page-components/info-page-components/InfoPage';

import { PageTitle } from '@app/components/template-page-components/general-components/PageTitle';
import { TemplateInfo } from '@app/components/template-page-components/general-components/TemplateInfo';
import { TemplatePageSwitcher } from '@app/components/template-page-components/general-components/TemplatePageSwitcher';
import { TemplateSaveButton } from '@app/components/template-page-components/general-components/TemplateSaveButton';
import { TemplateExportButton } from '@app/components/template-page-components/general-components/TemplateExportButton';
import { WithId } from 'mongodb';
import { TemplateData, loadTemplates } from '@app/modules/db';

interface TemplateEditorProps {
  params: {
    id: string;
  };
};

class InvalidIdParam extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidIdParam';
  }
}

async function tryRetrieveTemplate(id: string): Promise<WithId<TemplateData>> {
  const idInt = Number.parseInt(id);
  const filter = {
    '_id' : idInt
  };
  const templates = await loadTemplates(filter);
  if (templates.length ==  0) {
    throw new InvalidIdParam(`The ID param was invalid: ${id}`);
  }
  return templates[0];
}

export default async function TemplateEditor(props: TemplateEditorProps) {
  var template;
  try{
    // template = await tryRetrieveTemplate(props.params.id);
  } catch (error) {
    return {
      notFound: true,
    };
  }
  console.log(template.Name);
  return (
    <div className="text-black min-w-[1200px] h-screen bg-white">
      <div className='bg-white h-fit'>
        <Navbar />
        <Body />
      </div>
    </div>
  );
}


function Body() {

  const [bodyContent,setBodyContent] = useState(<StructurePage />);

  return (
    <div className="overflow-auto mx-10">
      <div className='flex justify-between w-full'>
        <PageTitle />
        <TemplateInfo />
      </div>

      <div className='mx-10'> 

        <div className='mt-10 mb-5 flex justify-between'>
          <TemplatePageSwitcher switchTabFunction={setBodyContent}/>
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