"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children, className
}) => {


    const Router = useRouter();
    const handlelogout = () => {
        localStorage.removeItem("token");
    }

    return (
        <div
            className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6  `, className)} >
            <div className="w-full nb-4 flex items-center justify-between" >
                <div className="hidden md:flex gap-x-2 items-center">

                    <button onClick={() => Router.back()} className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretLeft className="text-white" size={35} />
                    </button>
                    <button onClick={() => Router.forward()} className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretRight className="text-white" size={35} />
                    </button>
                </div>

                <div className="">
                    min: 36:22
                </div>
            </div>
        </div>)
}

export default Header