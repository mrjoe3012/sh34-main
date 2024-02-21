import { Navbar } from '@app/components/navbar';
import { loadTemplates } from '@app/modules/db';
import Body from '@app/components/home-page-components/Body';
import { HomePageContextProvider } from './HomePageContext';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const templates = await loadTemplates({});
    return (
      <div className="text-black min-w-[1200px] h-screen bg-white font-league">
        <div className='bg-white'>
          <HomePageContextProvider templates={templates}>
            <Navbar />
            <Body />
          </HomePageContextProvider>
        </div>
      </div>
    );
}

