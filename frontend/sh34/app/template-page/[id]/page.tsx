import { WithId } from 'mongodb';
import { TemplateData, loadTemplates, loadPlotsFromTemplate } from '@app/modules/db';
import { Body } from '@app/components/template-page-components/general-components/Body';
import { Navbar } from '@app/components/navbar';
import { ErrorComponent } from '@app/components/ErrorComponent';
import { InvalidIdParam } from '@app/modules/InvalidIdParam';
import { TemplatePageContextProvider } from '@app/template-page/TemplatePageContext';

export const dynamic = 'force-dynamic';

interface TemplateEditorProps {
  params: {
    id: string;
  };
};

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
    console.error("Encountered error retrieving templates: " + error);
    const code = 404;
    return <ErrorComponent statusCode={code}/>;
  }
  const plots = await loadPlotsFromTemplate(template);
  return (
    <div className="text-black min-w-[1200px] h-screen bg-white font-league">
      <div className='bg-white h-fit'>
        <TemplatePageContextProvider plots={plots} template={template}>
          <Navbar />
          <Body/>
        </TemplatePageContextProvider>
      </div>
    </div>
  );
}
