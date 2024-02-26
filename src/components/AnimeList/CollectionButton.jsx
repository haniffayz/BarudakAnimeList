"use client"

import React, { useState } from 'react'
import { BookmarkSimple } from '@phosphor-icons/react/dist/ssr'

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title, user_image }) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async (event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email, anime_image, anime_title, user_image }

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if (collection.isCreated) {
            setIsCreated(true)
        }
        return
    }

    return (
        <>
            {isCreated 
                ? 
                <button
                className="md:py-0 xl:mt-2 md:mt-4 my-4 md:my-0 bg-color-accent border dark:border-colos-accent border-colos-primary 2xl:w-52 
                2xl:h-16 lg:w-40 xl:w-44 xl:h-12 w-full h-12 rounded-xl active:bg-colos-SidebarAccent active:text-colos-accent animation lg:hover:bg-colos-SidebarAccent lg:hover:text-colos-accent animation">
                    <div className='flex items-center justify-center text-center md:p-2 xl:p-0 gap-2'>
                        <BookmarkSimple size={32} className="2xl:text-xl xl:text-lg" weight="fill"/>
                        <h1 className='2xl:text-lg lg:text-sm flex justify-center items-center'>Ditambahkan!</h1>
                    </div>
            </button>
                :
                <button
                    onClick={handleCollection}
                    className="md:py-0 xl:mt-2 md:mt-4 my-4 md:my-0 bg-color-accent border dark:border-colos-accent border-colos-primary 2xl:w-52 2xl:h-16 lg:w-40 xl:w-44 xl:h-12 w-full h-12 rounded-xl active:bg-colos-SidebarAccent active:text-colos-accent animation lg:hover:bg-colos-SidebarAccent lg:hover:text-colos-accent animation">
                        <div className='flex items-center justify-center text-center md:p-2 xl:p-0 gap-2'>
                            <BookmarkSimple size={32} className="2xl:text-xl xl:text-lg"/>
                            <h1 className='2xl:text-lg lg:text-sm flex justify-center items-center'>Tambah Koleksi</h1>
                        </div>
                </button>
                }
        </>
    )
}

export default CollectionButton