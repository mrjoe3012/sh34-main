'use client';
import { Navbar } from '@app/components/navbar';
// import { loadTemplates } from '@app/modules/db';
import Body from '@app/components/home-page-components/Body';
import { HomePageContextProvider } from './HomePageContext';
import { TemplateData } from '@app/modules/db';
import { WithId } from 'mongodb';
import { useEffect, useState } from 'react';

export const dynamic = 'force-dynamic';

export default function Home() {
  const [templates, setTemplates] = useState<WithId<TemplateData>[]>([]);
  const [needSorting, setNeedSorting] = useState<boolean>(true);
  useEffect(() => {
    const loadPlots = async () => {
      const filter = {};
      try {
        const response = await fetch("/api/db/load-templates", {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify(filter),
        });
        const data = await response.json();
        if (response.status == 200) {
          const loadedTemplates: WithId<TemplateData>[] = data['templates'];
          setTemplates([...loadedTemplates]);
          setNeedSorting(true);
        } else {
          throw Error(`update-plots returned ${response.status}`);
        }
      } catch (e) {
        console.error(`Error while trying to fetch templates: ${e}`);
      }
    };
    loadPlots();
    const interval = setInterval(loadPlots, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-black min-w-[1200px] h-screen bg-white font-league">
      <div className='bg-white'>
        <HomePageContextProvider templates={templates} setTemplates={setTemplates} needSorting={needSorting} setNeedSorting={setNeedSorting}>
          <Navbar />
          <Body />
        </HomePageContextProvider>
      </div>
    </div>
  );
}

