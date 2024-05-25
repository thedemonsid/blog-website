"use client"
import React from "react";

const Denied = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen text-red-600 bg-gray-800 font-cool">
      <h1 className="mb-6 text-xl sm:text-6xl animate-pop-up">Whoops!</h1>
      <div className="w-11/12 p-6 mb-6 ml-2 border-2 border-yellow-300 rounded-md sm:w-1/2 pop-up animate-pop-up font-techy">
        <ul className="text-left text-white">
          <li className="mb-2">
            Hey there! We get that you are eager to write and share awesome stuff.
          </li>
          <li className="mb-2">
            But hold up a little bit because we are not doing that for now.
          </li>
          <li>
            Reason: We are a small team (literally two guys over here) and we are working on great surprises for you all. It will be available soon... ✌️
          </li>
        </ul>
      </div>
      <span className="absolute text-2xl bottom-4 right-4">✏️📚</span>
      <span className="absolute text-2xl top-4 left-4">✏️📚</span>
    </div>
  );
};

export default Denied;