import { WithId } from 'mongodb';
import { TemplateData, loadTemplates } from '@app/modules/db';
import { Body } from '@app/components/template-page-components/general-components/Body';
import { Navbar } from '@app/components/navbar';

interface TemplateEditorProps {
  params: {
    id: string;
  };
};

class InvalidIdParam extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidIdParam';
  }
}

async function tryRetrieveTemplate(id: string): Promise<WithId<TemplateData>> {
  const idInt = Number.parseInt(id);
  const filter = {
    '_id' : idInt
  };
  const templates = await loadTemplates(filter);
  if (templates.length ==  0) {
    throw new InvalidIdParam(`The ID param was invalid: ${id}`);
  }
  return templates[0];
}

export default async function TemplateEditor(props: TemplateEditorProps) {
  var template;
  try{
    template = await tryRetrieveTemplate(props.params.id);
  } catch (error) {
    return {
      notFound: true,
    };
  }
  console.log(template.Name);
  return (
    <div className="text-black min-w-[1200px] h-screen bg-white">
      <div className='bg-white h-fit'>
        <Navbar />
        <Body />
      </div>
    </div>
  );
}
