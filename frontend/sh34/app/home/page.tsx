'use client';
import { Navbar } from '@app/components/navbar';
// import { loadTemplates } from '@app/modules/db';
import Body from '@app/components/home-page-components/Body';
import { HomePageContextProvider } from './HomePageContext';
import { TemplateData } from '@app/modules/db';
import { WithId } from 'mongodb';
import { useEffect, useState } from 'react';
import { TemplateLoader } from '@app/modules/TemplateLoader';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default function Home() {
  const [templates, setTemplates] = useState<WithId<TemplateData>[]>([]);
  const [newTemplates, setNewTemplates] = useState<WithId<TemplateData>[]>([]);
  const [needSorting, setNeedSorting] = useState<boolean>(true);
  useEffect(() => {
    const loadTemplates = async () => {
      const loader = new TemplateLoader();
      const templates = await loader.loadTemplates({});
      if (templates.length > 0)
        setNewTemplates([...templates]);
    };
    loadTemplates();
    const interval = setInterval(loadTemplates, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // only update rendered templates if they have changed
    const currentIds = templates.map((t) => t._id).sort();
    const newIds = newTemplates.map((t) => t._id).sort();
    if (currentIds.length == 0 || !newIds.every((_, i) => currentIds[i] == newIds[i])) {
      setTemplates([...newTemplates]);
      setNeedSorting(true);
    }
  }, [newTemplates]);
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

