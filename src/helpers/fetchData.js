const axios = require("axios");
// Function to fetch all blogs
export async function fetchBlogs() {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "/api/blogs/",
    headers: {},
  };
  try {
    const response = await axios.request(config);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
