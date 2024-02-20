"use client"
import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {
    const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="py-7 px-6">
            <h1>{title}</h1>
        </div>
    )
}

export default Header