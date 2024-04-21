import React from "react";

function Footer() {
  return (
    <div className="text-yellow-300 bg-gray-800 font-techy">
      <footer className="p-1 text-center bg-bg-soft dark:bg-bgDark-soft text-fg-1 dark:text-fgDark-1 lg:text-left">
        <div className="flex items-center justify-center pb-1 mb-2 border-b-2 border-fg-3 dark:border-fgDark-3 lg:justify-between">
          <p>
            Copyright 2024 Vdsidously (Vedant Chaware & Siddhesh Shrirame). Any
            and all opinions listed here are our own and not representative of
            any of my employers, past, future, and/or present.
          </p>
        </div>
        <div className="flex items-center justify-center pb-1 mb-2 border-b-2 border-fg-3 dark:border-fgDark-3 lg:justify-between">
          <p>
            Like what you see? Drop a follow on <b> 𝕏 </b>{" "}
            <a className="text-red-400 hover:text-slate-400" href="https://twitter.com/the_demon_sid">
              {" "}
              the_demon_sid{" "}
            </a>{" "}
            & <a className="text-red-400 hover:text-slate-400" href="https://twitter.com/Vedantthere">Vdcds</a>!
          </p>
        </div>
        <div className="flex items-center justify-center border-fg-3 dark:border-fgDark-3 lg:justify-between">
          <p>
            source code available{" "}
            <a className="text-red-400 hover:text-slate-400" href="https://github.com/thedemonsid/blog-website">here</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
