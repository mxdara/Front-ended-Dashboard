import { Newspaper, User, MessageCircle, Folder } from "lucide-react";
import Dasboard from "@/components/Dashboard";
import PostTable from "@/components/posts/PostTable";
import AnalyticsChart from "@/components/AnalyticsChart";

export default function Home() {
  return (
    <>
      <div className=" flex flex-row item-center justify-evenly gap-5">
        <Dasboard 
          title='Posts' 
          count={99} 
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <Dasboard 
          title='Comments' 
          count={11} 
          icon={<MessageCircle className="text-slate-500" size={72} />}
        />
        <Dasboard 
          title='Users' 
          count={99} 
          icon={<User className="text-slate-500" size={72} />}
        />
        <Dasboard
          title='Categories'
          count={5}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        
      </div>
      <AnalyticsChart />
      <PostTable title="Latest Posts" limit={2}/>
    </>
  );
}
