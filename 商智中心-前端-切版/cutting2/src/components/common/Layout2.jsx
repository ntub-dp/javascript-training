import Link from "next/link";

import Img1 from "/public/images/img(2-1).jpg";
import Img2 from "/public/images/img(2-2).jpg";
import Img3 from "/public/images/img(2-3).jpg";
import Img4 from "/public/images/img(2-4).jpg";
import Img5 from "/public/images/img(2-5).jpg";
import Img6 from "/public/images/img(2-6).png";
import Card from "../Card";

const datas = [
  {
    img: Img1,
    title: "Title 1",
    imgDescription: "大三巴",
    price: "23,500",
  },
  {
    img: Img2,
    title: "Title 2",
    imgDescription: "晴空塔",
    price: "21,900",
  },
  {
    img: Img3,
    title: "Title 3",
    imgDescription: "美食",
    price: "25,900",
  },
  {
    img: Img4,
    title: "Title 4",
    imgDescription: "特色美食",
    price: "25,900",
  },
  {
    img: Img5,
    title: "Title 5",
    imgDescription: "療癒海景度假勝地",
    price: "25,900",
  },
  {
    img: Img6,
    title: "Title 6",
    imgDescription: "豐富的歷史文化",
    price: "25,900",
  },
];

const Navbar = () => (
  <nav className="w-full grid grid-cols-[30%_70%] items-center p-6">
    <div className="text-3xl font-bold">自遊最夯</div>
    <div className="space-x-4 flex">
      <Link className="nav-link" href="/">
        精選推薦
      </Link>
      <Link className="nav-link" href="/">
        日本
      </Link>
      <Link className="nav-link" href="/">
        東南亞
      </Link>
      <Link className="nav-link" href="/">
        島嶼/歐洲
      </Link>
      <Link className="nav-link" href="/">
        高雄出發
      </Link>
    </div>
  </nav>
);

const keywords = [
  "護照簽證",
  "夢幻海島旅行",
  "星宇機加酒",
  "長龍大旅行家",
  "國外機加酒生日折600",
];

const Layout2 = () => {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-[30%_70%] px-6 min-h-[50vh] mb-20">
        <aside className="relative">
          <h2 className="text-lg font-bold mb-2">大家都在找</h2>
          <div className="flex gap-2 text-sm flex-wrap">
            {keywords.map((keyword, index) => (
              <span key={index}>{keyword}</span>
            ))}
          </div>
          <div className="absolute w-[90%] border h-32 bottom-0 left-0"></div>
        </aside>
        <section className="grid grid-cols-2 gap-5">
          {datas.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Layout2;
