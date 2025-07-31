import axiosInstance from "../services/axios.js";
import toast from "react-hot-toast";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingCurrenUser: false,

  isSigningUpUser: false,
  isLoggingInuser: false,
  isLoggingOutuser: false,

  registerUser: async (data) => {
    try {
      set({ isSigningUpUser: true });
      const res = await axiosInstance.post("/users/register", data);
      set({ isSigningUpUser: false });
      toast.success(res.data?.message || "User Signed Up successfully");
    } catch (error) {
      set({ isSigningUpUser: false });
      toast.error(res.data?.message || "User Signed Up failed");
    }
  },

  getCurrentUser: async () => {
    try {
      set({ isCheckingCurrenUser: true });
      const res = await axiosInstance.get("/social-media/profile");
      set({ isCheckingCurrenUser: false, authUser: res.data.data });
    } catch (error) {
      set({ isCheckingCurrenUser: false });
    }
  },

  loginUser: async (data) => {
    try {
      set({ isLoggingInuser: true });
      const res = await axiosInstance.post("/users/login", data);
      set({ isLoggingInuser: false, authUser: res.data.data });
      toast.success(res.data.message || "User LoggedIn");
    } catch (error) {
      set({ isLoggingInuser: false });
      toast.error(res.data.message || "User LoggedIn failed");
    }
  },

  logoutUser: async () => {
    try {
      set({ isLogingOutuser: true });
      const res = await axiosInstance.post("/users/logout");
      set({ isLogingOutuser: false, authUser: res.data.data });
      toast.success(res.data?.message || "User LoggedIn");
    } catch (error) {
      set({ isLogingOutuser: false });
      toast.error(res.data?.message || "User LoggedIn failed");
    }
  },
}));


export default useAuthStore
