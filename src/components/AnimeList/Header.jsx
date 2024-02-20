import Link from "next/link"
import { CaretDown, CaretRight } from "@phosphor-icons/react/dist/ssr"

const Header = ( {title, linkHref, linkTitle} ) => {
    return (
    <div className="flex justify-between items-center p-6 md:p-6 py-7 md:py-10 bg-colos-accent dark:bg-colos-sidebarColor">
       <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
      {
      linkHref && linkTitle ?
      <div className="border border-black border-solid border-1 w-28 md:w-32 rounded-xl hover:bg-colos-secondary h-7 hover:text-colos-primary">
        <CaretRight size={20} className="cursor-pointer absolute right-8 mt-1" />
    <Link 
      href={linkHref} 
      className="md:text-base text-sm hover:text-colos-primary transition-all no-underline ml-2">
      {linkTitle}
    </Link> 
      </div>
    : null
    }
    
     </div>

    )
}

export default Header