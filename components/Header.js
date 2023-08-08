import Link from 'next/link';
export default function Header() {
  const menus = [
    { title: 'Home', link: '/' },
    { title: 'Chat', link: 'chat' },
    { title: 'News', link: 'news' },
    { title: 'Emergency', link: 'emergency' },
    { title: 'Guide', link: 'guide' },
    { title: 'Our future plans', link: 'plans' },
  ];
  return (
    <div className="header flex justify-end bg-pink-500 shadow-md">
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
  );
}
