import React from "react";

import { Blog } from "../../types";

interface Props {
  blog: Blog;
}

export const Blogs: React.FC<Props> = ({ blog }) => {
  if (!blog.title) return null;

  return (
    <section style={{ marginBottom: 40 }}>
      <h2>{blog.title}</h2>
      {blog.summary && <p>{blog.summary}</p>}
    </section>
  );
};
