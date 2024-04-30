"use client";
import React, { useEffect, useState } from "react";
import { oneTimeBlogs } from "@/helpers/oneTimeBlogsFetch";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import "@/app/globals.css"
const Post = ({ params }) => {
  const router = useRouter();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await oneTimeBlogs(params.blogId);
        let Blog = data.Blogs.find((blog) => blog._id === params.blogId);
        setBlog(Blog);
      } catch (error) {
        console.error(error);
        router.push("/blogs");
      }
    };

    fetchBlogData();
  }, [params.blogId, router]);

  if (!blog) {
    return <Loading></Loading>;
  }

  return <div className=" bg-gray-800 pb-2">
   <div className="w-[100%]" dangerouslySetInnerHTML={{__html: blog.content}}></div>
  </div>;
};

export default Post;
