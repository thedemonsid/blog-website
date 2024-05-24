import axios from "axios";

export async function createBlog(blogData) {
  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: "/api/blogs/",
    headers: {
      "Content-Type": "application/json",
    },
    data: blogData,
  };
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
