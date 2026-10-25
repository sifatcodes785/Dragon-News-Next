import AllNews from "@/components/homepage/news/AllNews";
import { redirect } from "next/navigation";



export default function Home() {
  redirect('/category/0')
  return (
   <div>
    
    <AllNews></AllNews>
   </div>
  );
}
