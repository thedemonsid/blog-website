import Image from "next/image";
import vdcdsimg from "@/app/images/the_demon_sid1.png";
import thedemonsidimg from "@/app/images/the_demon_sid2.png";
import cornerpiece from "@/app/images/corner-piece.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <h1 className="mt-5 ml-6 text-3xl font-retro"> hello, devs 👋 </h1>
      <h1 className="mt-2 ml-6 text-3xl font-retro"> welcome to this site  </h1>
      <h1 className="mt-2 ml-6 text-3xl font-retro"> We do some writings here, vdsidously ... I mean very seriously </h1>
      <div className="flex flex-row w-full p-3 mt-3 bg-indigo-300 border-2 border-orange-200 rounded-md vd-intro h-44">
        <Image
          className="rounded-full"
          src={vdcdsimg}
          alt="Demon"
          width={150}
          height={150}
        />{" "}
        <p className=" text-sm sm:text-[1.3vw]   font-cool mt-5 sm:mt-10 ml-4">
          just another ape curious about the mess around. I've been coding for 4
          years and often find myself losing trails in the nitty gritty of
          things stack wise I'm comfortable with MERN and{" "}
          <b>yes I hate the sun.</b>
        </p>
      </div>
      <div className="flex flex-row w-full p-3 mt-3 bg-indigo-300 border-2 border-orange-200 rounded-md sid-intro h-44">
        <Image
          className="rounded-full"
          src={thedemonsidimg}
          alt="Demon"
          width={150}
          height={150}
        />{" "}
        <p className=" text-[10px]  sm:text-[20px]   font-cool  mt-5 sm:mt-10 ml-4">
          Hello there! I am Aomine Daiki... No, uh... huh, sorry, that was my
          other persona. So, the real me is Siddhesh Rahul Shrirame. I am a
          piece of the puzzle that never got fit anywhere, but coding made me
          fit with it (more precisely, the problem-solving). So yeah, currently,
          I am a full-stack web developer with a tech stack of MERN, Next.js,
          PostgreSQL, Prisma, Docker, and GitHub.
        </p>
      </div>
      <div className="w-full mt-3 border-2 border-orange-200 h-fit bolgs reletive">
        <h1 className="mt-2 ml-3 text-4xl text-start font-cool">
          Freshly Brewed  ☕
          <br />
          <br />
        </h1>

        <div className="flex flex-col items-start mt-0 ml-3 links-container font-retro">
          <Link href={"/...posts"}>
            <span className="text-[20px] text-slate-200">04/03/2004:  </span>
            <span className="text-[25px]  text-yellow-500 hover:underline hover:text-slate-400">
              Here is a demo Blog
            </span>
          </Link>
          <Link href={"/...posts"}>
            <span className="text-[20px] text-slate-200">04/03/2004:  </span>
            <span className="text-[25px]  text-yellow-500 hover:underline hover:text-slate-400">
              Here is a demo Blog
            </span>
          </Link>
          <Link href={"/...posts"}>
            <span className="text-[20px] text-slate-200">04/03/2004:  </span>
            <span className="text-[25px]  text-yellow-500 hover:underline hover:text-slate-400">
              Here is a demo Blog
            </span>
          </Link>
          <Link href={"/...posts"}>
            <span className="text-[20px] text-slate-200">04/03/2004:  </span>
            <span className="text-[25px]  text-yellow-500 hover:underline hover:text-slate-400">
              Here is a demo Blog
            </span>
          </Link>
          <Link href={"/...posts"}>
            <span className="text-[20px] text-slate-200">04/03/2004:  </span>
            <span className="text-[25px]  text-yellow-500 hover:underline hover:text-slate-400">
              Here is a demo Blog
            </span>
          </Link>
          <Link href={"/...posts"}>
            <span className="text-[20px] text-slate-200">04/03/2004:  </span>
            <span className="text-[25px]  text-yellow-500 hover:underline hover:text-slate-400">
              Here is a demo Blog
            </span>
          </Link>
        </div>
      </div>
      <div className="relative w-full mt-3 border-2 border-orange-200 h-fit projects">
        <h1 className="mt-2 ml-3 text-4xl text-start font-cool">Projects 🚀 <br></br><br></br></h1>
        <div className="flex flex-col items-start mt-0 ml-3 links-container font-retro">
        <Link href={"/...posts"}>
            <span className="text-[20px] text-slate-200">04/03/2004:  </span>
            <span className="text-[25px]  text-yellow-500 hover:underline hover:text-slate-400">
             Project 1
            </span>
            </Link>
            <Link href={"/...posts"}>
            <span className="text-[20px] text-slate-200">04/03/2004:  </span>
            <span className="text-[25px]  text-yellow-500 hover:underline hover:text-slate-400">
             Project 2
            </span>
            </Link>
            <Link href={"/...posts"}>
            <span className="text-[20px] text-slate-200">04/03/2004:  </span>
            <span className="text-[25px]  text-yellow-500 hover:underline hover:text-slate-400">
             Project 3
            </span>
            </Link>
            <Link href={"/...posts"}>
            <span className="text-[20px] text-slate-200">04/03/2004:  </span>
            <span className="text-[25px]  text-yellow-500 hover:underline hover:text-slate-400">
             Project 4
            </span>
            </Link>
            <Link href={"/...posts"}>
            <span className="text-[20px] text-slate-200">04/03/2004:  </span>
            <span className="text-[25px]  text-yellow-500 hover:underline hover:text-slate-400">
             Project 5
            </span>
            </Link>
            <Link href={"/...posts"}>
            <span className="text-[20px] text-slate-200">04/03/2004:  </span>
            <span className="text-[25px]  text-yellow-500 hover:underline hover:text-slate-400">
             Project 6
            </span>
            </Link>
        </div>
        <Image
          className="absolute bottom-0 right-0 "
          src={cornerpiece}
          width={50}
          height={50}></Image>
      </div>
    </div>
  );
}
