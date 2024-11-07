import { useEffect, useState } from "react";
import { CardAside } from "./components/CardAside";
import { Post } from "./components/Post";
import { Title } from "./components/Title";

export type User = {
id: number;
name: string;
role: string;
profileURL: string;
}

export type comment = {
  userId: number;
  content: string;
  publishedAt: string;
  likes: number;
}

export type Post = {
  id: number;
  userId: number;
  content: string;
  hashtags: string[];
  comments: {
    
      userId: number,
      content: string,
      publishedAt: string,
      likes: number,
    
  }[]
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]) 

  async function getPosts() {
    try {
      const response = await fetch('http://localhost:3000/posts')
      const data: Post[] = await response.json()
      setPosts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Title />
      <div className="flex justify-center gap-8 items-start py-8 bg-zinc-900 h-full w-screen">
        <CardAside />
        <div className="grid grid-cols-1 gap-12 w-full max-w-2xl">
        {posts.map((post) => (<Post key={post.id} {...post} />))}
        </div>
        
      </div>
    </>
  );
}
