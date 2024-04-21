import Headingtxt from "@/components/Headingtxt";
import Vdcdsintro from "@/components/intro-cards/Vdcdsintro";
import Tdsintro from "@/components/intro-cards/Tdsintro";
import Latestblog from "@/components/Latestblog";
import Projectshowcase from "@/components/Projectshowcase";

export default function Home() {
  return (
    <div className="w-full min-h-screen p-3 text-yellow-100 bg-gray-800">
      <Headingtxt></Headingtxt>
      <div className="flex flex-col mt-3 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
        <Vdcdsintro></Vdcdsintro>
        <Tdsintro></Tdsintro>
      </div>
      <div className="mt-3 border-2 border-orange-200 rounded-md">
        <Latestblog></Latestblog>
      </div>
      <div className="relative mt-3 border-2 border-orange-200 rounded-md">
        <Projectshowcase></Projectshowcase>
      </div>
    </div>
  );
}
