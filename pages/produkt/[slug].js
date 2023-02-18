import swell from "../../swell";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Product({ product }) {
  const router = useRouter();
  async function checkout(productId) {
    await swell.cart.setItems([]);
    await swell.cart.addItem({
      product_id: productId,
      quantity: 1,
    });
    const cart = await swell.cart.get();
    router.push(cart.checkout_url);
  }
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="max-w-2xl px-4 mx-auto mt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col mx-auto sm:flex-row">
          <Image
            alt="coffee"
            className="rounded-lg"
            src={product.images[0].file.url}
            width={560}
            height={640}
            objectFit="cover"
          />
          <div className="flex flex-col mt-10 sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold text-gray-900 uppercase sm:text-5xl sm:tracking-tight lg:text-5xl">
              {product.name}
            </h1>
            <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              ${product.price}
            </h1>
            <button
              className="px-4 py-3 mt-5 font-medium text-white bg-orange-600 border border-transparent rounded-md shadow-sm hover:bg-orange-400 sm:px-8"
              onClick={() => checkout(product.id)}
            >
              Checkout
            </button>
            <div className="pt-10 mt-10 mb-5 font-bold border-t border-gray-200">
              Description
            </div>
            <p className="max-w-xl">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const swellProduct = await swell.products.get(params.slug);
  return {
    props: {
      product: swellProduct,
    },
  };
}
export async function getStaticPaths() {
  const swellProducts = await swell.products.list();
  let fullPaths = [];
  for (let product of swellProducts.results) {
    fullPaths.push({ params: { slug: product.id } });
  }

  return {
    paths: fullPaths,
    fallback: "blocking",
  };
}
