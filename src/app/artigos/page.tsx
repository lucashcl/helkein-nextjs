import { fetchData } from "@/utils/functions";
import { IContent } from "@/utils/interfaces";
import Link from "next/link";

function Artigo({url, data}: {url: string, data: IContent}) {
    return (
        <Link href={url} className="flex bg-base-300 p-6 hover:bg-[#141414] transition rounded-lg">
            <div className="w-5/6">
                <h1 className="h1 w-5/6">{data.title}</h1>
                <p className="text-ellipsis break-words overflow-hidden max-h-44 w-5/6">{data.content}</p>
            </div>
            <img src={data.imgUrl} className="w-1/4" alt="" />
        </Link>
    )
}

async function Artigos() {
    const artigos: IContent[] = await fetchData("http://localhost:3000/api/posts/all")
    return ( 
        <div className="p-8 grid grid-cols-10">
            <div className="col-span-2 px-2">
                <input type="text" className="input bg-base-300 rounded-lg w-full"/>
            </div>
            <div className="flex flex-col gap-2 col-span-8">
                {artigos.map((artigo, i) => (<Artigo data={artigo} url={"http://localhost:3000/artigos/" + i}></Artigo>))}
            </div>
        </div>
     );
}

export default Artigos;