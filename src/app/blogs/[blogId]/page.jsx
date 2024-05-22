// "use client";
// import React, { useEffect, useState } from "react";
// import { oneTimeBlogs } from "@/helpers/oneTimeBlogsFetch";
// import { useRouter } from "next/navigation";
// import Loading from "@/app/loading";
// import "@/app/globals.css"
// import CommentSection from "@/components/commentcompo";
// const Post = ({ params }) => {
//   const router = useRouter();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const fetchBlogData = async () => {
//       try {
//         const data = await oneTimeBlogs(params.blogId);
//         let Blog = data.Blogs.find((blog) => blog._id === params.blogId);
//         setBlog(Blog);
//       } catch (error) {
//         console.error(error);
//         router.push("/blogs");
//       }
//     };

//     fetchBlogData();
//   }, [params.blogId, router]);

//   if (!blog) {
//     return <Loading></Loading>;
//   }

//   return <div className="flex flex-col justify-center pb-2 bg-gray-800 ">
//    <div className="w-[100%]" dangerouslySetInnerHTML={{__html: blog.content}}></div>
//    <CommentSection></CommentSection>
//   </div>;
// };

// export default Post;
"use client";
import React, { useEffect, useState } from "react";
import { oneTimeBlogs } from "@/helpers/oneTimeBlogsFetch";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import "@/app/globals.css"
import CommentSection from "@/components/commentcompo";

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
    <div className="flex flex-col justify-center pb-2 bg-gray-800 ">
      <div className="w-3/4 mx-auto md:w-2/3 lg:w-1/2">
        <div
          className="w-[100%] prose prose-lg prose-invert"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      
      </div>
      <div className="ml-2 mr-2">
      <CommentSection></CommentSection>
      </div>
    
    </div>
  );
};

export default Post;
