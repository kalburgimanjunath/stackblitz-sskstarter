export default function Newsbox({ posts }) {
  return (
    <div className="grid grid-cols-3 ">
      {posts &&
        posts.map((item) => {
          return (
            <div className="shadow-lg m-2 border-2  rounded-lg hover:-translate-y-1 cursor-pointer">
              <div>
                <img
                  src="https://picsum.photos/200/300"
                  width={'100%'}
                  className="h-20"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-blue-500 ">
                  {item.title.toUpperCase()}
                </h3>
                <div>{item.body}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
