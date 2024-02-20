"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword || keyword.trim() == "") return

        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
       
    }

    return (
        <div className="relative items-center justify-center flex md:absolute 2xl:left-[364px] xl:left-[357px] md:left-[378px] z-50">
            <input 
            placeholder="  cari anime....." 
            className="w-full 2xl:p-3 p-1.5 md:pr-28 2xl:pr-52 pr-20 rounded-lg md:rounded-lg outline-none input md:right-0" 
            ref=  {searchRef}
            onKeyDown={handleSearch}
            />
            <button className="absolute top-2 2xl:top-3 end-2" onClick={handleSearch}>
               <MagnifyingGlass size={25} />
            </button>
        </div>
    )
}

export default InputSearch