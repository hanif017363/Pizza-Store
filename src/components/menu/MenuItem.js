import Image from "next/image";

function MenuItem() {
  return (
    <>
      <div className="">
        <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition duration-300">
          <div className="text-center">
            <Image
              className="mx-auto max-h-24 "
              src={"/pizza.png"}
              alt={"pizza"}
              width={100}
              height={100}
            />
          </div>
          <h4 className="font-semibold my-2 text-xl">Pepperoni Pizza</h4>
          <p className="text-gray-500 text-sm mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button className="logo-bg mt-3 text-sm text-white rounded-full px-4 py-2">
            Add To Cart $12.99
          </button>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
