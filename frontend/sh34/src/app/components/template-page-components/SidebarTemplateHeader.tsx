import Image from 'next/image';
import UKflag from "./../../images/UKflag.png"

export const SidebarTemplateHeader = () => {
    return (
        <div className='flex p-2'>
        <Image src={UKflag} alt='UkFlag' className='basis-[20%] w-15 h-10 rounded'/>
        <div className='text-center w-full self-center'>
          <p className='font-semibold'>Wind Farm 1</p>
        </div>
      </div>
    );
  };