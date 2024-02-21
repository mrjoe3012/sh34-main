"use client"
import Link from "next/link";

export const KickoutPopup = () => {

    return (
        <div className="select-none">
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
            <div className="flex flex-col justify-between w-[500px] h-[600px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-[4px] border-RES_ORANGE rounded-lg p-4 z-50">
                <p>Someone else is currently working on this template.</p>    
                <Link href='/home'>Home</Link>
            </div>
        </div>
    );
};