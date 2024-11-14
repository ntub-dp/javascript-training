import Navbar from "@/components/common/Navbar";
import Introduce from "@/components/Introduce";

import Img1 from "/public/images/img(1).jpg";
import Img2 from "/public/images/img(2).jpg";
import Img3 from "/public/images/img(3).jpg";

const data = [
  {
    title: "Title 1",
    description: "Lorem ipsum dolor sit amet",
    price: "23,500",
  },
  {
    title: "Title 2",
    description: "but also the leap into",
    price: "21,900",
  },
  {
    title: "Title 3",
    description: "consectetur adipiscing elit",
    price: "25,900",
  },
];


const Layout2 = () => {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-3 gap-5 px-6 justify-items-center items-center min-h-[80vh]">
        <Introduce imageSrc={Img1} data={data} />
        <Introduce imageSrc={Img2} data={data} />
        <Introduce imageSrc={Img3} data={data} />
      </main>
    </>
  );
};

export default Layout2;
