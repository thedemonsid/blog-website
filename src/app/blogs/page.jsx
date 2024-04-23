import Link from 'next/link';
import React from 'react';

const blogPosts = [
  { title: 'DEMO DEMO DEMO DEMO DEMO', date: 'POSTED ON THURSDAY, APRIL 4TH, 2024' },
  { title: 'COPY WRITING LIKE TONY KAKKAR ', date: 'POSTED ON SUNDAY, JULY 30TH, 2023' },
  { title: 'THE DEMON SID', date: 'POSTED ON FRIDAY, JULY 28TH, 2023' },
  { title: 'THE DEMON SID', date: 'POSTED ON FRIDAY, JULY 28TH, 2023'},
  { title: 'VDCDS FWFPEWFSEWFFEWOFO', date: 'POSTED ON FRIDAY, JULY 28TH, 2023' },
  { title: 'VDCDS FWFPEWFSEWFFEWOFO', date: 'POSTED ON FRIDAY, JULY 28TH, 2023' },
  { title: 'VDCDS FWFPEWFSEWFFEWOFO', date: 'POSTED ON FRIDAY, JULY 28TH, 2023' },


];

const Blog = () => {
  return (
    <div className='text-yellow-300 bg-gray-800 font-techy'>
      <div className="p-8 pb-2 ">
        <h1 className='mt-0 text-2xl font-bold text-center sm:text-6xl '>The Vault</h1>
        {blogPosts.map((post, index) => (
          <Link key={index} href={`/...posts`} passHref>
            <div className="mb-8 cursor-pointer">
              <h2 className="font-bold tracking-widest uppercase text-md sm:text-2xl hover:text-red-500">{post.title}</h2>
              <p className="text-gray-400">{post.date}</p>
              <br></br>
              <div className='border-b-2 border-orange-300'></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;