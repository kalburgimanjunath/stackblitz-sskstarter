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
  return (
    <div className="news">
      {news &&
        news.map((item) => {
          return (
            <>
              <div>{item.title.toLocaleUpperCase()}</div>
              <div>{item.description.toLocaleUpperCase()}</div>
            </>
          );
        })}
    </div>
  );
}
