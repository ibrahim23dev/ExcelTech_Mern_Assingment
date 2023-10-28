import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

function activeSeller() {
  //const [SetParPage] = useState(1);
  //const [currentPage, setCurrentPage]=useState(1);
  //const [searchValue, setSearchValue] = useState();
  //const [show,setShow] = useState();
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex flex-warp w-full">
        <div className="w-full lg-w-7/12">
          <div className="w-full p-4 bg-[#283046] rounded-md">
            <div className="flex justify-between items-center">
              <select className="px-4 py-3 hover:border-indigo-500 outline-none bg-[#283046]  border border-slate-700 rounded-md text-[#d0d2d6]">
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
                    Shop Name
                  </th>
                  <th scope="col" className="py-3 px-4">
                    PAYMENT
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Email
                  </th>

                  <th scope="col" className="py-3 px-4">
                    DEVISION
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Distict
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
                      <span>Mohammad Ibrahim</span>
                    </td>
                    <td className="py-3 px-6 font-medium whitespace-nowrap">
                      <span>Ibrahim Stor</span>
                    </td>
                    <td className="py-3 px-6 font-medium whitespace-nowrap">
                      <span>Compleate</span>
                    </td>
                    <td className="py-3 px-6 font-medium whitespace-nowrap">
                      <span>ibrahim@gamil.com</span>
                    </td>
                    <td className="py-3 px-6 font-medium whitespace-nowrap">
                      <span>Khulna</span>
                    </td>
                    <td className="py-3 px-6 font-medium whitespace-nowrap">
                      <span>Satkhira</span>
                    </td>

                    <td className="py-3 px-6 font-medium whitespace-nowrap">
                      <div className="items-center gap-4 justify-start flex">
                        <Link className="px-[10px] py-2  bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                          <AiFillEye className="w-full h-full" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default activeSeller;
