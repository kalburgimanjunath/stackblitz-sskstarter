import { useState, useEffect } from 'react';
import Newsbox from './news/newsbox';
export default function Home() {
  const [posts, setPosts] = useState([]);
  const loadNews = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((result) => setPosts(result));
  };
  useEffect(() => {
    loadNews();
  }, []);
  return (
    <div className="m-20">
      <div className="shadow-lg p-5">
        <h1 className="text-6xl">Welcome to SSK community app</h1>
        <p className="text-2xl pt-2 pb-2">
          What we are and how to achieve success.
        </p>
        <div className="flex justify-end">
          <button className="mb-3 bg-blue-300 p-2 rounded-md text-black hover:bg-blue-500 hover:text-white">
            Know more
          </button>
        </div>
      </div>
      <div className="m-20">
        <h1 className="text-6xl">Recent Posts</h1>
        {posts && posts.length > 1 ? <Newsbox posts={posts} /> : ''}
      </div>
    </div>
  );
}
