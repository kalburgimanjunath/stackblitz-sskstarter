import { useState, useEffect } from 'react';
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
      <div className="grid grid-cols-3 ">
        {posts &&
          posts.map((item) => {
            return (
              <div className="shadow-lg m-2 border-2 p-5 rounded-lg hover:-translate-y-1 cursor-pointer">
                <h3 className="font-bold text-blue-500 ">
                  {item.title.toUpperCase()}
                </h3>
                <div>{item.body}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
