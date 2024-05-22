import Headingtxt from "@/components/Headingtxt";
import Latestblog from "@/components/Latestblog";
import Projectshowcase from "@/components/Projectshowcase";
import Carouselcompo from "@/components/Carouselcompo";

export default function Home() {
  
  return (
    <div className="relative">
    <div className="w-full min-h-screen p-5 text-yellow-100 bg-gray-800 ">
      <Headingtxt></Headingtxt>
      <Carouselcompo></Carouselcompo>
      <div className="mt-3 border-2 border-yellow-200 rounded-md">
        <Latestblog></Latestblog>
      </div>
      <div className="relative mt-3 border-2 border-yellow-200 rounded-md">
        <Projectshowcase></Projectshowcase>
      </div>
    </div>
    </div>
  );
}


