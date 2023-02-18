import { useRef } from "react";
import Header from "../components/Header";
import swell from "../swell";
import ProductCard from "../components/ProductCard";

export default function Gallery({ data }) {
  let phoneRef = useRef();

  const scrollHandler = (e) => {
    e.preventDefault();
    phoneRef.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <div className="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="px-4 py-16 mx-auto sm:py-15 max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold text-gray-900 uppercase sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={(element) => (phoneRef = element)}
            >
              Crafted by us, for you
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data &&
            data.results.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>{" "}
    </>
  );
}

export async function getStaticProps() {
  const swellProducts = await swell.products.list();
  return {
    props: {
      data: swellProducts,
    },
  };
}
