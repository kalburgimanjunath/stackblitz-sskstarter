import Link from 'next/link';
export default function Header() {
  const menus = ['chat', 'news', 'Emergency', 'Guide', 'Our future plans'];
  return (
    <div className="header">
      {menus &&
        menus.map((item) => {
          return (
            <div>
              <Link href={`${item}`}>{item.toLocaleUpperCase()}</Link>
            </div>
          );
        })}
    </div>
  );
}
