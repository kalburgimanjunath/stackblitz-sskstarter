import Link from 'next/link';
export default function Header() {
  const menus = [
    { title: 'Home', link: '/' },
    { title: 'About Us', link: '/aboutus' },
    { title: 'Chat', link: 'chat' },
    { title: 'News', link: 'news' },
    { title: 'Emergency', link: 'emergency' },
    { title: 'Guide', link: 'guide' },
    { title: 'Our future plans', link: 'plans' },
  ];
  return (
    <div className="header flex justify-between bg-pink-500 shadow-md">
      <div>
        <img
          src="https://ssksamajsangareddy.files.wordpress.com/2010/02/220px-sahasrarjun_image.jpg?w=640"
          width="40"
          className="rounded-full p-2"
        />
      </div>
      <div className="flex ">
        {menus &&
          menus.map((item) => {
            return (
              <div className="p-2 text-white hover:bg-pink-300 hover:text-black hover:translate-y-1">
                <Link href={`${item.link}`} className="p-3">
                  {item.title}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
