import { useTemplatePageContext } from "@app/template-page/TemplatePageContext";

// Component for the the ID/TemplateName data display on the Template Page
export const TemplateInfo = () => {
  const {template} = useTemplatePageContext();
  return(
      <div className="flex text-2xl text-[#575757] font-semibold">
        <div className='mr-3'> ID: {template._id} </div>
        <div> | </div>
        <div className='ml-3'> {template.Name} </div>
      </div>
  );
}