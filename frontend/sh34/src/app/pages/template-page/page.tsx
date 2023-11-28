import Link from 'next/link';
import { Navbar } from '../../components/navbar';
import { Sidebar } from '../../components/template-page-components/Sidebar';
import { BodyContent } from '@/app/components/template-page-components/BodyContent';

export default function Home() {
    return (
      <div className="text-black flex flex-col h-screen">
        <Navbar />
        <hr className='h-[1.5px]'></hr>
        <Body />
      </div>
    );
  } 
  
function Body() {
  return (
    <div className="bg-white flex flex-row flex-1 overflow-auto">
        <Sidebar />
        <BodyContent />
    </div>
  );
}