// Component for the the ID/TemplateName data display on the Template Page
export const TemplateInfo = () => {
    return(
        <div className="flex text-2xl text-[#575757] font-semibold">
          <div className='mr-3'> ID </div>
          <div> | </div>
          <div className='ml-3'> Template Name </div>
        </div>
    );
}