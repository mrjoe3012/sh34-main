"use client";

import { Navbar } from '@app/components/navbar';
import { TemplateList } from '@app/components/home-page-components/TemplateList';
import { SearchBar } from '@app/components/home-page-components/SearchBar';
import { NewTemplateButton } from '@app/components/home-page-components/NewTemplateButton';

export default function Home() {
    return (
      <div className="text-black min-w-[1200px] h-screen bg-white font-league">
        <div className='bg-white'>
            <Navbar />
            <Body />
        </div>
      </div>
    );
}

  
function Body() {
    return (
      <div className="bg-white mx-10">
        <Header />
        <div className='mx-5'>
          <TemplateList />
        </div>
      </div>
    );
}

function Header(){
    return(
      <div>
        <div className='grid grid-cols-2 place-content-center'>
            <h1 className="text-4xl text-RES_ORANGE font-bold my-7">Home</h1>
        </div>
        <div className='float-right'>
          <div className='inline-block'>
            <NewTemplateButton />
          </div>
          <div className='inline-block pl-4'>
            <SearchBar />
          </div>
            
        </div>
      </div>
    );
}



