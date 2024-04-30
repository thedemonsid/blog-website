import { fetchBlogs } from "./fetchData";
let blogs = null;

export async function oneTimeBlogs() {
  if (blogs !== null && blogs !== undefined) {
    return blogs;
  } else {
    blogs = await fetchBlogs();
    if (blogs === null || blogs === undefined) {
      throw new Error("Failed to fetch blogs");
    }
    return blogs;
  }
}
