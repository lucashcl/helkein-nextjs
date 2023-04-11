import Link from "next/link"
import { IContent } from "@/utils/interfaces"

export default function Post({data}: {data: IContent}){
    const {content, imgUrl, title} = data
    return (
        <Link href="/artigos/2" className="group col-span-3 min-h-full relative group">
            <div className="absolute z-[2] h-full w-full flex flex-col justify-around p-4 group-hover:scale-[99%] transition">
                <h1 className="box-border text-neutral-100 text-xl font-bold">{title}</h1>
                <p className="text-neutral-300 line-clamp-3">{content}</p>
            </div>
            <div className="absolute z-[1] h-full w-full bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all group-hover:backdrop-blur-sm"></div>
            <div style={{backgroundImage: `url(${imgUrl})`}} className={`w-full h-full relative bg-cover`}>
            </div>
        </Link>
    )
}