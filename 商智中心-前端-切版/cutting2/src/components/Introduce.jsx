import Image from "next/image";

function Introduce({ data, imageSrc }) {
  return (
    <section className="bg-gray-200 text-gray-800 overflow-hidden rounded-lg">
      <Image
        src={imageSrc}
        alt={"card image"}
        width={400}
        height={250}
        className="w-full h-30 object-cover"
      />
      <article>
        {data.map(({ title, description, price }) => (
          <section
            key={title}
            className="border-b last:border-b-0 border-gray-400"
          >
            <article className="p-3">
              <h3 className="font-semibold">{title}</h3>
              <div className="text-sm flex justify-between items-center">
                <p>{description}</p>
                <div className="flex items-center">
                  <span className="text-base font-bold mr-1 text-orange-400">
                    {price}
                  </span>
                  起
                </div>
              </div>
            </article>
          </section>
        ))}
      </article>
    </section>
  );
}

export default Introduce;
