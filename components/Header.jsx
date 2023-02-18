import Image from "next/image";

export default function Header({ scrollHandler }) {
  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              priority
              fill
              className="object-cover w-full h-full"
              src="/hero.jpg"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <p className="relative left-0 right-0 max-w-xl mx-auto mt-5 text-xl font-semibold tracking-wide text-center text-orange-600 uppercase">
              The Coffee House
            </p>
            <h1 className="mt-1 font-bold text-center text-gray-900 uppercase sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className="block text-white">Life is better with</span>
              <span className="block text-orange-500">coffee</span>
            </h1>

            <div className="max-w-xs mx-auto mt-10 sm:flex sm:max-w-none sm:justify-center">
              <button
                className="flex items-center justify-center px-4 py-3 text-base font-medium text-orange-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-orange-100 sm:px-8"
                onClick={scrollHandler}
              >
                Shop coffees
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
