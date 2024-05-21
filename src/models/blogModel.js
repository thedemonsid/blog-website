import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    about: {
      type: String,
    },
    image: {
      type: String,
    },
    blogsWritten: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
    bookmarkedBlogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);

let User;
try {
  User = mongoose.model("User");
} catch (error) {
  User = mongoose.model("User", userSchema);
}
const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

let Comment;
try {
  Comment = mongoose.model("Comment");
} catch (error) {
  Comment = mongoose.model("Comment", commentSchema);
}

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
      default: [],
    },

    number_of_clicks: {
      type: Number,
      default: 0,
    },
    number_of_likes: {
      type: Number,
      default: 0,
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

export { User, Blog, Comment };

