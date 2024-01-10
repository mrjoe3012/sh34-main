import Image from 'next/image';
import UKflag from "@app/images/UKflag.png"

export const SidebarTemplateHeader = () => {
    return (
      <div className='flex p-2 my-2'>
        <div className='text-center w-full self-center'>
          <p className='font-semibold text-2xl'>Plot Title</p>
        </div>
      </div>
    );
  };