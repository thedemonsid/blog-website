import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cornerpiece from "@/app/images/corner-piece.png";
function Projectshowcase() {
  return (
    <div>
        <h1 className="p-3 text-4xl text-start font-techy">Projects 🚀</h1>
        <div className="p-3 mb-3 font-techy">
          {[...Array(6)].map((_, index) => (
            <Link href={"/blogs"} key={index}>
              <div className="text-sm sm:text-md text-slate-200 hover:underline hover:text-slate-400">
                <span>04/03/2004: </span>
                <span className="text-yellow-400 hover:text-slate-400">
                  Project {index + 1}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Image
          className="absolute bottom-0 right-0"
          src={cornerpiece}
          width={50}
          height={50}
          alt="A corner piece image"
        />
      </div>
  )
}

export default Projectshowcase