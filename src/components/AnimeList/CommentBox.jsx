import prisma from '@/libs/prisma'
import React from 'react'
import Image from 'next/image';
import { authUserSession } from '@/libs/auth-libs';
import { Star } from '@phosphor-icons/react/dist/ssr';

const CommentBox = async ({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
    const user = await authUserSession()
    const reversedComments = comments.reverse();
    const currentDate = new Date();    

    return (
        <div className='grid xl:grid-cols-1 mt-14 gap-8 mb-4 lg:px-24 xl:px-0'>
            {reversedComments.map(comment => {
                // console.log(comment.time)
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
                    <>
                    <div key={comment.id} className="text-color-dark bg-color-primary p-2 rounded-lg">
                       <div className='flex flex-row gap-2 px-1'>
                            <div className='flex items-start justify-start'>
                               <Image src={comment.user_image} alt='' width={50} height={50} className='w-[5rem] rounded-full'></Image>
                            </div>
                            <div className='flex flex-col py-2'>
                               <p className='font-sans font-extrabold 2xl:text-xl text-center justify-center items-center flex mr-12 mb-1'>
                                 🍉@{comment.username}</p>
                              <p className='font-sans 2xl:text-base text-start justify-start items-start flex ml-2'>
                                 {commentDate}</p>
                            </div>
                            </div>
                            <div className='px-4 py-4'>
                                <p className='font-sans 2xl:text-xl'>{comment.comment}</p>
                            </div>
                    </div>
                    <hr className='w-full'/>
                    </>
                )
            })}
        </div>
    )
}

export default CommentBox