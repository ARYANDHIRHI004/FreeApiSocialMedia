import useAuthStore from "../stores/useAuthStore";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import React, { useEffect } from "react";
import PostCard from "../components/PostCard";
import usePostStore from "../stores/usePostStore";
import { Loader2Icon } from "lucide-react";
import InfiniteScroll from "react-infinite-scroll-component";

const HomePage = () => {
  const { authUser } = useAuthStore();
  const { allPosts, getAllPosts, isLoadingAllPosts } = usePostStore();

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="pt-20 px-8 flex gap-5">
      <div className=" w-[20%] rounded-lg ">
        <div className=" bg-accent rounded-lg flex flex-col pb-4 items-center gap-5">
          <h1 className=" bg-primary text-white w-full rounded-t-2xl p-4 text-center text-2xl font-[600] ">Profile</h1>
          <Avatar className="w-20 h-20">
            <AvatarImage src={authUser?.account?.avatar.url} />
            <AvatarFallback className="bg-background">CN</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl">{`${authUser?.firstName} ${authUser?.lastName}`}</h1>
        </div>
        <div>suggestions</div>
      </div>
      <div className="bg-accent w-[60%] rounded-lg p-5">
        {/* <InfiniteScroll
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more items to display.</p>}
        > */}
          {!isLoadingAllPosts ? (
            allPosts?.posts.map((post) => <PostCard post={post} />)
          ) : (
            <Loader2Icon className="animate-spin" />
          )}
        {/* </InfiniteScroll> */}
      </div>
      <div className="bg-background w-[20%] rounded-lg"> notifications</div>
    </div>
  );
};

export default HomePage;
