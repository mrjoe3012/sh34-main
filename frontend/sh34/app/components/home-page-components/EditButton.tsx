import Link from "next/link";

export const EditButton = () => {
    return(
        <Link href="/template-page">
          <div className='text-center w-5/6'>
            <div className="justify-center flex rounded-xl p-2 border-black border-2 relative bg-[#616673]">
              <p className="text-slate-50 basis-10/11">Edit</p>
            </div>
          </div>
        </Link>
    );
}