import Link from "next/link";


export const ReturnButton = () => {
    
    return (
        <div className='p-2'>
            <Link href={``}>
                <p>Return to Template</p>
            </Link>
        </div>
    );
  };