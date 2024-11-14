import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full grid grid-cols-[20%_80%] items-center p-6">
      <div className="text-3xl font-bold">全球跟團</div>
      <div className="space-x-4 flex justify-center">
        <Link className="nav-link" href="/">精選推薦</Link>
        <Link className="nav-link" href="/">東南亞</Link>
        <Link className="nav-link" href="/">韓國</Link>
        <Link className="nav-link" href="/">歐洲</Link>
        <Link className="nav-link" href="/">紐澳</Link>
        <Link className="nav-link" href="/">美加</Link>
        <Link className="nav-link" href="/">印度西亞非</Link>
        <Link className="nav-link" href="/">高雄出發</Link>
      </div>
    </nav>
  );
}
