"use client"
import React, { useState } from 'react';

function Page() {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };



  const handleSave = () => {
    // save the content to a json file
    const data = JSON.stringify({ content });
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'content.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  const handleClick = () => {
    const editorContent = document.querySelector('.editor textarea').value;
    setContent(editorContent);
  };

  const displayContent = () => {
    alert(content + "hello")
  }

  return (
    <div className='relative flex flex-col md:flex-row w-full h-screen text-yellow-300 wrapper font-techy'>
      <div className='relative w-full md:w-1/2 h-1/2 md:h-screen bg-gray-300 border-2 border-yellow-300 editor'>
        <h1 className='absolute top-0 left-0 w-full mt-3 font-techy text-3xl text-center'>Editor</h1>
        <textarea className='w-full h-full overflow-auto bg-gray-700 '></textarea>
        <button className='absolute bottom-2 right-2 font-mono text-2xl shadow-md rounded-sm w-32 hover:bg-slate-400 bg-yellow-300 text-red-500' onClick={handleClick}>Preview</button>
      </div>
      <div className='relative w-full md:w-1/2 h-1/2 md:h-screen overflow-auto bg-gray-800 border-2 border-yellow-300 preview'>
        <h1 className='absolute top-0 left-0 w-full mt-3 font-techy text-3xl text-center'>Preview</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} className='mt-10 ml-2' onClick={displayContent} />
      </div>
      <button className='absolute bottom-2 right-2 font-mono text-2xl shadow-md rounded-sm w-32 hover:bg-slate-400 bg-yellow-300 text-red-500' onClick={handleSave}>Save</button>
    </div>
  );
}

export default Page;