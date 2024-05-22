import vdcdsimg from "../../../public/images/the_demon_sid1.png";
import Image from "next/image";
import React from "react";

function Vdcdsintro() {
  return (
    <div className="flex flex-col p-3 bg-gray-700 border-2 border-yellow-200 rounded-md sm:flex-row">
      <Image
        className="mb-2 rounded-3xl sm:mb-0"
        src={vdcdsimg}
        alt="Demon"
        width={150}
        height={150}
      />
      <p className="ml-0 text-sm sm:ml-4 sm:text-base font-techy">
        Just another primate poking around the tangled web. 4 years deep in the
        code mines and those rabbit holes still get me sometimes.
        stack-wise,MERN is my usual haunt with twist of Next.Js around. I also
        love to linger in android devlopment and Linux coustamziations.{" "}
        <i> I do know git enough to not stumble around! </i>{" "}
        <b>The sun and I aren&apos;t on speaking terms.</b>
      </p>
    </div>
  );
}

export default Vdcdsintro;
