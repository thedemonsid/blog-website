const axios = require("axios");
// Updating blog by Id(String) and newData(Object)
/*
newData format
let newData = {
    title: "Blog Post 324",
    content: "This is the content of blog post 342.",
    images: [
        {
            position: 12,
            url: "http://example.com/image234.jpg"
        }
    ],
    username: "user_23",
    comments: [],
    number_of_clicks: 0,
    number_of_likes: 0
  }
*/
export async function updateBlog(id, newdata) {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `/api/blogs/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(newdata),
  };
  try {
    const response = await axios.request(config);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
export async function updateUser(id, newdata) {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `/api/user/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(newdata),
  };
  try {
    const response = await axios.request(config);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}