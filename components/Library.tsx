"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";


interface LibraryProp {
    songs: Song[];
}

const Library: React.FC<LibraryProp> = ({ songs }) => {

    const authModal = useAuthModal();
    const UploadModal = useUploadModal()
    const { user } = useUser();


    const onClick = () => {
        if (!user) {
            return authModal.onOpen();
        }

        // TODO: check for subscripion

        return UploadModal.onOpen();

    }


    return (
        <div className="flex flex-col">

            <div className=" flex items-center justify-between px-5 pt-4 ">
                <div className=" inline-flex items-center gap-x-2 ">

                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p className="text-neutral-400  font-meduim text-md">Your Library</p>
                </div>

                <AiOutlinePlus onClick={onClick} className='text-neutral-400 cursor-pointer  hover:text-white   transition ' />


            </div>

            <div className=" flex  flex-col  gap-y-2  mt-4 px-3 "   >
                {
                    songs.map((item) => (
                        <div key={item.id}>{item.title}</div>
                    ))
                }
                ******* min : 3:21 *******
            </div>
        </div>

    )
}


export default Library;