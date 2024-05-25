import React from 'react'
import thedemonsidimg from "../../../public/images/the_demon_sid2.png";
import Image from 'next/image';
function Tdsintro() {
  return (
    <div>
    <div className="flex flex-col p-3 bg-gray-700 border-2 border-yellow-200 rounded-md sm:flex-row">
    <Image
      className="mb-2 rounded-3xl sm:mb-0"
      src={thedemonsidimg}
      alt="Demon"
      width={150}
      height={150}
    />
    <p className="ml-0 text-xs sm:ml-4 sm:text-base font-techy">
      Hello there! I am Aomine Daiki... No, uh... huh, sorry, that was my other persona. So, the real
      me is Siddhesh Rahul Shrirame. I am a piece of the puzzle that never got fit anywhere, but
      coding made me fit with it (more precisely, the problem-solving). So yeah, currently, I am a
      full-stack web developer with a tech stack of MERN, Next.js, PostgreSQL, Prisma, Docker, and
      GitHub.
    </p>
  </div>
    </div>
  )
}

export default Tdsintro
