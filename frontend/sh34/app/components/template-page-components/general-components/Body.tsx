'use client';

import { PageTitle } from '@app/components/template-page-components/general-components/PageTitle';
import { TemplateInfo } from '@app/components/template-page-components/general-components/TemplateInfo';
import { TemplatePageSwitcher } from '@app/components/template-page-components/general-components/TemplatePageSwitcher';
import { StructurePage } from '@app/components/template-page-components/structure-page-components/StructurePage';
import { useEffect, useState } from 'react';
import { ExportButton } from '@app/components/home-page-components/ExportButton';
import { useTemplatePageContext } from '@app/template-page/TemplatePageContext';
import { ClientHBManager } from '@app/modules/ClientHBManager';
import { usePathname } from 'next/navigation';
import { KickoutPopup } from './KickoutPopup';
import Cookies from 'js-cookie';

export function Body() {
  const pathName = usePathname();
  const lastKey = Cookies.get("key:"+pathName) !== undefined ? Cookies.get("key:"+pathName)!! : '';
  console.log("lastKey", lastKey);
  const [bodyContent,setBodyContent] = useState(<StructurePage/>);
  const {template} = useTemplatePageContext();
  const [kickout, setKickout] = useState(false);
  const [hb, setHb] = useState(new ClientHBManager(pathName, lastKey));
  useEffect(() => {
      const heartbeat = async () => {
          if(!kickout) {
              const success = await hb.heartbeat();
              if (success)
                Cookies.set("key:"+pathName, hb.getKey());
              setKickout(!success);
          }
      };
      heartbeat();
      const intervalId = setInterval(heartbeat, 5000);
      return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-auto mx-10">
      <div className='flex justify-between w-full'>
        <PageTitle />
        <TemplateInfo />
      </div>

      {kickout && <KickoutPopup/>}

      <div className='mx-10'>

        <div className='mt-10 mb-5 flex justify-between'>
          <TemplatePageSwitcher switchTabFunction={setBodyContent}/>
          <div className='flex gap-3'>
            <ExportButton page = 'template' templateID={template._id}/>
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
