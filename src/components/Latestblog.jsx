import React from 'react'
import Link from 'next/link'
// tip from fronted : fetch only the posts  from last 2-3 days here  here. 
function Latestblog() {
  return (
    <div>
       <h1 className="p-3 text-4xl text-start font-techy">
          Freshly Brewed ☕
        </h1>
        <div className="p-3 font-techy">
          {[...Array(6)].map((_, index) => (
            <Link href={"/...posts"} key={index}>
              <div className="mb-1 text-sm sm:text-md text-slate-200 hover:underline hover:text-slate-400">
                <span>04/03/2004: </span>
                <span className="text-yellow-400 hover:text-slate-400">
                  Here is a demo Blog
                </span>
              </div>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Latestblog