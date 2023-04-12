import Main from "@/components/home/Main";
import Post from "@/components/home/Post";
import { fetchData } from "@/utils/functions";



export default async function Home() {

  const data = await fetchData("http://localhost:3000/api/posts/all")
  return (
      <div style={{flexGrow: 1}} className="flex-center h-[calc(100vh-64px)]">  
        <div className="h-5/6 aspect-[21/10] grid grid-cols-10 grid-rows-3">
          <Main data={data[0]}  />
          <Post data={data[1]} />
          <Post data={data[2]} />
          <Post data={data[3]} />
        </div>
      </div>
    
  )
}
