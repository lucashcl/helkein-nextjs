import { IContent } from "@/utils/interfaces"
import Link from "next/link"



export default function Main({data}: {data: IContent}) {
    const {content, imgUrl, title} = data
    return (
        <Link href="/artigos/2" className="col-span-7 row-span-3 min-h-full relative cursor-pointer group" >
            <div className="absolute z-[2] w-full h-full flex flex-col items-start justify-center gap-4 p-12 max-sm:p-8 group-hover:scale-[99%] transition-all">
                <h1 className="box-border  text-white text-5xl max-sm:text-2xl max-md:text-4xl font-bold">{title}</h1>
                <p className="box-border text-neutral-300 text-justify line-clamp-6">{content}</p>
            </div>
            <div className="absolute z-[1] h-full w-full bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all group-hover:backdrop-blur-sm"></div>
            <div style={{backgroundImage: `url(${imgUrl})`}}  className="absolute bg-no-repeat bg-cover h-full w-full transition-all duration-300"></div>
        </Link>
    )
}


