import toast from "react-hot-toast";
import axiosInstance from "../services/axios.js";
import { create } from "zustand";

const usePostStore = create((set) => ({
  allPosts: null,
  isLoadingAllPosts: false,

  getAllPosts: async () => {
    try {
      set({ isLoadingAllPosts: true });
      const res = await axiosInstance.get("/social-media/posts");
      set({ isLoadingAllPosts: false, allPosts: res.data.data });
      toast.success(res.data.message);
    } catch (error) {
      set({ isLoadingAllPosts: false });
      toast.error(res.data.message);
    }
  },
}));


export default usePostStore