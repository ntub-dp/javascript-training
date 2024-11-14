import Image from "next/image";

export default function Card({ data }) {
  const { img, title, imgDescription, price } = data;
  return (
    <section className="relative grid grid-cols-[4fr_5fr] rounded-lg overflow-hidden">
      <div className="custom-shadow">
        <Image
          src={img}
          width={300}
          height={300}
          alt={imgDescription}
          className="h-full w-full object-cover"
        />
        <span className="absolute text-white  m-2 text-xl left-0 bottom-0">{imgDescription}</span>
      </div>
      <article className="p-3 bg-gray-200">
        <h3 className="text-l</article>g">{title}</h3>
        <div className="flex items-center absolute bottom-0 right-0 mx-3 w-max h-10">
          <span className="text-base font-bold mr-1 text-orange-400">
            {price}
          </span>
          起
        </div>
      </article>
    </section>
  );
}
