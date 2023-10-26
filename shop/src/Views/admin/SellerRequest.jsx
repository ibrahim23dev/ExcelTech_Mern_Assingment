import React from "react";
import { Link } from "react-router-dom";
function SellerRequest() {
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
                    Name
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Email
                  </th>
                  <th scope="col" className="py-3 px-4">
                    PAYMENT
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5,6,7,8,9,10].map((d, i) => (
                  <tr key={i}>
                    <td className="py-3 px-6 font-medium whitespace-nowrap">
                      {d}
                    </td>
                    
                    <td className="py-3 px-6 font-medium whitespace-nowrap">
                      <span>Mohammad Ibrahim</span>
                    </td>
                    <td className="py-3 px-6 font-medium whitespace-nowrap">
                      <span>ibrahim@gamil.com</span>
                    </td>
                    <td className="py-3 px-6 font-medium whitespace-nowrap">
                      <span>Compleate</span>
                    </td>
                    <td className="py-3 px-6 font-medium whitespace-nowrap">
                      <span>Deactive</span>
                    </td>
                    <td className="py-3 px-6 font-medium whitespace-nowrap">
                      <div className="items-center gap-4 justify-start flex">
                        <Link to="/admin/dashboard/sellerDetails" className="px-[10px] py-2 text-white  bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50 font-bold">
                          view
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

export default SellerRequest;
