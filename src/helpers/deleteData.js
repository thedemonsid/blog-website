const axios = require("axios");

export async function deleteBlog(id) {
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `/api/blogs/${id}`,
    headers: {},
  };
  try {
    const response = await axios.request(config);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
