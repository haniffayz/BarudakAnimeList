"use client"
import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from 'sweetalert2'

const CommentInput = ({ anime_mal_id, user_email, username, anime_title, user_image, time }) => {
    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)

    const router = useRouter()

    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePosting = async (event) => {
        event.preventDefault()

        if (comment.trim() === "") {
            Swal.fire({
                title: "Komentar tidak boleh kosong",
                text: "Harap isi komentar dan berkomentarlah dengan baik dan bijak",
                icon: "warning",
              })
            return;
        }

        const data = { anime_mal_id, user_email, comment, username, anime_title, user_image, time  }

        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const postComment = await response.json()
        const PostingSucces = ()=> {
            Swal.fire({
            title: "Postingan Terkirim",
            icon: "success"
        })} 
        if (postComment.isCreated) {
            setIsCreated(true)
            setComment("")
            router.refresh()
            PostingSucces()
        }
        return
    }

    return (
        <div className="flex flex-col gap-2 mt-12 ">
            {isCreated && <p className="text-colos-primary dark:text-colos-accent font-bold">Postingan terkirim...</p>}
            
            <textarea 
                onChange={handleInput} 
                value={comment}
                placeholder="Ketik Komentar anda...."
                className="md:w-full h-40 p-4 border border-colos-primary text-sm 2xl:text-xl font-sans" />
            <button onClick={handlePosting} className="post-button md:w-52 w-full py-2 rounded-xl font-sans font-bold bg-colos-SidebarAccent dark:shadow-colos-accent">
                <div className="flex flex-row gap-2 2xl:gap-2 justify-center items-center 2xl:justify-start 2xl:items-start">
                    <PaperPlaneTilt size={24} className="hover:text-colos-SidebarAccent 2xl:mt-1" weight="fill"/> 
                    <h1 className="2xl:mt-1">Posting Komentar</h1>
                </div>
                
            </button>
        </div>
    );
};

export default CommentInput;
