"use client";

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

export default function TemplateEditor() {
    return (
      <div className="text-black min-w-[1200px] h-screen bg-white font-league">
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