import { Navbar } from '@app/components/navbar';
import { TemplateList } from '@app/components/home-page-components/TemplateList';
import { NewTemplateButton } from '@app/components/home-page-components/NewTemplateButton';
import { SearchBar } from '@app/components/home-page-components/SearchBar';
import { HomePageContextProvider } from './HomePageContext';
import { loadTemplates } from '@app/modules/db';
import Body from '@app/components/home-page-components/Body';

export default async function Home() {
  console.log("Home");
  const templates = await loadTemplates({});
  return (
    <div className="text-black min-w-[1200px] h-screen bg-white font-league">
      <div className='bg-white'>
          <Navbar />
          <Body templates = {templates}/>
      </div>
    </div>
  );
}
