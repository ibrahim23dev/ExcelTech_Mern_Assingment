import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagenation";
import { useSelector, useDispatch } from "react-redux";
import Search from "../components/Search";
import { update_task_status,delete_task } from "../../store/Reducers/TaskReducer";

const Completed = () => {
  const dispatch = useDispatch();
  const { CompletedTask, totaltask } = useSelector((state) => state.task.Completed);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);

  useEffect(() => {
    dispatch(
      update_task_status({
        parPage,
        searchValue,
        page: currentPage,
      })
    );
  }, [parPage, searchValue, currentPage]);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4  bg-[#283046] rounded-md">
        <Search
          setParPage={setParPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-xs text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Title
                </th>
                <th scope="col" className="py-3 px-4">
                  Discription
                </th>
                <th scope="col" className="py-3 px-4">
                  status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal">
              {CompletedTask &&
                CompletedTask.map((d, i) => (
                  <tr className="border-b border-slate-700" key={i}>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap"
                    >
                      {i + 1}
                    </td>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap"
                    >
                      <span>{d.title}</span>
                    </td>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap"
                    >
                      <span>{d.description}</span>
                    </td>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap"
                    >
                      <span className="font-serif font-semibold rounde-lg bg-sky-600">
                        {d.status}
                      </span>
                    </td>
                    <td
                      scope="row"
                      className="py-2 px-4 font-normal whitespace-nowrap"
                    >
                      <div className="flex justify-start items-center gap-4">
                        <Link
                          to={`/user/dashboard/update-task/:taskId`}
                          className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50"
                        >
                          <FaEdit />
                        </Link>
                        <button
                          onClick={() => dispatch(delete_task(d._id))}
                          className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {totaltask <= parPage ? (
          ""
        ) : (
          <div className="w-full flex justify-end mt-4 bottom-4 right-4">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={50}
              parPage={parPage}
              showItem={4}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Completed;
