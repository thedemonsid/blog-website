const axios = require("axios");
// Function to fetch all blogs
export async function fetchBlogs(id) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: id ? `/api/blogs/${id}` : "/api/blogs/",
    headers: {},
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
