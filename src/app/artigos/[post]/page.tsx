import { fetchData } from "@/utils/functions";

function TitleSkeleton() {
    return (
        <div role="status" className="h-[50vh] bg-neutral-900 flex items-center justify-center animate-">
        </div>
    )
}

function ContentSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
        </div>
    )
}


async function Page({params}: {params: {post: string}}) {
    const {post} = params
    const data = await fetchData("http://localhost:3000/api/posts/"+post)
    const paragraphs: string[] = data.content.split("  ")    

    return ( 
        <div className="relative">
            {data.title ? (<div  style={{backgroundImage: `url(${data.imgUrl})`}} className="w-full h-[50vh] flex flex-col justify-center gap-2 bg-cover ">
                <div className="absolute z-[1] px-8 w-full flex flex-col items-center">
                    <h1 className="text-6xl font-bold">{data.title}</h1>
                    <p>— {data.date} —</p>
                </div>
                <div className="absolute bg-black h-[50vh] w-full opacity-50"></div>
            </div>) : <TitleSkeleton />}
            <div className="xl:px-96 lg:px-40 mt-8 ">
                {data.content ? paragraphs.map((par, i) => (<p key={i} className="text-justify mb-4">{par}</p>)) : (<ContentSkeleton />)}
            </div>
        </div>
     );
}

export default Page;