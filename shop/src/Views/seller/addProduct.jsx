import React from "react";

function addProduct() {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <div className="justify-between flex">
          <h2 className="justify-start items-start font-bold text-white text-[20px]">
            Add product
          </h2>
          <button className="justify-between items-end text-white font-semibold bg-teal-400 px-5 py-2 rounded-md hover:bg-teal-400 shadow-lg hover:shadow-teal-400">
            Products
          </button>
        </div>

        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-white">
          <div className=" flex flex-col w-full gap-2">
            <label
              className="  text-[#d0d2d6] mb-3 mt-2 gap-1 flex"
              htmlFor="name"
            >
              Product Name
            </label>
            <input
              className="px-6 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
              type="text"
              id="name"
              name="product_name"
              placeholder="Product Name"
            />
          </div>
          <div className=" flex flex-col w-full gap-2">
            <label
              className="  text-[#d0d2d6] mb-3 mt-2 gap-1 flex"
              htmlFor="name"
            >
              Brand
            </label>
            <input
              className="px-6 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
              type="text"
              id="name"
              name="b_name"
              placeholder="Brand"
            />
          </div>
        </div>
        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-white">
          <div className=" flex flex-col w-full gap-2">
            <label
              className="  text-[#d0d2d6] mb-3 mt-2 gap-1 flex"
              htmlFor="name"
            >
              Category
            </label>
            <select className="px-6 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
              type="text"
              id="name"
              name="product_name"
              >
              <option>--select Category--</option>
              <option>DCL</option>
              <option>Apple</option>
               <option>hp</option>
              </select>
          </div>
          <div className=" flex flex-col w-full gap-2">
            <label
              className="  text-[#d0d2d6] mb-3 mt-2 gap-1 flex"
              htmlFor="name"
            >
              Stock
            </label>
            <input
              className="px-6 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
              type="text"
              id="name"
              name="b_name"
              placeholder="stock"
            />
          </div>
        </div>
        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-white">
          <div className=" flex flex-col w-full gap-2">
            <label
              className="  text-[#d0d2d6] mb-3 mt-2 gap-1 flex"
              htmlFor="name"
            >
            Price
            </label>
            <input
              className="px-6 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
              type="number"
              id="name"
              name="product_name"
              placeholder="Product Name"
            />
          </div>
          <div className=" flex flex-col w-full gap-2">
            <label
              className="  text-[#d0d2d6] mb-3 mt-2 gap-1 flex"
              htmlFor="name"
            >
              Brand
            </label>
            <input
              className="px-6 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
              type="text"
              id="name"
              name="b_name"
              placeholder="Brand"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default addProduct;
