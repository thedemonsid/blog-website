"use client";
import React, { useState, useEffect, useRef } from "react";

function Page() {
  const [content, setContent] = useState("");
  const [editor, setEditor] = useState("SiddheshShrirame");
  const textareaRef = useRef(null);

  const handleSave = () => {
    const data = JSON.stringify({ content });
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "content.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClick = () => {
    setContent(textareaRef.current.value);
  };

  const displayContent = () => {
    alert(content + "hello");
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      handleClick();
    } else if (e.ctrlKey && e.shiftKey) {
      let lastWord = "";
      for (let i = textareaRef.current.value.length - 1; i >= 0; i--) {
        if (textareaRef.current.value[i] === "<") {
          lastWord = textareaRef.current.value[i] + lastWord;
          break;
        }
        lastWord = textareaRef.current.value[i] + lastWord;
      }

      if (
        lastWord.startsWith("<") &&
        !lastWord.startsWith("</") &&
        lastWord.endsWith(">")
      ) {
        const closingTag = `</${lastWord.slice(1)}`;
        setEditor((prev) => prev + "\n" + "\n" + closingTag);
      }
    }
  };

  useEffect(() => {
    const currentTextarea = textareaRef.current;

    if (currentTextarea) {
      currentTextarea.addEventListener("keydown", handleKeyDown);

      return () => {
        currentTextarea.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [handleKeyDown]);
  return (
    <div className="relative flex flex-col md:flex-row w-full h-screen text-yellow-300 wrapper font-techy">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-screen bg-gray-300 border-2 border-yellow-300 editor">
        <h1 className="absolute top-0 left-0 w-full mt-3 font-techy text-3xl text-center">
          Editor
        </h1>
        <textarea
          ref={textareaRef}
          className="w-full h-full overflow-auto bg-gray-700 px-4 py-12"
          value={editor}
          onChange={(e) => {
            setEditor(e.target.value);
          }}
        ></textarea>
        <button
          className="absolute bottom-2 right-2 font-mono text-2xl shadow-md rounded-sm w-32 hover:bg-slate-400 bg-yellow-300 text-red-500"
          onClick={handleClick}
        >
          Preview
        </button>
      </div>
      <div className="relative w-full md:w-1/2 h-1/2 md:h-screen overflow-auto bg-gray-800 border-2 border-yellow-300 preview">
        <h1 className="absolute top-0 left-0 w-full mt-3 font-techy text-3xl text-center">
          Preview
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="mt-10 ml-2"
          onClick={displayContent}
        />
      </div>
      <button
        className="absolute bottom-2 right-2 font-mono text-2xl shadow-md rounded-sm w-32 hover:bg-slate-400 bg-yellow-300 text-red-500"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}

export default Page;
