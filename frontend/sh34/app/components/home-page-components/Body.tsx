'use client';
import Header from "./Header";
import { TemplateList } from "./TemplateList";

export default function Body() {
    return (
      <div className="bg-white mx-10">
        <Header />
        <div className='mx-5'>
            <TemplateList />
        </div>
      </div>
    );
}