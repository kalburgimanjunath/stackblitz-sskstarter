export default function Guide() {
  const resource_books = [
    {
      id: 1,
      title: 'title1',
      description: 'description1',
      author: 'manjunath',
    },
    {
      id: 2,
      title: 'title2',
      description: 'description2',
      author: 'manjunath',
    },
  ];
  const resource_audio = [
    {
      id: 1,
      title: 'title1',
      description: 'description1',
      author: 'manjunath',
    },
    {
      id: 2,
      title: 'title2',
      description: 'description2',
      author: 'manjunath',
    },
  ];
  const resource_videos = [
    {
      id: 1,
      title: 'title1',
      description: 'description1',
      author: 'manjunath',
    },
    {
      id: 2,
      title: 'title2',
      description: 'description2',
      author: 'manjunath',
    },
  ];
  return (
    <div>
      <h2>Guide</h2>
      <div>
        <h2>Books</h2>
        <div className="flex">
          {resource_books &&
            resource_books.map((item) => {
              return (
                <div>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                  <div>{item.author}</div>
                </div>
              );
            })}
        </div>
      </div>

      <div>
        <h2>Audios</h2>
        <div className="flex">
          {resource_audio &&
            resource_audio.map((item) => {
              return (
                <div>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                  <div>{item.author}</div>
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <h2>Videos</h2>
        <div className="flex">
          {resource_videos &&
            resource_videos.map((item) => {
              return (
                <div>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                  <div>{item.author}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
