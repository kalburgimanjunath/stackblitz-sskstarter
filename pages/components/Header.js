import Link from 'next/link';
export default function Header() {
  const menus = [
    { title: 'Chat', link: 'chat' },
    { title: 'News', link: 'news' },
    { title: 'Emergency', link: 'emergency' },
    { title: 'Guide', link: 'guide' },
    { title: 'Our future plans', link: 'plans' },
  ];
  return (
    <div className="header">
      {menus &&
        menus.map((item) => {
          return (
            <div>
              <Link href={`${item.link}`}>
                {item.title.toLocaleUpperCase()}
              </Link>
            </div>
          );
        })}
    </div>
  );
}
