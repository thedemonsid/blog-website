import mongoose from "mongoose";
const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    images: {
      type: [
        {
          position: Number, // After How many words User wants an image
          url: String,
        },
      ],
    },
    username: {
      type: String,
    },
    comments: {
      type: [String],
    },
    number_of_clicks: {
      type: Number,
    },
    number_of_likes: {
      type: Number,
    },
  },
  { timestamps: true }
);

let Blog;
try {
  Blog = mongoose.model("Blog");
} catch (error) {
  Blog = mongoose.model("Blog", blogSchema);
}

module.exports = Blog;
