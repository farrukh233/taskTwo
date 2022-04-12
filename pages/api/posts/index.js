import { posts } from "../../../_posts/posts";

export default function handler(req, res) {
  res.status(200).json(posts);
}
