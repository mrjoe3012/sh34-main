"use client"
import Link from "next/link";
import Image from "next/image";
import EditIcon from "@app/images/edit-icon.svg"

interface EditButtonProps {
  templateId: number;
};

export const EditButton = (props: EditButtonProps) => {
    return(
      <div className='text-center w-[80px] ml-[50px]'>
            <Link href={"/template-page/" + props.templateId.toString()}>
            <div className="justify-center flex gap-x-1 rounded-3xl p-2 px-3 border-black border-2 relative bg-[#f3f3f3]">
              <Image src={EditIcon} alt="Edit" />
              <p className="font-bold"> Edit </p>
            </div>
        </Link>
          </div>
    );
}