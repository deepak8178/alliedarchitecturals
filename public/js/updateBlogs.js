import axios from "axios";

export const updateBlogs = async function (data, slug) {
  try {
    console.log(slug);
    const url = `http://127.0.0.1:3000/api/blogs/${slug}`;
    console.log(url);
    const res = await axios({
      method: "PATCH",
      url,
      data,
    });

    if (res.data.status === "success") {
      alert("Blog updated successfully!");
    }
  } catch (e) {
    alert("Error in updating the blog");
  }
};

export const deleteBlogs = async function (slug) {
  try {
    const url = `http://127.0.0.1:3000/api/blogs/${slug}`;
    const res = await axios({
      method: "DELETE",
      url,
    });

    if (res.data.status === "success") {
      alert("Blog deleted successfully!");
    }
  } catch (e) {
    alert("Error in deleting the blog");
  }
};
