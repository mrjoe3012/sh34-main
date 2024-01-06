// Component for the button to switch between Info/Structure tabs on Template Page
export const TemplatePageSwitcher = () => {
    return(
        <div className='flex flex-row bg-[#EAEAEA] w-[350px] h-[60px] items-center justify-center rounded-xl'>
          <div className='mr-1 text-2xl w-[50%]  text-center'> Structure </div>
          <div className='bg-[#D5D5D5] w-1 h-[80%] self-center'></div>
          <div className='ml-1 text-2xl w-[45%] text-center'>Info</div>
        </div>
    );
}