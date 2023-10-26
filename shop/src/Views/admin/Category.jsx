import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagenation from "../Pagenation";
import { BsImage } from "react-icons/bs";
function Category() {
  const [parPage, setParPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  //const [searchValue, setSearchValue] = useState();
  const [show] = useState();

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex flex-warp w-full">
        <div className="w-full lg-w-7/12">
          <div className="w-full p-4 bg-[#283046] rounded-md">
            <div className="flex justify-between items-center">
              <select
                onChange={(e) => setParPage(parseInt(e.target.value))}
                className="px-4 py-3 hover:border-indigo-500 outline-none bg-[#283046]  border border-slate-700 rounded-md text-[#d0d2d6]"
              >
                <option value="5">5c</option>
                <option value="5">15c</option>
                <option value="5">35c</option>
              </select>
              <input
                className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="text"
                placeholder="search"
                name="search"
              />
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-[#d0d2d6]">
                <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
                  <tr>
                    <th scope="col" className="py-3 px-4">
                      NO
                    </th>
                    <th scope="col" className="py-3 px-4">
                      IMAGE
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Name
                    </th>

                    <th scope="col" className="py-3 px-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((d, i) => (
                    <tr key={i}>
                      <td className="py-3 px-6 font-medium whitespace-nowrap">
                        {d}
                      </td>
                      <td className="py-3 px-6 font-medium whitespace-nowrap">
                        <img
                          className="w-[45px] h-[45px]"
                          src={`http://localhost:3000/images/category/${d}.jpg`}
                          alt=""
                        />
                      </td>
                      <td className="py-3 px-6 font-medium whitespace-nowrap">
                        <span>Sports</span>
                      </td>

                      <td className="py-3 px-6 font-medium whitespace-nowrap">
                        <div className="items-center gap-4 justify-start flex">
                          <Link className="px-[8px] py-[5px] bg-green-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                            <FaEdit />
                          </Link>
                          <Link className="px-[8px] py-[5px] bg-red-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                            <FaTrash />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="justify-end mt-4 bottom-4 right-4 w-full flex">
              <Pagenation
                pageNumber={currentPage}
                setPageNumber={setCurrentPage}
                totalPage={50}
                parPage={parPage}
                showItem={4}
              />
            </div>
          </div>
        </div>

        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-20 top-0 transition-all duration-500`}
        >
          <div className="w-full pl-5">
            <div className="bg-[#283046] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-[#d0d2d6]">
              <h1 className="text-[#d0d2d6]  font-semibold text-xl mb-4 w-full text-center">
                Add Category
              </h1>
            </div>
            <form>
              <div className="flex flex-col w-full gap-1 mb-3">
                <label
                  className="  text-[#d0d2d6] mb-3 mt-2 gap-1 flex"
                  htmlFor="name"
                >
                  Category Name
                </label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                  type="text"
                  id="name"
                  name="category_name"
                  placeholder="Category Name"
                />
              </div>
              <div>
                <label
                  className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-indigo-500 w-full border-[#d0d2d6]"
                  htmlFor="image"
                >
                  <span className="text-[d0d2d6]">
                    <BsImage className="text-[#d0d2d6]" />
                  </span>
                  <span className="text-[#d0d2d6]">Select Image</span>
                </label>
                <input type="hidden" name="image" id="image" />
              </div>
              <div>
                <button className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-2">
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
