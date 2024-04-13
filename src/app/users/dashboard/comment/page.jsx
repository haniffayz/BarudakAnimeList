import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import React from 'react'
import Link from "next/link"
import Header from '@/components/Dashboard/Header'
import Image from 'next/image'

const Comment = async () => {
    const user = await authUserSession()
    // console.log(user)
    const currentDate = new Date(); 
    const comment = await prisma.comment.findMany({ where: { user_email: user.email } })
    const comments = comment.reverse()

    return (
        <section className="mt-4 px-4 md:px-12 w-full">
            <div className='text-4xl font-bold '>
             <Header title={"Komentar Saya"} />
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 py-4 gap-4'>
                {comments.map(comment => {
                     const commentDate = new Date(comment.time);
                     const diffTime = Math.abs(currentDate - commentDate); // Selisih waktu dalam milidetik
                     let formattedDate;
     
                     if (diffTime < 24 * 60 * 60 * 1000) { // Jika kurang dari satu hari
                         formattedDate = commentDate.toLocaleTimeString('id', {
                             hour: '2-digit',
                             minute: '2-digit'
                         });
                     } else if (diffTime < 2 * 24 * 60 * 60 * 1000) { // Jika lebih dari satu hari tapi kurang dari dua hari
                         formattedDate = 'Kemarin';
                     } else { // Jika lebih dari dua hari
                         formattedDate = commentDate.toLocaleDateString('id', {
                             year: 'numeric',
                             month: 'long',
                             day: 'numeric'
                         });
                     }
                     
                    return (
                        <Link
                            href={`/anime/${comment.anime_mal_id}`}
                            key={comment.id}
                            className='text-color-dark bg-color-primary p-4 border border-colos-primary rounded-xl dark:border-colos-accent'
                        >
                            <div className='flex flex-row gap-4 md:py-8 py-4 px-6 md:px-6'>
                                <div className='flex items-start justify-start'>
                                     <Image src={user.image} alt='' width={50} height={50} className='w-[5rem] rounded-full'></Image>
                                </div>
                                <div className='flex flex-col py-2'>
                                   <p className='font-sans font-extrabold 2xl:text-xl text-start justify-start items-start flex mr-13 mb-1'>🍉@{comment.username}</p>
                                   <p className='font-sans 2xl:text-base text-start justify-start items-start flex ml-2'>
                                    {commentDate}</p>
                                </div>
                            </div>
                            <div className='px-8 py-2'>
                                <p className='font-sans 2xl:text-xl'>{comment.comment}</p>
                            </div>
                            
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Comment