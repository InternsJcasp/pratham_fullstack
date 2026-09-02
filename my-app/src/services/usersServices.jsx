import UserApiInstance from "../api/api";

export const getAllPost = async () => {
  const response = await UserApiInstance.get("/posts");
  return response.data;
};

export const createPost = async (post) => {
  const response = await UserApiInstance.post("/posts", post);
  return response.data;
};

export const updatePosts = async (id, post) => {
  const response = await UserApiInstance.put(`/posts/${id}`, post);
  return response.data;
};

export const deletePosts = async (id) => {
  const response = await UserApiInstance.delete(`/posts/${id}`);
  return response.data;
};
