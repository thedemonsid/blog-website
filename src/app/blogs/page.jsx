"use client";
import React, { useEffect, useState } from "react";
import { oneTimeBlogs } from "@/helpers/oneTimeBlogsFetch";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loading from "@/app/loading";
function formatDate(dateString) {
  const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const date = new Date(dateString);
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  let dateOfMonth = date.getDate();
  let suffix = "TH";
  if (dateOfMonth === 1 || dateOfMonth === 21 || dateOfMonth === 31) {
    suffix = "ST";
  } else if (dateOfMonth === 2 || dateOfMonth === 22) {
    suffix = "ND";
  } else if (dateOfMonth === 3 || dateOfMonth === 23) {
    suffix = "RD";
  }

  return `${day}, ${month} ${dateOfMonth}${suffix}, ${year}`;
}
const Blog = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await oneTimeBlogs();
        setBlogs(data.Blogs);
      } catch (error) {
        console.error(error);
        alert("Error while fetching blogs");
        router.push("/");
      }
    };

    fetchBlogData();
  }, [router]);

  if (!blogs) {
    return <Loading></Loading>;
  }
  return (
    <div className="text-yellow-300 bg-gray-800 font-techy h-screen">
      <div className="p-8 pb-2 ">
        <h1 className="mt-0 text-2xl font-bold text-center sm:text-6xl ">
          The Vault
        </h1>
        {blogs.map((blog, index) => (
          <Link key={index} href={`/blogs/${blog._id}`} passHref>
            <div className="mb-8 cursor-pointer">
              <h2 className="font-bold tracking-widest uppercase text-md sm:text-2xl hover:text-red-500">
                {blog.title}
              </h2>
              <p className="text-gray-400">
                POSTED ON {formatDate(blog.createdAt)}
              </p>
              <br></br>
              <div className="border-b-2 border-orange-300"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
