import { Bookmark, Heart, Share2, ShoppingBag } from "lucide-react";
import modelImage from "./assets/modelImage.jpg";

function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row gap-14">
      {/* Left column - Main image */}
      <div className="md:w-1/2">
        <img
          src={modelImage}
          alt="Product"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right column - Product details */}
      <div className="md:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold">Embrace Sideboard</h1>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-xl bg-red-200 ">
              <Heart size={20} strokeWidth={2} className="text-red-500 " />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-xl bg-blue-200">
              <Bookmark size={20} strokeWidth={1.5} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-xl bg-blue-200">
              <Share2 size={20} strokeWidth={1.6} />
            </button>
          </div>
        </div>
        <p className="text-gray-500 mb-4">Teixeira Design Studio</p>

        <div className="my-8 border-b" />

        <div className="mb-4">
          <span className="text-2xl font-bold">$71.56</span>
          <span className="text-gray-500 line-through ml-2">$71.56</span>
        </div>

        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium text-gray-500">
            4.8 (67 Reviews)
          </span>
        </div>

        <p className="text-green-600 text-sm mb-6">
          93% of buyers have recommended this.
        </p>

        <div className="flex items-center mb-6 ">
          <div className="bg-gray-300 rounded-3xl">
            <button className="px-4 py-3  ">-</button>
            <input
              type="text"
              value="5"
              className="w-12 text-center bg-gray-300"
              readOnly
            />
            <button className="px-4 py-3  ">+</button>
          </div>
          <button className="ml-4 px-16 py-3 bg-blue-700 text-white rounded-3xl flex items-center">
            <ShoppingBag size={20} className="mr-2" />
            Add To Cart
          </button>
        </div>

        <div className="my-8 border-b" />

        <div className="grid grid-cols-4 gap-4 mb-6 ">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={modelImage}
              alt={`Thumbnail ${i + 1}`}
              className="w-full h-auto rounded-lg"
            />
          ))}
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-center text-red-500 mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span className="font-medium">Free Delivery</span>
            </div>
            <p className="text-sm text-gray-500">
              Enter your Postal code for Delivery Availability
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-center text-red-500 mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="font-medium">Return Delivery</span>
            </div>
            <p className="text-sm text-gray-500">
              Free 30 days Delivery Return.{" "}
              <span className="text-blue-500">Details</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
