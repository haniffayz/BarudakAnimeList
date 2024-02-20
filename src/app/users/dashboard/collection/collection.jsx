import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import { Bookmark } from "@phosphor-icons/react/dist/ssr";

const Collection = async () => {
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email },
    });
    
    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
          return text.substring(0, maxLength) + "...";
      }
      return text;
  };

    const reversedCollection = collection.reverse();    

    return (
        <section className="px-5"> 
                 <div className="text-4xl font-bold hidden flex-col md:flex">
                   <Header title={"Koleksi Saya"} />
                   <div className="py-4">
                     <div className="grid 2xl:grid-cols-6 md:grid-cols-4 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-4 grid-cols-3 gap-4 md:gap-8 2xl:gap-16 xl:gap-10 md:gap-15 sm:gap-20 px-5">
                     {reversedCollection.map((collect, index) => {
                        return (
                     <div className="relative">  
                     <Link href={`/anime/${collect.anime_mal_id}`} key={index} className="relative rounded-xl border-colos-primary">
                            <Image src={collect.anime_image} alt={collect.anime_image} width={250} height={350} className="w-full max-h-64 md:max-h-[15rem] xl:max-h-[17rem] 2xl:max-h-[18rem] h-[18rem] object-cover rounded-lg"/>
                              <h3 className="font-bold md:text-sm xl:text-base 2xl:text-lg text-sm pl-4 pt-4 pb-4 pr-12">
                              {truncateText(collect.anime_title, 35)}
                                </h3>
                      </Link>
                     </div>  
                        )
                     })}
                        
                     </div>
                  </div>
                </div>
              </section>
    );
};

export default Collection;
