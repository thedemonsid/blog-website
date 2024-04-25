import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    blogs: [
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

export default User;
