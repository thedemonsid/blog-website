"use client";
import React, { useEffect, useState } from "react";
import { oneTimeBlogs } from "@/helpers/oneTimeBlogsFetch";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
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

  return (
    <div className="flex justify-center items-center bg-gray-800">
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className=" px-4 h-screen max-w-[1000px]"
      />
    </div>
  );
};

export default Post;
