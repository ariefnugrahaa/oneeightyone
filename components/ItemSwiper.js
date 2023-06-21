import Image from "next/image";
import { useEffect } from "react";

export default function ItemSwiper({ data }) {
  useEffect(() => {
    console.log(data.title);
  }, []);

  return (
    <section class="w-full h-screen bg-no-repeat bg-center px-0 overflow-hidden">
      <Image
        fill
        src={data.image}
        class="w-full h-full absolute top-0 left-0 z-0
           lg:object-fill object-cover"
        alt="Image alt text"
      />

      <div className="overlay"></div>

      <div class="absolute bottom-0 mb-12 md:mb-12 lg:mb-28 left-0 px-0">
        <div class="flex flex-col">
          <div class="w-full sm:w-5/12 md:w-4/12 pl-3 ml-3">
            <h1 class="text-3xl md:text-2xl sm:text-1xl font-bold">
              {data.title}
            </h1>
            <p class="sm:text-sm md:text-md lg:text-lg mr-10 md:mr-2 lg:mr-12">
              {data.subtitle}
            </p>
          </div>

          <div class="btnContainer flex mt-3 w-full pl-3 ml-3">
            <button class="button mr-2 md:w-38 md:h-10 lg:w-44 lg:h-12">
              View Profile
            </button>
            <button class="buttonTransparent md:w-38 md:h-10 lg:w-44 lg:h-12">
              See Product
            </button>
          </div>

          <div class="flex mt-10 h-px bg-[#FFF] w-11/12 md:w-6/12 lg:w-4/12" />
        </div>
      </div>
    </section>
  );
}
