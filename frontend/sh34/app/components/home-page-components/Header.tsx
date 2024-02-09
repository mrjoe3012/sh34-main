import { NewTemplateButton } from "./NewTemplateButton";
import { SearchBar } from "./SearchBar";

export default function Header(){
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