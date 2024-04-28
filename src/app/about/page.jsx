import React from "react";

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen mt-0 bg-slate-800 font-techy">
      <h1 className="mt-0 mb-8 text-4xl text-yellow-300 ">About</h1>
      <div className="flex flex-col space-y-8">
        <div className="p-4 text-yellow-300 bg-gray-800 border-2 border-orange-200 rounded-md shadow-md shadow-gray-300">
          <h2 className="mb-4 text-2xl">Why Vdsidously :</h2>
          <p>
            We are childhood friends from a town in Maharashtra. It&apos;s been since
            almost childhood that we love to explore the subject in our hands.
            Life took turns and sways, and after finishing our secondary and
            higher secondary educations, we landed in the same subject for our
            degrees, CSE! Now we began to explore the subject and soon realized
            that there&apos;s seriously a major missing in people passionately
            expressing what they learn. This blog wasn&apos;t in plan even after
            that. But one day, I was watching a{" "}
            <span className="hover:text-red-400">
              <a
                href="https://www.twitch.tv/theprimeagen"
                target="_blank"
                rel="noopener noreferrer">
                Prime
              </a>
            </span>{" "}
            video where he was reacting to some problems with HTML or something.
            So I called up Siddhesh and asked him if we could write about some
            interesting stuff and share it with the people who not just love the
            money but also the underlying stuff that enables it. That&apos;s how we
            landed here. There&apos;s so much more to the code than just mere syntax,
            and the real fun in it lies right there! We want to explore and
            share that through this site.
          </p>
        </div>
        <div className="p-4 text-yellow-300 bg-gray-800 border-2 border-orange-200 rounded-md shadow-md shadow-gray-300">
          <h2 className="mb-4 text-2xl">What we Aim to bring:</h2>
          <ol className="list-decimal list-inside">
            <li>Fun nitty-gritty of stuff</li>
            <li>Understandable language</li>
            <li>Concise guides to interesting projects</li>
            <li>Weekend project ideas</li>
            <li>Tools to make your PC&apos;s look and feel better</li>
            <li>Things to make your code cleaner</li>
          </ol>
        </div>
        <div className="p-4 text-yellow-300 bg-gray-800 border-2 border-orange-200 rounded-md shadow-md shadow-gray-300">
          <h2 className="mb-4 text-2xl">Recommandations:</h2>
          <ol className="list-decimal list-inside">
            <li>
              Youtube channels:{" "}
              <a
                href="https://www.youtube.com/@harkirat1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500">
                Harkirat Singh
              </a>
              ,{" "}
              <a
                href="https://www.youtube.com/@HiteshChoudharydotcom"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500">
                Hitesh Chaudhary
              </a>
            </li>
            <li>
              Themes: Catppuccin theme,{" "}
              <a
                href="https://chai-desktop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500">
                Chai theme
              </a>
              , Andromeda theme
            </li>
            <li>
              Our laptops:{" "}
              <a
                href="https://www.asus.com/Laptops/For-Gaming/TUF-Gaming/ASUS-TUF-Gaming-F15-2022/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500">
                Asus TUF F15 (The Demon Sid)
              </a>{" "}
              and{" "}
              <a
                href="https://www.asus.com/Laptops/For-Home/Vivobook/Vivobook-K14-OLED-K3402Z/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500">
                Asus Vivobook K14 OLED (Vdcds)
              </a>
            </li>
            <li>The editor: VS Code</li>
            <li>
              Softwares you should use more:{" "}
              <span className="font-bold">Postman (the_demon_sid)</span> and{" "}
              <span className="font-bold">Warp Terminal (Vdcds)</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
