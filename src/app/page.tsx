import Carousel from "@/components/Carousel";
import Featured from "@/components/Featured";

const sampleCarousel = [
  {id: "1", img: "https://images.unsplash.com/photo-1604931668626-ab49cb27d952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}, {id: "2", img: "https://images.unsplash.com/photo-1502700807168-484a3e7889d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"}
]

export default function Home() {
  return (
      <div style={{flexGrow: 1}} className="py-16 px-44 max-lg:px-16">  
        <Featured />
      </div>
    
  )
}
