import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Heart,
  icons,
  MessageCircleMore,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { Button } from "../components/ui/button";

const PostCard = (post) => {
    console.log(post)
  return (
    <div className="bg-card p-5 rounded-lg mb-5">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="w-12 h-12 ">
              <AvatarImage ssrc={post?.post.author.account.avatar.url}  />
              <AvatarFallback className="bg-background">CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-[600]">{`${post?.post.author?.firstName} ${post?.post.author?.lastName}`}</h1>
              <h1 className="text-muted-foreground">Just Now</h1>
            </div>
          </div>
          <div className="ml-15">
            <h1>{post?.post?.content}</h1>
            <div className="flex mt-3 gap-5 justify-between">
              <p className="flex gap-2">
                <Heart size={18}/> {post?.post.likes} likes
              </p>
              <p>{post?.post.comments} Comments</p>
            </div>
            <div className="flex  gap-5 justify-end mt-6">
              <Button size={"default"}>
                <ThumbsUp size={20} />
              </Button>
              <Button size={"icon"}>
                <MessageCircleMore size={20} />
              </Button>
              <Button size={"icon"}>
                <Share2 size={20} />
              </Button>
            </div>
          </div>
        </div>
  )
}

export default PostCard