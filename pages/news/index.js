import { useState, useEffect } from 'react';
import Newsbox from './newsbox';
export default function News() {
  const news = [
    {
      id: 1,
      title: 'news title',
      description: 'news description',
      date_created: '10-10-2023',
    },
    {
      id: 2,
      title: 'news title2',
      description: 'news description2',
      date_created: '10-10-2023',
    },
  ];
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
    <div className="news">
      <h2>News</h2>
      <Newsbox posts={posts} />
    </div>
  );
}
