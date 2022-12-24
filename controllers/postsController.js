const pug = require("pug");
const Post = require("../models/post/postModel");

async function getPosts(req, res) {
  //Get all posts from myBlogdb and send index.pug to the client
  try {
    const posts = await Post.find();
    res.render("index", { posts });
  } catch (err) {
    console.log(err);
  }
}

async function getPost(req, res) {
  //Get a post from myBlogdb and send post.pug to the client
  try {
    const postsdetail = await Post.findById(req.params.id);
    res.render("post", { postsdetail });
  } catch (err) {
    console.log(err);
  }
}

async function addPost(req, res) {
  //Create a new post and redirect the client to /
  try {
    const newPost = new Post(req.body);
    console.log(newPost);
    await newPost.save();
    res.redirect("/posts");
  } catch (err) {
    console.log(err);
  }
}

async function editPost(req, res) {
  //Update a post and redirect the client to /post
  res.render("editPost", {
    post: (await Post.findById(req.params.id)) ?? new Post(),
  });
}
async function updatePost(req, res) {
  //Update a post and redirect the client to /post
  try {
    console.log(req.body);
    console.log(req.params.id);
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/posts/post/" + req.params.id);
  } catch (err) {
    console.log(err);
  }
}

async function deletePost(req, res) {
  //Delete a post and redirect the client to /
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/posts");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getPosts,
  getPost,
  addPost,
  updatePost,
  editPost,
  deletePost,
};
